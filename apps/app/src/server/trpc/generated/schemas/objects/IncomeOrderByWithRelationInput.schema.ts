import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CategoryOrderByWithRelationInputObjectSchema } from './CategoryOrderByWithRelationInput.schema';
import { TagOrderByRelationAggregateInputObjectSchema } from './TagOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IncomeOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    comment: z.lazy(() => SortOrderSchema).optional(),
    category: z.lazy(() => CategoryOrderByWithRelationInputObjectSchema).optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    Tag: z.lazy(() => TagOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict();

export const IncomeOrderByWithRelationInputObjectSchema = Schema;
