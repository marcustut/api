import { z } from 'zod';
import { CategoryTypeSchema } from '../enums/CategoryType.schema';
import { IncomeCreateNestedManyWithoutCategoryInputObjectSchema } from './IncomeCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateWithoutExpenseInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    type: z.lazy(() => CategoryTypeSchema),
    Income: z.lazy(() => IncomeCreateNestedManyWithoutCategoryInputObjectSchema).optional(),
  })
  .strict();

export const CategoryCreateWithoutExpenseInputObjectSchema = Schema;
