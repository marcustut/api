import { z } from 'zod';
import { ExpenseScalarWhereInputObjectSchema } from './ExpenseScalarWhereInput.schema';
import { ExpenseUpdateManyMutationInputObjectSchema } from './ExpenseUpdateManyMutationInput.schema';
import { ExpenseUncheckedUpdateManyWithoutExpenseInputObjectSchema } from './ExpenseUncheckedUpdateManyWithoutExpenseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUpdateManyWithWhereWithoutTagInput> = z
  .object({
    where: z.lazy(() => ExpenseScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ExpenseUpdateManyMutationInputObjectSchema),
      z.lazy(() => ExpenseUncheckedUpdateManyWithoutExpenseInputObjectSchema),
    ]),
  })
  .strict();

export const ExpenseUpdateManyWithWhereWithoutTagInputObjectSchema = Schema;
