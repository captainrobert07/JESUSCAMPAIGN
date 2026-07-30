import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const houseOfWorshipRegistrations = sqliteTable(
  "house_of_worship_registrations",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    registrationId: text("registration_id").notNull().unique(),
    fullName: text("full_name").notNull(),
    location: text("location").notNull(),
    contactNumber: text("contact_number").notNull(),
    eventDate: text("event_date").notNull().default("2026-08-29"),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
);
