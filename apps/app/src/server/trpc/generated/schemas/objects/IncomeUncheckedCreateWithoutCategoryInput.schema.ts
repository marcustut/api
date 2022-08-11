import { z } from 'zod';
import { TagUncheckedCreateNestedManyWithoutIncomeInputObjectSchema } from './TagUncheckedCreateNestedManyWithoutIncomeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IncomeUncheckedCreateWithoutCategoryInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    amount: z.number(),
    date: z.date(),
    comment: z.string().optional().nullable(),
    Tag: z.lazy(() => TagUncheckedCreateNestedManyWithoutIncomeInputObjectSchema).optional(),
  })
  .strict();

export const IncomeUncheckedCreateWithoutCategoryInputObjectSchema = Schema;
