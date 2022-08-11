import { z } from 'zod';
import { ExpenseCreateNestedManyWithoutTagInputObjectSchema } from './ExpenseCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateWithoutIncomeInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    Expense: z.lazy(() => ExpenseCreateNestedManyWithoutTagInputObjectSchema).optional(),
  })
  .strict();

export const TagCreateWithoutIncomeInputObjectSchema = Schema;
