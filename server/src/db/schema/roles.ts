import {
  pgTable,
  serial,
  timestamp,
  varchar,
  boolean,
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
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  deletedAt: timestamp("deleted_at").defaultNow(),
});

export const rolesRelations = relations(users, ({ many }) => ({
  users: many(users),
}));

export default roles;
