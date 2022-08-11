import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumCategoryTypeWithAggregatesFilterObjectSchema } from './EnumCategoryTypeWithAggregatesFilter.schema';
import { CategoryTypeSchema } from '../enums/CategoryType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CategoryScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => CategoryScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CategoryScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CategoryScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => CategoryScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    type: z
      .union([
        z.lazy(() => EnumCategoryTypeWithAggregatesFilterObjectSchema),
        z.lazy(() => CategoryTypeSchema),
      ])
      .optional(),
  })
  .strict();

export const CategoryScalarWhereWithAggregatesInputObjectSchema = Schema;
