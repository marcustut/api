import { z } from 'zod';
import { TagCreateNestedManyWithoutIncomeInputObjectSchema } from './TagCreateNestedManyWithoutIncomeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IncomeCreateWithoutCategoryInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    amount: z.number(),
    date: z.date(),
    comment: z.string().optional().nullable(),
    Tag: z.lazy(() => TagCreateNestedManyWithoutIncomeInputObjectSchema).optional(),
  })
  .strict();

export const IncomeCreateWithoutCategoryInputObjectSchema = Schema;
