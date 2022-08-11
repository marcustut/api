import { createRouter } from "./helpers/createRouter";
import { ExpenseFindUniqueSchema } from "../schemas/findUniqueExpense.schema";
import { ExpenseFindFirstSchema } from "../schemas/findFirstExpense.schema";
import { ExpenseFindManySchema } from "../schemas/findManyExpense.schema";
import { ExpenseCreateOneSchema } from "../schemas/createOneExpense.schema";
import { ExpenseCreateManySchema } from "../schemas/createManyExpense.schema";
import { ExpenseDeleteOneSchema } from "../schemas/deleteOneExpense.schema";
import { ExpenseUpdateOneSchema } from "../schemas/updateOneExpense.schema";
import { ExpenseDeleteManySchema } from "../schemas/deleteManyExpense.schema";
import { ExpenseUpdateManySchema } from "../schemas/updateManyExpense.schema";
import { ExpenseUpsertSchema } from "../schemas/upsertOneExpense.schema";
import { ExpenseAggregateSchema } from "../schemas/aggregateExpense.schema";
import { ExpenseGroupBySchema } from "../schemas/groupByExpense.schema";

export const expensesRouter = createRouter()

  .query("aggregateExpense", {
    input: ExpenseAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateExpense = await ctx.prisma.expense.aggregate(input);
      return aggregateExpense;
    },
  })

  .mutation("createManyExpense", {
    input: ExpenseCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyExpense = await ctx.prisma.expense.createMany({ data: input.data });
      return createManyExpense;
    },
  })

  .mutation("createOneExpense", {
    input: ExpenseCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneExpense = await ctx.prisma.expense.create({ data: input.data });
      return createOneExpense;
    },
  })

  .mutation("deleteManyExpense", {
    input: ExpenseDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyExpense = await ctx.prisma.expense.deleteMany(input);
      return deleteManyExpense;
    },
  })

  .mutation("deleteOneExpense", {
    input: ExpenseDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneExpense = await ctx.prisma.expense.delete({ where: input.where });
      return deleteOneExpense;
    },
  })

  .query("findFirstExpense", {
    input: ExpenseFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstExpense = await ctx.prisma.expense.findFirst(input);
      return findFirstExpense;
    },
  })

  .query("findManyExpense", {
    input: ExpenseFindManySchema,
    async resolve({ ctx, input }) {
      const findManyExpense = await ctx.prisma.expense.findMany(input);
      return findManyExpense;
    },
  })

  .query("findUniqueExpense", {
    input: ExpenseFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueExpense = await ctx.prisma.expense.findUnique({ where: input.where });
      return findUniqueExpense;
    },
  })

  .query("groupByExpense", {
    input: ExpenseGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByExpense = await ctx.prisma.expense.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByExpense;
    },
  })

  .mutation("updateManyExpense", {
    input: ExpenseUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyExpense = await ctx.prisma.expense.updateMany(input);
      return updateManyExpense;
    },
  })

  .mutation("updateOneExpense", {
    input: ExpenseUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneExpense = await ctx.prisma.expense.update({ where: input.where, data: input.data });
      return updateOneExpense;
    },
  })

  .mutation("upsertOneExpense", {
    input: ExpenseUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneExpense = await ctx.prisma.expense.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneExpense;
    },
  })
