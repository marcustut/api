import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ExpenseUncheckedUpdateManyWithoutTagNestedInputObjectSchema } from './ExpenseUncheckedUpdateManyWithoutTagNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUncheckedUpdateWithoutIncomeInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    Expense: z.lazy(() => ExpenseUncheckedUpdateManyWithoutTagNestedInputObjectSchema).optional(),
  })
  .strict();

export const TagUncheckedUpdateWithoutIncomeInputObjectSchema = Schema;
