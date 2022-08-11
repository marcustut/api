import { z } from 'zod';
import { CategoryTypeSchema } from '../enums/CategoryType.schema';
import { ExpenseUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './ExpenseUncheckedCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutIncomeInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    type: z.lazy(() => CategoryTypeSchema),
    Expense: z
      .lazy(() => ExpenseUncheckedCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryUncheckedCreateWithoutIncomeInputObjectSchema = Schema;
