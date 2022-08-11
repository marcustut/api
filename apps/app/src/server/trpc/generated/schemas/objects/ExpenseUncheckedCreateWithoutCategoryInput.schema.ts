import { z } from 'zod';
import { TagUncheckedCreateNestedManyWithoutExpenseInputObjectSchema } from './TagUncheckedCreateNestedManyWithoutExpenseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUncheckedCreateWithoutCategoryInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    amount: z.number(),
    date: z.date(),
    comment: z.string().optional().nullable(),
    Tag: z.lazy(() => TagUncheckedCreateNestedManyWithoutExpenseInputObjectSchema).optional(),
  })
  .strict();

export const ExpenseUncheckedCreateWithoutCategoryInputObjectSchema = Schema;
