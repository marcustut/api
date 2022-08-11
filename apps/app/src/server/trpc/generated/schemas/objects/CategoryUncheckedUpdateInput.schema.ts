import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CategoryTypeSchema } from '../enums/CategoryType.schema';
import { EnumCategoryTypeFieldUpdateOperationsInputObjectSchema } from './EnumCategoryTypeFieldUpdateOperationsInput.schema';
import { ExpenseUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './ExpenseUncheckedUpdateManyWithoutCategoryNestedInput.schema';
import { IncomeUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './IncomeUncheckedUpdateManyWithoutCategoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUncheckedUpdateInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    type: z
      .union([
        z.lazy(() => CategoryTypeSchema),
        z.lazy(() => EnumCategoryTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Expense: z
      .lazy(() => ExpenseUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema)
      .optional(),
    Income: z
      .lazy(() => IncomeUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryUncheckedUpdateInputObjectSchema = Schema;
