import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ExpenseUpdateManyWithoutTagNestedInputObjectSchema } from './ExpenseUpdateManyWithoutTagNestedInput.schema';
import { IncomeUpdateManyWithoutTagNestedInputObjectSchema } from './IncomeUpdateManyWithoutTagNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpdateInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    Expense: z.lazy(() => ExpenseUpdateManyWithoutTagNestedInputObjectSchema).optional(),
    Income: z.lazy(() => IncomeUpdateManyWithoutTagNestedInputObjectSchema).optional(),
  })
  .strict();

export const TagUpdateInputObjectSchema = Schema;
