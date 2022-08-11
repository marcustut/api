import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ExpenseUncheckedUpdateManyWithoutTagNestedInputObjectSchema } from './ExpenseUncheckedUpdateManyWithoutTagNestedInput.schema';
import { IncomeUncheckedUpdateManyWithoutTagNestedInputObjectSchema } from './IncomeUncheckedUpdateManyWithoutTagNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUncheckedUpdateInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    Expense: z.lazy(() => ExpenseUncheckedUpdateManyWithoutTagNestedInputObjectSchema).optional(),
    Income: z.lazy(() => IncomeUncheckedUpdateManyWithoutTagNestedInputObjectSchema).optional(),
  })
  .strict();

export const TagUncheckedUpdateInputObjectSchema = Schema;
