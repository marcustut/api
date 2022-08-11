import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ExpenseScalarWhereInputObjectSchema),
        z.lazy(() => ExpenseScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ExpenseScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ExpenseScalarWhereInputObjectSchema),
        z.lazy(() => ExpenseScalarWhereInputObjectSchema).array(),
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
    categoryId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  })
  .strict();

export const ExpenseScalarWhereInputObjectSchema = Schema;
