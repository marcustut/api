import { z } from 'zod';
import { IncomeWhereInputObjectSchema } from './IncomeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IncomeListRelationFilter> = z
  .object({
    every: z.lazy(() => IncomeWhereInputObjectSchema).optional(),
    some: z.lazy(() => IncomeWhereInputObjectSchema).optional(),
    none: z.lazy(() => IncomeWhereInputObjectSchema).optional(),
  })
  .strict();

export const IncomeListRelationFilterObjectSchema = Schema;
