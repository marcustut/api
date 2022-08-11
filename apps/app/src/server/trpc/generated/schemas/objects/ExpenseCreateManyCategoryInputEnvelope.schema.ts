import { z } from 'zod';
import { ExpenseCreateManyCategoryInputObjectSchema } from './ExpenseCreateManyCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseCreateManyCategoryInputEnvelope> = z
  .object({
    data: z.lazy(() => ExpenseCreateManyCategoryInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ExpenseCreateManyCategoryInputEnvelopeObjectSchema = Schema;
