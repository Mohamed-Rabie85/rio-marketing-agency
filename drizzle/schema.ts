import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean, decimal } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Blog posts table for storing articles and insights
 */
export const blogPosts = mysqlTable("blog_posts", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  category: varchar("category", { length: 100 }).notNull(), // e.g., "استراتيجيات النمو", "مهارات القيادة"
  author: varchar("author", { length: 255 }).default("محمد ربيع"),
  readTime: int("readTime").default(5), // in minutes
  featuredImage: varchar("featuredImage", { length: 500 }),
  published: boolean("published").default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  publishedAt: timestamp("publishedAt"),
});

export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = typeof blogPosts.$inferInsert;

/**
 * Case studies table for portfolio and success stories
 */
export const caseStudies = mysqlTable("case_studies", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  clientName: varchar("clientName", { length: 255 }).notNull(),
  industry: varchar("industry", { length: 100 }),
  challenge: text("challenge").notNull(),
  solution: text("solution").notNull(),
  results: text("results").notNull(),
  metrics: text("metrics"), // JSON string with key metrics
  testimonial: text("testimonial"),
  testimonialAuthor: varchar("testimonialAuthor", { length: 255 }),
  testimonialRole: varchar("testimonialRole", { length: 255 }),
  featuredImage: varchar("featuredImage", { length: 500 }),
  caseStudyPDF: varchar("caseStudyPDF", { length: 500 }),
  published: boolean("published").default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type CaseStudy = typeof caseStudies.$inferSelect;
export type InsertCaseStudy = typeof caseStudies.$inferInsert;

/**
 * Services table for displaying service packages and pricing
 */
export const services = mysqlTable("services", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  category: mysqlEnum("category", ["execution", "consulting"]).notNull(),
  description: text("description").notNull(),
  features: text("features"), // JSON string with array of features
  price: decimal("price", { precision: 10, scale: 2 }),
  duration: varchar("duration", { length: 100 }), // e.g., "3 أشهر", "شهري"
  icon: varchar("icon", { length: 100 }), // icon name or emoji
  order: int("order").default(0), // for sorting
  published: boolean("published").default(true),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Service = typeof services.$inferSelect;
export type InsertService = typeof services.$inferInsert;

/**
 * Contact form submissions
 */
export const contactSubmissions = mysqlTable("contact_submissions", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  company: varchar("company", { length: 255 }),
  message: text("message").notNull(),
  subject: varchar("subject", { length: 255 }),
  read: boolean("read").default(false),
  responded: boolean("responded").default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = typeof contactSubmissions.$inferInsert;

/**
 * Consultation booking requests
 */
export const consultationBookings = mysqlTable("consultation_bookings", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  company: varchar("company", { length: 255 }),
  serviceType: varchar("serviceType", { length: 255 }).notNull(), // e.g., "تشخيص استراتيجي", "شريك تسويقي"
  preferredDate: timestamp("preferredDate"),
  preferredTime: varchar("preferredTime", { length: 50 }),
  message: text("message"),
  status: mysqlEnum("status", ["pending", "confirmed", "completed", "cancelled"]).default("pending"),
  notificationSent: boolean("notificationSent").default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ConsultationBooking = typeof consultationBookings.$inferSelect;
export type InsertConsultationBooking = typeof consultationBookings.$inferInsert;

/**
 * Testimonials and client reviews
 */
export const testimonials = mysqlTable("testimonials", {
  id: int("id").autoincrement().primaryKey(),
  clientName: varchar("clientName", { length: 255 }).notNull(),
  clientRole: varchar("clientRole", { length: 255 }),
  company: varchar("company", { length: 255 }),
  content: text("content").notNull(),
  rating: int("rating").default(5), // 1-5 stars
  clientImage: varchar("clientImage", { length: 500 }),
  published: boolean("published").default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = typeof testimonials.$inferInsert;
