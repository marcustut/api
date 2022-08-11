import { z } from 'zod';
import { CategoryTypeSchema } from '../enums/CategoryType.schema';
import { ExpenseUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './ExpenseUncheckedCreateNestedManyWithoutCategoryInput.schema';
import { IncomeUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './IncomeUncheckedCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    type: z.lazy(() => CategoryTypeSchema),
    Expense: z
      .lazy(() => ExpenseUncheckedCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
    Income: z
      .lazy(() => IncomeUncheckedCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryUncheckedCreateInputObjectSchema = Schema;
