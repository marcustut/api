import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { IncomeCountOrderByAggregateInputObjectSchema } from './IncomeCountOrderByAggregateInput.schema';
import { IncomeAvgOrderByAggregateInputObjectSchema } from './IncomeAvgOrderByAggregateInput.schema';
import { IncomeMaxOrderByAggregateInputObjectSchema } from './IncomeMaxOrderByAggregateInput.schema';
import { IncomeMinOrderByAggregateInputObjectSchema } from './IncomeMinOrderByAggregateInput.schema';
import { IncomeSumOrderByAggregateInputObjectSchema } from './IncomeSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IncomeOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    comment: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => IncomeCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => IncomeAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => IncomeMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => IncomeMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => IncomeSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const IncomeOrderByWithAggregationInputObjectSchema = Schema;
