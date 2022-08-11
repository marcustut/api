import { z } from 'zod';
import { IncomeWhereUniqueInputObjectSchema } from './IncomeWhereUniqueInput.schema';
import { IncomeUpdateWithoutCategoryInputObjectSchema } from './IncomeUpdateWithoutCategoryInput.schema';
import { IncomeUncheckedUpdateWithoutCategoryInputObjectSchema } from './IncomeUncheckedUpdateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IncomeUpdateWithWhereUniqueWithoutCategoryInput> = z
  .object({
    where: z.lazy(() => IncomeWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => IncomeUpdateWithoutCategoryInputObjectSchema),
      z.lazy(() => IncomeUncheckedUpdateWithoutCategoryInputObjectSchema),
    ]),
  })
  .strict();

export const IncomeUpdateWithWhereUniqueWithoutCategoryInputObjectSchema = Schema;
