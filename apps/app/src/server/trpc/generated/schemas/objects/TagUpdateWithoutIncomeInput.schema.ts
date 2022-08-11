import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ExpenseUpdateManyWithoutTagNestedInputObjectSchema } from './ExpenseUpdateManyWithoutTagNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpdateWithoutIncomeInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    Expense: z.lazy(() => ExpenseUpdateManyWithoutTagNestedInputObjectSchema).optional(),
  })
  .strict();

export const TagUpdateWithoutIncomeInputObjectSchema = Schema;
