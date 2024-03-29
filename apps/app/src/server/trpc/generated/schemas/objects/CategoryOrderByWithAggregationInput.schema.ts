import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CategoryCountOrderByAggregateInputObjectSchema } from './CategoryCountOrderByAggregateInput.schema';
import { CategoryMaxOrderByAggregateInputObjectSchema } from './CategoryMaxOrderByAggregateInput.schema';
import { CategoryMinOrderByAggregateInputObjectSchema } from './CategoryMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => CategoryCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => CategoryMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => CategoryMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const CategoryOrderByWithAggregationInputObjectSchema = Schema;
