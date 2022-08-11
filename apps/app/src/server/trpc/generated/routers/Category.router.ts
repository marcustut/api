import { createRouter } from "./helpers/createRouter";
import { CategoryFindUniqueSchema } from "../schemas/findUniqueCategory.schema";
import { CategoryFindFirstSchema } from "../schemas/findFirstCategory.schema";
import { CategoryFindManySchema } from "../schemas/findManyCategory.schema";
import { CategoryCreateOneSchema } from "../schemas/createOneCategory.schema";
import { CategoryCreateManySchema } from "../schemas/createManyCategory.schema";
import { CategoryDeleteOneSchema } from "../schemas/deleteOneCategory.schema";
import { CategoryUpdateOneSchema } from "../schemas/updateOneCategory.schema";
import { CategoryDeleteManySchema } from "../schemas/deleteManyCategory.schema";
import { CategoryUpdateManySchema } from "../schemas/updateManyCategory.schema";
import { CategoryUpsertSchema } from "../schemas/upsertOneCategory.schema";
import { CategoryAggregateSchema } from "../schemas/aggregateCategory.schema";
import { CategoryGroupBySchema } from "../schemas/groupByCategory.schema";

export const categoriesRouter = createRouter()

  .query("aggregateCategory", {
    input: CategoryAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateCategory = await ctx.prisma.category.aggregate(input);
      return aggregateCategory;
    },
  })

  .mutation("createManyCategory", {
    input: CategoryCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyCategory = await ctx.prisma.category.createMany({ data: input.data });
      return createManyCategory;
    },
  })

  .mutation("createOneCategory", {
    input: CategoryCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneCategory = await ctx.prisma.category.create({ data: input.data });
      return createOneCategory;
    },
  })

  .mutation("deleteManyCategory", {
    input: CategoryDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyCategory = await ctx.prisma.category.deleteMany(input);
      return deleteManyCategory;
    },
  })

  .mutation("deleteOneCategory", {
    input: CategoryDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneCategory = await ctx.prisma.category.delete({ where: input.where });
      return deleteOneCategory;
    },
  })

  .query("findFirstCategory", {
    input: CategoryFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstCategory = await ctx.prisma.category.findFirst(input);
      return findFirstCategory;
    },
  })

  .query("findManyCategory", {
    input: CategoryFindManySchema,
    async resolve({ ctx, input }) {
      const findManyCategory = await ctx.prisma.category.findMany(input);
      return findManyCategory;
    },
  })

  .query("findUniqueCategory", {
    input: CategoryFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueCategory = await ctx.prisma.category.findUnique({ where: input.where });
      return findUniqueCategory;
    },
  })

  .query("groupByCategory", {
    input: CategoryGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByCategory = await ctx.prisma.category.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByCategory;
    },
  })

  .mutation("updateManyCategory", {
    input: CategoryUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyCategory = await ctx.prisma.category.updateMany(input);
      return updateManyCategory;
    },
  })

  .mutation("updateOneCategory", {
    input: CategoryUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneCategory = await ctx.prisma.category.update({ where: input.where, data: input.data });
      return updateOneCategory;
    },
  })

  .mutation("upsertOneCategory", {
    input: CategoryUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneCategory = await ctx.prisma.category.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneCategory;
    },
  })
