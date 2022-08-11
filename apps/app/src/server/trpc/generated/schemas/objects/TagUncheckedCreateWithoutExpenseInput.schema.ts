import { z } from 'zod';
import { IncomeUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './IncomeUncheckedCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUncheckedCreateWithoutExpenseInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    Income: z.lazy(() => IncomeUncheckedCreateNestedManyWithoutTagInputObjectSchema).optional(),
  })
  .strict();

export const TagUncheckedCreateWithoutExpenseInputObjectSchema = Schema;
