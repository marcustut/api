import { z } from 'zod';
import { CategoryCreateNestedOneWithoutExpenseInputObjectSchema } from './CategoryCreateNestedOneWithoutExpenseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseCreateWithoutTagInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    amount: z.number(),
    date: z.date(),
    comment: z.string().optional().nullable(),
    category: z.lazy(() => CategoryCreateNestedOneWithoutExpenseInputObjectSchema),
  })
  .strict();

export const ExpenseCreateWithoutTagInputObjectSchema = Schema;
