import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumCategoryTypeFilterObjectSchema } from './EnumCategoryTypeFilter.schema';
import { CategoryTypeSchema } from '../enums/CategoryType.schema';
import { ExpenseListRelationFilterObjectSchema } from './ExpenseListRelationFilter.schema';
import { IncomeListRelationFilterObjectSchema } from './IncomeListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CategoryWhereInputObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CategoryWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CategoryWhereInputObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    type: z
      .union([z.lazy(() => EnumCategoryTypeFilterObjectSchema), z.lazy(() => CategoryTypeSchema)])
      .optional(),
    Expense: z.lazy(() => ExpenseListRelationFilterObjectSchema).optional(),
    Income: z.lazy(() => IncomeListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const CategoryWhereInputObjectSchema = Schema;
