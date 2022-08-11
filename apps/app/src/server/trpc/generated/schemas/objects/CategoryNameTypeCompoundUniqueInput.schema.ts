import { z } from 'zod';
import { CategoryTypeSchema } from '../enums/CategoryType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryNameTypeCompoundUniqueInput> = z
  .object({
    name: z.string(),
    type: z.lazy(() => CategoryTypeSchema),
  })
  .strict();

export const CategoryNameTypeCompoundUniqueInputObjectSchema = Schema;
