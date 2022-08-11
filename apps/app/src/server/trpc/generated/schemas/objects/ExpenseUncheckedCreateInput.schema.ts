import { z } from 'zod';
import { TagUncheckedCreateNestedManyWithoutExpenseInputObjectSchema } from './TagUncheckedCreateNestedManyWithoutExpenseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    amount: z.number(),
    date: z.date(),
    comment: z.string().optional().nullable(),
    categoryId: z.string(),
    Tag: z.lazy(() => TagUncheckedCreateNestedManyWithoutExpenseInputObjectSchema).optional(),
  })
  .strict();

export const ExpenseUncheckedCreateInputObjectSchema = Schema;
