import { z } from 'zod';
import { CategoryCreateNestedOneWithoutIncomeInputObjectSchema } from './CategoryCreateNestedOneWithoutIncomeInput.schema';
import { TagCreateNestedManyWithoutIncomeInputObjectSchema } from './TagCreateNestedManyWithoutIncomeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IncomeCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    amount: z.number(),
    date: z.date(),
    comment: z.string().optional().nullable(),
    Category: z.lazy(() => CategoryCreateNestedOneWithoutIncomeInputObjectSchema),
    Tag: z.lazy(() => TagCreateNestedManyWithoutIncomeInputObjectSchema).optional(),
  })
  .strict();

export const IncomeCreateInputObjectSchema = Schema;
