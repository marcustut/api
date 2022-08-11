import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { CategoryUpdateOneRequiredWithoutExpenseNestedInputObjectSchema } from './CategoryUpdateOneRequiredWithoutExpenseNestedInput.schema';
import { TagUpdateManyWithoutExpenseNestedInputObjectSchema } from './TagUpdateManyWithoutExpenseNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUpdateInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    amount: z
      .union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    date: z
      .union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    comment: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    category: z
      .lazy(() => CategoryUpdateOneRequiredWithoutExpenseNestedInputObjectSchema)
      .optional(),
    Tag: z.lazy(() => TagUpdateManyWithoutExpenseNestedInputObjectSchema).optional(),
  })
  .strict();

export const ExpenseUpdateInputObjectSchema = Schema;
