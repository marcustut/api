import { z } from 'zod';
import { IncomeCreateManyCategoryInputObjectSchema } from './IncomeCreateManyCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IncomeCreateManyCategoryInputEnvelope> = z
  .object({
    data: z.lazy(() => IncomeCreateManyCategoryInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const IncomeCreateManyCategoryInputEnvelopeObjectSchema = Schema;
