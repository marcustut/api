import { z } from 'zod';
import { IncomeWhereUniqueInputObjectSchema } from './IncomeWhereUniqueInput.schema';
import { IncomeUpdateWithoutTagInputObjectSchema } from './IncomeUpdateWithoutTagInput.schema';
import { IncomeUncheckedUpdateWithoutTagInputObjectSchema } from './IncomeUncheckedUpdateWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IncomeUpdateWithWhereUniqueWithoutTagInput> = z
  .object({
    where: z.lazy(() => IncomeWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => IncomeUpdateWithoutTagInputObjectSchema),
      z.lazy(() => IncomeUncheckedUpdateWithoutTagInputObjectSchema),
    ]),
  })
  .strict();

export const IncomeUpdateWithWhereUniqueWithoutTagInputObjectSchema = Schema;
