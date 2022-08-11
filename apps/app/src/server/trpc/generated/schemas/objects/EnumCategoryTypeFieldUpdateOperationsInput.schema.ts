import { z } from 'zod';
import { CategoryTypeSchema } from '../enums/CategoryType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumCategoryTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => CategoryTypeSchema).optional(),
  })
  .strict();

export const EnumCategoryTypeFieldUpdateOperationsInputObjectSchema = Schema;
