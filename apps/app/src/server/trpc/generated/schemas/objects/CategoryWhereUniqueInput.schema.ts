import { z } from 'zod';
import { CategoryNameTypeCompoundUniqueInputObjectSchema } from './CategoryNameTypeCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    name_type: z.lazy(() => CategoryNameTypeCompoundUniqueInputObjectSchema).optional(),
  })
  .strict();

export const CategoryWhereUniqueInputObjectSchema = Schema;
