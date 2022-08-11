import { createRouter } from "./helpers/createRouter";
import { TagFindUniqueSchema } from "../schemas/findUniqueTag.schema";
import { TagFindFirstSchema } from "../schemas/findFirstTag.schema";
import { TagFindManySchema } from "../schemas/findManyTag.schema";
import { TagCreateOneSchema } from "../schemas/createOneTag.schema";
import { TagCreateManySchema } from "../schemas/createManyTag.schema";
import { TagDeleteOneSchema } from "../schemas/deleteOneTag.schema";
import { TagUpdateOneSchema } from "../schemas/updateOneTag.schema";
import { TagDeleteManySchema } from "../schemas/deleteManyTag.schema";
import { TagUpdateManySchema } from "../schemas/updateManyTag.schema";
import { TagUpsertSchema } from "../schemas/upsertOneTag.schema";
import { TagAggregateSchema } from "../schemas/aggregateTag.schema";
import { TagGroupBySchema } from "../schemas/groupByTag.schema";

export const tagsRouter = createRouter()

  .query("aggregateTag", {
    input: TagAggregateSchema,
    async resolve({ ctx, input }) {
      const aggregateTag = await ctx.prisma.tag.aggregate(input);
      return aggregateTag;
    },
  })

  .mutation("createManyTag", {
    input: TagCreateManySchema,
    async resolve({ ctx, input }) {
      const createManyTag = await ctx.prisma.tag.createMany({ data: input.data });
      return createManyTag;
    },
  })

  .mutation("createOneTag", {
    input: TagCreateOneSchema,
    async resolve({ ctx, input }) {
      const createOneTag = await ctx.prisma.tag.create({ data: input.data });
      return createOneTag;
    },
  })

  .mutation("deleteManyTag", {
    input: TagDeleteManySchema,
    async resolve({ ctx, input }) {
      const deleteManyTag = await ctx.prisma.tag.deleteMany(input);
      return deleteManyTag;
    },
  })

  .mutation("deleteOneTag", {
    input: TagDeleteOneSchema,
    async resolve({ ctx, input }) {
      const deleteOneTag = await ctx.prisma.tag.delete({ where: input.where });
      return deleteOneTag;
    },
  })

  .query("findFirstTag", {
    input: TagFindFirstSchema,
    async resolve({ ctx, input }) {
      const findFirstTag = await ctx.prisma.tag.findFirst(input);
      return findFirstTag;
    },
  })

  .query("findManyTag", {
    input: TagFindManySchema,
    async resolve({ ctx, input }) {
      const findManyTag = await ctx.prisma.tag.findMany(input);
      return findManyTag;
    },
  })

  .query("findUniqueTag", {
    input: TagFindUniqueSchema,
    async resolve({ ctx, input }) {
      const findUniqueTag = await ctx.prisma.tag.findUnique({ where: input.where });
      return findUniqueTag;
    },
  })

  .query("groupByTag", {
    input: TagGroupBySchema,
    async resolve({ ctx, input }) {
      const groupByTag = await ctx.prisma.tag.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTag;
    },
  })

  .mutation("updateManyTag", {
    input: TagUpdateManySchema,
    async resolve({ ctx, input }) {
      const updateManyTag = await ctx.prisma.tag.updateMany(input);
      return updateManyTag;
    },
  })

  .mutation("updateOneTag", {
    input: TagUpdateOneSchema,
    async resolve({ ctx, input }) {
      const updateOneTag = await ctx.prisma.tag.update({ where: input.where, data: input.data });
      return updateOneTag;
    },
  })

  .mutation("upsertOneTag", {
    input: TagUpsertSchema,
    async resolve({ ctx, input }) {
      const upsertOneTag = await ctx.prisma.tag.upsert({ where: input.where, create: input.create, update: input.update });
      return upsertOneTag;
    },
  })
