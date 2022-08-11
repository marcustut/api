import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IncomeUpdateManyWithoutTagNestedInputObjectSchema } from './IncomeUpdateManyWithoutTagNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpdateWithoutExpenseInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    Income: z.lazy(() => IncomeUpdateManyWithoutTagNestedInputObjectSchema).optional(),
  })
  .strict();

export const TagUpdateWithoutExpenseInputObjectSchema = Schema;
