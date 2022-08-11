import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ExpenseOrderByRelationAggregateInputObjectSchema } from './ExpenseOrderByRelationAggregateInput.schema';
import { IncomeOrderByRelationAggregateInputObjectSchema } from './IncomeOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    Expense: z.lazy(() => ExpenseOrderByRelationAggregateInputObjectSchema).optional(),
    Income: z.lazy(() => IncomeOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict();

export const TagOrderByWithRelationInputObjectSchema = Schema;
