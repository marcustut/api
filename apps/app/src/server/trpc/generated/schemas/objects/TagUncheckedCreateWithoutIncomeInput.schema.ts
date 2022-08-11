import { z } from 'zod';
import { ExpenseUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './ExpenseUncheckedCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUncheckedCreateWithoutIncomeInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    Expense: z.lazy(() => ExpenseUncheckedCreateNestedManyWithoutTagInputObjectSchema).optional(),
  })
  .strict();

export const TagUncheckedCreateWithoutIncomeInputObjectSchema = Schema;
