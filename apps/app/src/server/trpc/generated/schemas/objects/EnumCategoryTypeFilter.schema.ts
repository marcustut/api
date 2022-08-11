import { z } from 'zod';
import { CategoryTypeSchema } from '../enums/CategoryType.schema';
import { NestedEnumCategoryTypeFilterObjectSchema } from './NestedEnumCategoryTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumCategoryTypeFilter> = z
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
        z.lazy(() => NestedEnumCategoryTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumCategoryTypeFilterObjectSchema = Schema;
