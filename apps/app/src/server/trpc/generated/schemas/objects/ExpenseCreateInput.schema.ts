import { z } from 'zod';
import { CategoryCreateNestedOneWithoutExpenseInputObjectSchema } from './CategoryCreateNestedOneWithoutExpenseInput.schema';
import { TagCreateNestedManyWithoutExpenseInputObjectSchema } from './TagCreateNestedManyWithoutExpenseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    amount: z.number(),
    date: z.date(),
    comment: z.string().optional().nullable(),
    category: z.lazy(() => CategoryCreateNestedOneWithoutExpenseInputObjectSchema),
    Tag: z.lazy(() => TagCreateNestedManyWithoutExpenseInputObjectSchema).optional(),
  })
  .strict();

export const ExpenseCreateInputObjectSchema = Schema;
