import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { CategoryRelationFilterObjectSchema } from './CategoryRelationFilter.schema';
import { CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema';
import { TagListRelationFilterObjectSchema } from './TagListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ExpenseWhereInputObjectSchema),
        z.lazy(() => ExpenseWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ExpenseWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ExpenseWhereInputObjectSchema),
        z.lazy(() => ExpenseWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    amount: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
    date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
    comment: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    Category: z
      .union([
        z.lazy(() => CategoryRelationFilterObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema),
      ])
      .optional(),
    categoryId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    Tag: z.lazy(() => TagListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ExpenseWhereInputObjectSchema = Schema;
