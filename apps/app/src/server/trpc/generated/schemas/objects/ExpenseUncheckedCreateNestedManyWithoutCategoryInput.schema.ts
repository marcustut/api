import { z } from 'zod';
import { ExpenseCreateWithoutCategoryInputObjectSchema } from './ExpenseCreateWithoutCategoryInput.schema';
import { ExpenseUncheckedCreateWithoutCategoryInputObjectSchema } from './ExpenseUncheckedCreateWithoutCategoryInput.schema';
import { ExpenseCreateOrConnectWithoutCategoryInputObjectSchema } from './ExpenseCreateOrConnectWithoutCategoryInput.schema';
import { ExpenseCreateManyCategoryInputEnvelopeObjectSchema } from './ExpenseCreateManyCategoryInputEnvelope.schema';
import { ExpenseWhereUniqueInputObjectSchema } from './ExpenseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUncheckedCreateNestedManyWithoutCategoryInput> = z.union([
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
    createMany: z.lazy(() => ExpenseCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  }),
  z.object({
    connect: z
      .union([
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
]);

export const ExpenseUncheckedCreateNestedManyWithoutCategoryInputObjectSchema = Schema;
