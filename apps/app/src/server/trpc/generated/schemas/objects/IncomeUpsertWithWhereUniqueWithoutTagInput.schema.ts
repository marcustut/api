import { z } from 'zod';
import { IncomeWhereUniqueInputObjectSchema } from './IncomeWhereUniqueInput.schema';
import { IncomeUpdateWithoutTagInputObjectSchema } from './IncomeUpdateWithoutTagInput.schema';
import { IncomeUncheckedUpdateWithoutTagInputObjectSchema } from './IncomeUncheckedUpdateWithoutTagInput.schema';
import { IncomeCreateWithoutTagInputObjectSchema } from './IncomeCreateWithoutTagInput.schema';
import { IncomeUncheckedCreateWithoutTagInputObjectSchema } from './IncomeUncheckedCreateWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IncomeUpsertWithWhereUniqueWithoutTagInput> = z
  .object({
    where: z.lazy(() => IncomeWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => IncomeUpdateWithoutTagInputObjectSchema),
      z.lazy(() => IncomeUncheckedUpdateWithoutTagInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => IncomeCreateWithoutTagInputObjectSchema),
      z.lazy(() => IncomeUncheckedCreateWithoutTagInputObjectSchema),
    ]),
  })
  .strict();

export const IncomeUpsertWithWhereUniqueWithoutTagInputObjectSchema = Schema;
