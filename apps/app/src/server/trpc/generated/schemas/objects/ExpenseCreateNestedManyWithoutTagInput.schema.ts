import { z } from 'zod';
import { ExpenseCreateWithoutTagInputObjectSchema } from './ExpenseCreateWithoutTagInput.schema';
import { ExpenseUncheckedCreateWithoutTagInputObjectSchema } from './ExpenseUncheckedCreateWithoutTagInput.schema';
import { ExpenseCreateOrConnectWithoutTagInputObjectSchema } from './ExpenseCreateOrConnectWithoutTagInput.schema';
import { ExpenseWhereUniqueInputObjectSchema } from './ExpenseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseCreateNestedManyWithoutTagInput> = z.union([
  z.object({
    create: z
      .union([
        z.lazy(() => ExpenseCreateWithoutTagInputObjectSchema),
        z.lazy(() => ExpenseCreateWithoutTagInputObjectSchema).array(),
        z.lazy(() => ExpenseUncheckedCreateWithoutTagInputObjectSchema),
        z.lazy(() => ExpenseUncheckedCreateWithoutTagInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    connectOrCreate: z
      .union([
        z.lazy(() => ExpenseCreateOrConnectWithoutTagInputObjectSchema),
        z.lazy(() => ExpenseCreateOrConnectWithoutTagInputObjectSchema).array(),
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
]);

export const ExpenseCreateNestedManyWithoutTagInputObjectSchema = Schema;
