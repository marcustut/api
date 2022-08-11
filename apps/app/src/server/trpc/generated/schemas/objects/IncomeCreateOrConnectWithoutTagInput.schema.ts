import { z } from 'zod';
import { IncomeWhereUniqueInputObjectSchema } from './IncomeWhereUniqueInput.schema';
import { IncomeCreateWithoutTagInputObjectSchema } from './IncomeCreateWithoutTagInput.schema';
import { IncomeUncheckedCreateWithoutTagInputObjectSchema } from './IncomeUncheckedCreateWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IncomeCreateOrConnectWithoutTagInput> = z
  .object({
    where: z.lazy(() => IncomeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => IncomeCreateWithoutTagInputObjectSchema),
      z.lazy(() => IncomeUncheckedCreateWithoutTagInputObjectSchema),
    ]),
  })
  .strict();

export const IncomeCreateOrConnectWithoutTagInputObjectSchema = Schema;
