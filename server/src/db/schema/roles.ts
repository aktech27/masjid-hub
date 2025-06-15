import {
  pgTable,
  serial,
  timestamp,
  varchar,
  boolean,
  integer,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import users from "./users";

const roles = pgTable("roles", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 30 }).notNull(),
  code: varchar("code", { length: 10 }).notNull().unique(),
  description: varchar("description", { length: 255 }),
  isDeleted: boolean("is_deleted").default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at"),
  deletedAt: timestamp("deleted_at"),
  createdBy: integer("created_by"),
  updatedBy: integer("updated_by"),
  deletedBy: integer("deleted_by"),
});

export const rolesRelations = relations(users, ({ many }) => ({
  users: many(users),
}));

export type SelectRole = typeof roles.$inferSelect;
export type InsertRole = typeof roles.$inferInsert;

export default roles;
