import { z } from 'zod';
import { ExpenseWhereUniqueInputObjectSchema } from './ExpenseWhereUniqueInput.schema';
import { ExpenseCreateWithoutTagInputObjectSchema } from './ExpenseCreateWithoutTagInput.schema';
import { ExpenseUncheckedCreateWithoutTagInputObjectSchema } from './ExpenseUncheckedCreateWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseCreateOrConnectWithoutTagInput> = z
  .object({
    where: z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ExpenseCreateWithoutTagInputObjectSchema),
      z.lazy(() => ExpenseUncheckedCreateWithoutTagInputObjectSchema),
    ]),
  })
  .strict();

export const ExpenseCreateOrConnectWithoutTagInputObjectSchema = Schema;
