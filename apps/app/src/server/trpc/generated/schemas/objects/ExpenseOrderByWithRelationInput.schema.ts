import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CategoryOrderByWithRelationInputObjectSchema } from './CategoryOrderByWithRelationInput.schema';
import { TagOrderByRelationAggregateInputObjectSchema } from './TagOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    comment: z.lazy(() => SortOrderSchema).optional(),
    Category: z.lazy(() => CategoryOrderByWithRelationInputObjectSchema).optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    Tag: z.lazy(() => TagOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ExpenseOrderByWithRelationInputObjectSchema = Schema;
