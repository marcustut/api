import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TagCountOrderByAggregateInputObjectSchema } from './TagCountOrderByAggregateInput.schema';
import { TagMaxOrderByAggregateInputObjectSchema } from './TagMaxOrderByAggregateInput.schema';
import { TagMinOrderByAggregateInputObjectSchema } from './TagMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => TagCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => TagMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => TagMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const TagOrderByWithAggregationInputObjectSchema = Schema;
