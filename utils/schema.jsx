import {
  integer,
  numeric,
  pgTable,
  serial,
  varchar,
} from "drizzle-orm/pg-core";

export const Budgets = pgTable("budgets", {
  id: serial("userid").primaryKey(),
  name: varchar("username").notNull(),
  amount: varchar("amount").notNull(),
  icon: varchar("icon"),
  createdBy: varchar("createdby").notNull(),
});

export const Incomes = pgTable("incomes", {
  id: serial("userid").primaryKey(),
  name: varchar("username").notNull(),
  amount: varchar("amount").notNull(),
  icon: varchar("icon"),
  createdBy: varchar("createdby").notNull(),
});
export const Expenses = pgTable("expenses", {
  id: serial("userid").primaryKey(),
  name: varchar("username").notNull(),
  amount: numeric("amount").notNull().default(0),
  budgetId: integer("budgetid").references(() => Budgets.id),
  createdAt: varchar("createdat").notNull(),
});
