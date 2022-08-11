import { z } from 'zod';
import { IncomeCreateNestedManyWithoutTagInputObjectSchema } from './IncomeCreateNestedManyWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateWithoutExpenseInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    Income: z.lazy(() => IncomeCreateNestedManyWithoutTagInputObjectSchema).optional(),
  })
  .strict();

export const TagCreateWithoutExpenseInputObjectSchema = Schema;
