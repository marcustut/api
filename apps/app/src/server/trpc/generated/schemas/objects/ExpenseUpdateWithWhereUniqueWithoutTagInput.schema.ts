import { z } from 'zod';
import { ExpenseWhereUniqueInputObjectSchema } from './ExpenseWhereUniqueInput.schema';
import { ExpenseUpdateWithoutTagInputObjectSchema } from './ExpenseUpdateWithoutTagInput.schema';
import { ExpenseUncheckedUpdateWithoutTagInputObjectSchema } from './ExpenseUncheckedUpdateWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUpdateWithWhereUniqueWithoutTagInput> = z
  .object({
    where: z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ExpenseUpdateWithoutTagInputObjectSchema),
      z.lazy(() => ExpenseUncheckedUpdateWithoutTagInputObjectSchema),
    ]),
  })
  .strict();

export const ExpenseUpdateWithWhereUniqueWithoutTagInputObjectSchema = Schema;
