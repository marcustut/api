import { z } from 'zod';
import { ExpenseCreateWithoutCategoryInputObjectSchema } from './ExpenseCreateWithoutCategoryInput.schema';
import { ExpenseUncheckedCreateWithoutCategoryInputObjectSchema } from './ExpenseUncheckedCreateWithoutCategoryInput.schema';
import { ExpenseCreateOrConnectWithoutCategoryInputObjectSchema } from './ExpenseCreateOrConnectWithoutCategoryInput.schema';
import { ExpenseUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './ExpenseUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { ExpenseCreateManyCategoryInputEnvelopeObjectSchema } from './ExpenseCreateManyCategoryInputEnvelope.schema';
import { ExpenseWhereUniqueInputObjectSchema } from './ExpenseWhereUniqueInput.schema';
import { ExpenseUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './ExpenseUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { ExpenseUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './ExpenseUpdateManyWithWhereWithoutCategoryInput.schema';
import { ExpenseScalarWhereInputObjectSchema } from './ExpenseScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUpdateManyWithoutCategoryNestedInput> = z.union([
  z.object({
    create: z
      .union([
        z.lazy(() => ExpenseCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => ExpenseCreateWithoutCategoryInputObjectSchema).array(),
        z.lazy(() => ExpenseUncheckedCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => ExpenseUncheckedCreateWithoutCategoryInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    connectOrCreate: z
      .union([
        z.lazy(() => ExpenseCreateOrConnectWithoutCategoryInputObjectSchema),
        z.lazy(() => ExpenseCreateOrConnectWithoutCategoryInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    upsert: z
      .union([
        z.lazy(() => ExpenseUpsertWithWhereUniqueWithoutCategoryInputObjectSchema),
        z.lazy(() => ExpenseUpsertWithWhereUniqueWithoutCategoryInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    createMany: z.lazy(() => ExpenseCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  }),
  z.object({
    set: z
      .union([
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    disconnect: z
      .union([
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    delete: z
      .union([
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    connect: z
      .union([
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    update: z
      .union([
        z.lazy(() => ExpenseUpdateWithWhereUniqueWithoutCategoryInputObjectSchema),
        z.lazy(() => ExpenseUpdateWithWhereUniqueWithoutCategoryInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    updateMany: z
      .union([
        z.lazy(() => ExpenseUpdateManyWithWhereWithoutCategoryInputObjectSchema),
        z.lazy(() => ExpenseUpdateManyWithWhereWithoutCategoryInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    deleteMany: z
      .union([
        z.lazy(() => ExpenseScalarWhereInputObjectSchema),
        z.lazy(() => ExpenseScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  }),
]);

export const ExpenseUpdateManyWithoutCategoryNestedInputObjectSchema = Schema;
