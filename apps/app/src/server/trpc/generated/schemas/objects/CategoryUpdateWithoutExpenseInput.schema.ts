import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CategoryTypeSchema } from '../enums/CategoryType.schema';
import { EnumCategoryTypeFieldUpdateOperationsInputObjectSchema } from './EnumCategoryTypeFieldUpdateOperationsInput.schema';
import { IncomeUpdateManyWithoutCategoryNestedInputObjectSchema } from './IncomeUpdateManyWithoutCategoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpdateWithoutExpenseInput> = z
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
    Income: z.lazy(() => IncomeUpdateManyWithoutCategoryNestedInputObjectSchema).optional(),
  })
  .strict();

export const CategoryUpdateWithoutExpenseInputObjectSchema = Schema;
