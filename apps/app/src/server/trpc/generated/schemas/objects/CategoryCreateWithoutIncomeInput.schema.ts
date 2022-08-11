import { z } from 'zod';
import { CategoryTypeSchema } from '../enums/CategoryType.schema';
import { ExpenseCreateNestedManyWithoutCategoryInputObjectSchema } from './ExpenseCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateWithoutIncomeInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    type: z.lazy(() => CategoryTypeSchema),
    Expense: z.lazy(() => ExpenseCreateNestedManyWithoutCategoryInputObjectSchema).optional(),
  })
  .strict();

export const CategoryCreateWithoutIncomeInputObjectSchema = Schema;
