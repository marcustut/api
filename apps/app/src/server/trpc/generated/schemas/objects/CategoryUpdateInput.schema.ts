import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CategoryTypeSchema } from '../enums/CategoryType.schema';
import { EnumCategoryTypeFieldUpdateOperationsInputObjectSchema } from './EnumCategoryTypeFieldUpdateOperationsInput.schema';
import { ExpenseUpdateManyWithoutCategoryNestedInputObjectSchema } from './ExpenseUpdateManyWithoutCategoryNestedInput.schema';
import { IncomeUpdateManyWithoutCategoryNestedInputObjectSchema } from './IncomeUpdateManyWithoutCategoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpdateInput> = z
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
    Expense: z.lazy(() => ExpenseUpdateManyWithoutCategoryNestedInputObjectSchema).optional(),
    Income: z.lazy(() => IncomeUpdateManyWithoutCategoryNestedInputObjectSchema).optional(),
  })
  .strict();

export const CategoryUpdateInputObjectSchema = Schema;
