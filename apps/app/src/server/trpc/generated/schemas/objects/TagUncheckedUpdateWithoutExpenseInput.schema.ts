import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IncomeUncheckedUpdateManyWithoutTagNestedInputObjectSchema } from './IncomeUncheckedUpdateManyWithoutTagNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUncheckedUpdateWithoutExpenseInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    Income: z.lazy(() => IncomeUncheckedUpdateManyWithoutTagNestedInputObjectSchema).optional(),
  })
  .strict();

export const TagUncheckedUpdateWithoutExpenseInputObjectSchema = Schema;
