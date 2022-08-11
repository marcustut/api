import { z } from 'zod';
import { ExpenseUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './ExpenseUncheckedCreateNestedManyWithoutTagInput.schema';
import { IncomeUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './IncomeUncheckedCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    Expense: z.lazy(() => ExpenseUncheckedCreateNestedManyWithoutTagInputObjectSchema).optional(),
    Income: z.lazy(() => IncomeUncheckedCreateNestedManyWithoutTagInputObjectSchema).optional(),
  })
  .strict();

export const TagUncheckedCreateInputObjectSchema = Schema;
