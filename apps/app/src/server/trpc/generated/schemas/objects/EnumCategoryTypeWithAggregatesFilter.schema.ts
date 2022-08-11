import { z } from 'zod';
import { CategoryTypeSchema } from '../enums/CategoryType.schema';
import { NestedEnumCategoryTypeWithAggregatesFilterObjectSchema } from './NestedEnumCategoryTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumCategoryTypeFilterObjectSchema } from './NestedEnumCategoryTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumCategoryTypeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => CategoryTypeSchema).optional(),
    in: z
      .lazy(() => CategoryTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => CategoryTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => CategoryTypeSchema),
        z.lazy(() => NestedEnumCategoryTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumCategoryTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumCategoryTypeFilterObjectSchema).optional(),
  })
  .strict();

export const EnumCategoryTypeWithAggregatesFilterObjectSchema = Schema;
