import { eq, desc, and, like } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, blogPosts, caseStudies, services, contactSubmissions, consultationBookings, testimonials } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

/**
 * Lazily create the drizzle instance so local tooling can run without a DB.
 */
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

/**
 * User Management
 */
export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

/**
 * Blog Posts Management
 */
export async function getBlogPosts(limit?: number, offset?: number) {
  const db = await getDb();
  if (!db) return [];

  let query = db.select().from(blogPosts).where(eq(blogPosts.published, true)).orderBy(desc(blogPosts.publishedAt));
  
  if (limit && offset) {
    return query.limit(limit).offset(offset);
  }
  if (limit) {
    return query.limit(limit);
  }
  if (offset) {
    return query.offset(offset);
  }

  return query;
}

export async function getBlogPostBySlug(slug: string) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getBlogPostsByCategory(category: string, limit?: number) {
  const db = await getDb();
  if (!db) return [];

  let query = db.select().from(blogPosts).where(and(eq(blogPosts.category, category), eq(blogPosts.published, true))).orderBy(desc(blogPosts.publishedAt));
  
  if (limit) {
    return query.limit(limit);
  }

  return query;
}

export async function searchBlogPosts(searchTerm: string) {
  const db = await getDb();
  if (!db) return [];

  return db.select().from(blogPosts).where(and(
    eq(blogPosts.published, true),
    like(blogPosts.title, `%${searchTerm}%`)
  )).orderBy(desc(blogPosts.publishedAt));
}

/**
 * Case Studies Management
 */
export async function getCaseStudies(limit?: number) {
  const db = await getDb();
  if (!db) return [];

  let query = db.select().from(caseStudies).where(eq(caseStudies.published, true)).orderBy(desc(caseStudies.createdAt));
  
  if (limit) {
    return query.limit(limit);
  }

  return query;
}

export async function getCaseStudyBySlug(slug: string) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(caseStudies).where(eq(caseStudies.slug, slug)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

/**
 * Services Management
 */
export async function getServices() {
  const db = await getDb();
  if (!db) return [];

  return db.select().from(services).where(eq(services.published, true)).orderBy(services.order);
}

export async function getServicesByCategory(category: 'execution' | 'consulting') {
  const db = await getDb();
  if (!db) return [];

  return db.select().from(services).where(and(eq(services.category, category), eq(services.published, true))).orderBy(services.order);
}

/**
 * Contact Submissions Management
 */
export async function createContactSubmission(submission: typeof contactSubmissions.$inferInsert) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.insert(contactSubmissions).values(submission);
  return result;
}

export async function getContactSubmissions() {
  const db = await getDb();
  if (!db) return [];

  return db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
}

/**
 * Consultation Bookings Management
 */
// استبدل الكود القديم بهذا الكود الجديد (Mock Version)
export async function createConsultationBooking(booking: any) {
  // محاكاة وضع المطور: طباعة البيانات في التيرمينال بدلاً من القاعدة
  console.log("⚠️ [MOCK MODE] Received Booking:", booking);
  
  // انتظار وهمي لمدة ثانية ليشعر المستخدم أن هناك معالجة
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // إرجاع رد نجاح وهمي
  return [{ insertedId: 123 }];
}

export async function getConsultationBookings() {
  const db = await getDb();
  if (!db) return [];

  return db.select().from(consultationBookings).orderBy(desc(consultationBookings.createdAt));
}

export async function updateConsultationBookingStatus(id: number, status: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  return db.update(consultationBookings).set({ status: status as any }).where(eq(consultationBookings.id, id));
}

/**
 * Testimonials Management
 */
export async function getTestimonials(limit?: number) {
  const db = await getDb();
  if (!db) return [];

  let query = db.select().from(testimonials).where(eq(testimonials.published, true)).orderBy(desc(testimonials.createdAt));
  
  if (limit) {
    return query.limit(limit);
  }

  return query;
}
