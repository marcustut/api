import { z } from 'zod';
import { ExpenseWhereInputObjectSchema } from './ExpenseWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseListRelationFilter> = z
  .object({
    every: z.lazy(() => ExpenseWhereInputObjectSchema).optional(),
    some: z.lazy(() => ExpenseWhereInputObjectSchema).optional(),
    none: z.lazy(() => ExpenseWhereInputObjectSchema).optional(),
  })
  .strict();

export const ExpenseListRelationFilterObjectSchema = Schema;
