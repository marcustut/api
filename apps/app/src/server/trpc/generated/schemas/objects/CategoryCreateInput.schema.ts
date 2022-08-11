import { z } from 'zod';
import { CategoryTypeSchema } from '../enums/CategoryType.schema';
import { ExpenseCreateNestedManyWithoutCategoryInputObjectSchema } from './ExpenseCreateNestedManyWithoutCategoryInput.schema';
import { IncomeCreateNestedManyWithoutCategoryInputObjectSchema } from './IncomeCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    type: z.lazy(() => CategoryTypeSchema),
    Expense: z.lazy(() => ExpenseCreateNestedManyWithoutCategoryInputObjectSchema).optional(),
    Income: z.lazy(() => IncomeCreateNestedManyWithoutCategoryInputObjectSchema).optional(),
  })
  .strict();

export const CategoryCreateInputObjectSchema = Schema;
