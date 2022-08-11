import { z } from 'zod';
import { TagCreateNestedManyWithoutExpenseInputObjectSchema } from './TagCreateNestedManyWithoutExpenseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseCreateWithoutCategoryInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    amount: z.number(),
    date: z.date(),
    comment: z.string().optional().nullable(),
    Tag: z.lazy(() => TagCreateNestedManyWithoutExpenseInputObjectSchema).optional(),
  })
  .strict();

export const ExpenseCreateWithoutCategoryInputObjectSchema = Schema;
