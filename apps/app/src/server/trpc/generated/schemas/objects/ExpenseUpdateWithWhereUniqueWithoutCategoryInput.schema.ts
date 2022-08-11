import { z } from 'zod';
import { ExpenseWhereUniqueInputObjectSchema } from './ExpenseWhereUniqueInput.schema';
import { ExpenseUpdateWithoutCategoryInputObjectSchema } from './ExpenseUpdateWithoutCategoryInput.schema';
import { ExpenseUncheckedUpdateWithoutCategoryInputObjectSchema } from './ExpenseUncheckedUpdateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUpdateWithWhereUniqueWithoutCategoryInput> = z
  .object({
    where: z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ExpenseUpdateWithoutCategoryInputObjectSchema),
      z.lazy(() => ExpenseUncheckedUpdateWithoutCategoryInputObjectSchema),
    ]),
  })
  .strict();

export const ExpenseUpdateWithWhereUniqueWithoutCategoryInputObjectSchema = Schema;
