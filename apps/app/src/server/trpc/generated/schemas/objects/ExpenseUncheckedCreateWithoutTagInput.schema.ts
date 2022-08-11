import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUncheckedCreateWithoutTagInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    amount: z.number(),
    date: z.date(),
    comment: z.string().optional().nullable(),
    categoryId: z.string(),
  })
  .strict();

export const ExpenseUncheckedCreateWithoutTagInputObjectSchema = Schema;
