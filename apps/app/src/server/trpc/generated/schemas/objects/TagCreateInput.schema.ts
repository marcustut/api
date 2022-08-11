import { z } from 'zod';
import { ExpenseCreateNestedManyWithoutTagInputObjectSchema } from './ExpenseCreateNestedManyWithoutTagInput.schema';
import { IncomeCreateNestedManyWithoutTagInputObjectSchema } from './IncomeCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    Expense: z.lazy(() => ExpenseCreateNestedManyWithoutTagInputObjectSchema).optional(),
    Income: z.lazy(() => IncomeCreateNestedManyWithoutTagInputObjectSchema).optional(),
  })
  .strict();

export const TagCreateInputObjectSchema = Schema;
