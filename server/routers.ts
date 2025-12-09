import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,
  
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  /**
   * Blog Posts Router
   */
  blog: router({
    // Get all published blog posts with pagination
    getPosts: publicProcedure
      .input(z.object({
        limit: z.number().default(10),
        offset: z.number().default(0),
      }))
      .query(async ({ input }) => {
        return db.getBlogPosts(input.limit, input.offset);
      }),

    // Get blog post by slug
    getPostBySlug: publicProcedure
      .input(z.object({
        slug: z.string(),
      }))
      .query(async ({ input }) => {
        return db.getBlogPostBySlug(input.slug);
      }),

    // Get blog posts by category
    getPostsByCategory: publicProcedure
      .input(z.object({
        category: z.string(),
        limit: z.number().default(10),
      }))
      .query(async ({ input }) => {
        return db.getBlogPostsByCategory(input.category, input.limit);
      }),

    // Search blog posts
    searchPosts: publicProcedure
      .input(z.object({
        searchTerm: z.string(),
      }))
      .query(async ({ input }) => {
        return db.searchBlogPosts(input.searchTerm);
      }),
  }),

  /**
   * Case Studies Router
   */
  caseStudies: router({
    // Get all published case studies
    getStudies: publicProcedure
      .input(z.object({
        limit: z.number().optional(),
      }))
      .query(async ({ input }) => {
        return db.getCaseStudies(input.limit);
      }),

    // Get case study by slug
    getStudyBySlug: publicProcedure
      .input(z.object({
        slug: z.string(),
      }))
      .query(async ({ input }) => {
        return db.getCaseStudyBySlug(input.slug);
      }),
  }),

  /**
   * Services Router
   */
  services: router({
    // Get all published services
    getServices: publicProcedure.query(async () => {
      return db.getServices();
    }),

    // Get services by category (execution or consulting)
    getServicesByCategory: publicProcedure
      .input(z.object({
        category: z.enum(["execution", "consulting"]),
      }))
      .query(async ({ input }) => {
        return db.getServicesByCategory(input.category);
      }),
  }),

  /**
   * Testimonials Router
   */
  testimonials: router({
    // Get published testimonials
    getTestimonials: publicProcedure
      .input(z.object({
        limit: z.number().optional(),
      }))
      .query(async ({ input }) => {
        return db.getTestimonials(input.limit);
      }),
  }),

  /**
   * Contact Form Router
   */
  contact: router({
    // Submit contact form
    submitForm: publicProcedure
      .input(z.object({
        name: z.string().min(2),
        email: z.string().email(),
        phone: z.string().optional(),
        company: z.string().optional(),
        subject: z.string().optional(),
        message: z.string().min(10),
      }))
      .mutation(async ({ input }) => {
        try {
          const result = await db.createContactSubmission({
            name: input.name,
            email: input.email,
            phone: input.phone,
            company: input.company,
            subject: input.subject,
            message: input.message,
          });

          // Send notification to owner
          await notifyOwner({
            title: `رسالة اتصال جديدة من ${input.name}`,
            content: `تم استقبال رسالة جديدة من ${input.name} (${input.email})\n\nالموضوع: ${input.subject || 'بدون موضوع'}\n\nالرسالة:\n${input.message}`,
          });

          return { success: true, message: "تم إرسال رسالتك بنجاح" };
        } catch (error) {
          console.error("Contact form error:", error);
          throw new Error("فشل إرسال الرسالة");
        }
      }),
  }),

  /**
   * Consultation Booking Router
   */
  consultation: router({
    // Book a consultation session
    bookSession: publicProcedure
      .input(z.object({
        name: z.string().min(2),
        email: z.string().email(),
        phone: z.string().min(10),
        company: z.string().optional(),
        serviceType: z.string(),
        preferredDate: z.date().optional(),
        preferredTime: z.string().optional(),
        message: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        try {
          const result = await db.createConsultationBooking({
            name: input.name,
            email: input.email,
            phone: input.phone,
            company: input.company,
            serviceType: input.serviceType,
            preferredDate: input.preferredDate,
            preferredTime: input.preferredTime,
            message: input.message,
            status: "pending",
          });

          // Send notification to owner
          await notifyOwner({
            title: `طلب حجز جلسة استشارية جديد من ${input.name}`,
            content: `تم استقبال طلب حجز جلسة استشارية جديد\n\nالعميل: ${input.name}\nالبريد الإلكتروني: ${input.email}\nرقم الهاتف: ${input.phone}\nنوع الخدمة: ${input.serviceType}\nالتاريخ المفضل: ${input.preferredDate || 'لم يتم التحديد'}\nالوقت المفضل: ${input.preferredTime || 'لم يتم التحديد'}\n\nالملاحظات:\n${input.message || 'لا توجد ملاحظات'}`,
          });

          return { 
            success: true, 
            message: "تم استقبال طلب حجز الجلسة بنجاح. سيتم التواصل معك قريباً" 
          };
        } catch (error) {
          console.error("Consultation booking error:", error);
          throw new Error("فشل حجز الجلسة");
        }
      }),

    // Get consultation bookings (admin only)
    getBookings: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new Error("غير مصرح");
      }
      return db.getConsultationBookings();
    }),

    // Update booking status (admin only)
    updateBookingStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["pending", "confirmed", "completed", "cancelled"]),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== "admin") {
          throw new Error("غير مصرح");
        }
        return db.updateConsultationBookingStatus(input.id, input.status);
      }),
  }),
});

export type AppRouter = typeof appRouter;
