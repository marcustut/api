import { createRouter } from "./helpers/createRouter";
import { IncomeFindUniqueSchema } from "../schemas/findUniqueIncome.schema";
import { IncomeFindFirstSchema } from "../schemas/findFirstIncome.schema";
import { IncomeFindManySchema } from "../schemas/findManyIncome.schema";
import { IncomeCreateOneSchema } from "../schemas/createOneIncome.schema";
import { IncomeCreateManySchema } from "../schemas/createManyIncome.schema";
import { IncomeDeleteOneSchema } from "../schemas/deleteOneIncome.schema";
import { IncomeUpdateOneSchema } from "../schemas/updateOneIncome.schema";
import { IncomeDeleteManySchema } from "../schemas/deleteManyIncome.schema";
import { IncomeUpdateManySchema } from "../schemas/updateManyIncome.schema";
import { IncomeUpsertSchema } from "../schemas/upsertOneIncome.schema";
import { IncomeAggregateSchema } from "../schemas/aggregateIncome.schema";
import { IncomeGroupBySchema } from "../schemas/groupByIncome.schema";

export const incomesRouter = createRouter()

  .query("aggregateIncome", {
    input: IncomeAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateIncome = await ctx.prisma.income.aggregate(input);
      return aggregateIncome;
    },
  })

  .mutation("createManyIncome", {
    input: IncomeCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyIncome = await ctx.prisma.income.createMany({ data: input.data });
      return createManyIncome;
    },
  })

  .mutation("createOneIncome", {
    input: IncomeCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneIncome = await ctx.prisma.income.create({ data: input.data });
      return createOneIncome;
    },
  })

  .mutation("deleteManyIncome", {
    input: IncomeDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyIncome = await ctx.prisma.income.deleteMany(input);
      return deleteManyIncome;
    },
  })

  .mutation("deleteOneIncome", {
    input: IncomeDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneIncome = await ctx.prisma.income.delete({ where: input.where });
      return deleteOneIncome;
    },
  })

  .query("findFirstIncome", {
    input: IncomeFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstIncome = await ctx.prisma.income.findFirst(input);
      return findFirstIncome;
    },
  })

  .query("findManyIncome", {
    input: IncomeFindManySchema,
    async resolve({ ctx, input }) {
      const findManyIncome = await ctx.prisma.income.findMany(input);
      return findManyIncome;
    },
  })

  .query("findUniqueIncome", {
    input: IncomeFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueIncome = await ctx.prisma.income.findUnique({ where: input.where });
      return findUniqueIncome;
    },
  })

  .query("groupByIncome", {
    input: IncomeGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByIncome = await ctx.prisma.income.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByIncome;
    },
  })

  .mutation("updateManyIncome", {
    input: IncomeUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyIncome = await ctx.prisma.income.updateMany(input);
      return updateManyIncome;
    },
  })

  .mutation("updateOneIncome", {
    input: IncomeUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneIncome = await ctx.prisma.income.update({ where: input.where, data: input.data });
      return updateOneIncome;
    },
  })

  .mutation("upsertOneIncome", {
    input: IncomeUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneIncome = await ctx.prisma.income.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneIncome;
    },
  })
