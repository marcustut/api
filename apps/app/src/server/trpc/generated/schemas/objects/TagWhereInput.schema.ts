import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ExpenseListRelationFilterObjectSchema } from './ExpenseListRelationFilter.schema';
import { IncomeListRelationFilterObjectSchema } from './IncomeListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TagWhereInputObjectSchema),
        z.lazy(() => TagWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TagWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TagWhereInputObjectSchema),
        z.lazy(() => TagWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    Expense: z.lazy(() => ExpenseListRelationFilterObjectSchema).optional(),
    Income: z.lazy(() => IncomeListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const TagWhereInputObjectSchema = Schema;
