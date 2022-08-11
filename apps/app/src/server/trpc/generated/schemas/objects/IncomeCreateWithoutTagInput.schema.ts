import { z } from 'zod';
import { CategoryCreateNestedOneWithoutIncomeInputObjectSchema } from './CategoryCreateNestedOneWithoutIncomeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IncomeCreateWithoutTagInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    amount: z.number(),
    date: z.date(),
    comment: z.string().optional().nullable(),
    category: z.lazy(() => CategoryCreateNestedOneWithoutIncomeInputObjectSchema),
  })
  .strict();

export const IncomeCreateWithoutTagInputObjectSchema = Schema;
