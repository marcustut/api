import { z } from 'zod';
import { TagUncheckedCreateNestedManyWithoutIncomeInputObjectSchema } from './TagUncheckedCreateNestedManyWithoutIncomeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IncomeUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    amount: z.number(),
    date: z.date(),
    comment: z.string().optional().nullable(),
    categoryId: z.string(),
    Tag: z.lazy(() => TagUncheckedCreateNestedManyWithoutIncomeInputObjectSchema).optional(),
  })
  .strict();

export const IncomeUncheckedCreateInputObjectSchema = Schema;
