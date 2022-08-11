import { z } from 'zod';
import { IncomeWhereUniqueInputObjectSchema } from './IncomeWhereUniqueInput.schema';
import { IncomeUpdateWithoutCategoryInputObjectSchema } from './IncomeUpdateWithoutCategoryInput.schema';
import { IncomeUncheckedUpdateWithoutCategoryInputObjectSchema } from './IncomeUncheckedUpdateWithoutCategoryInput.schema';
import { IncomeCreateWithoutCategoryInputObjectSchema } from './IncomeCreateWithoutCategoryInput.schema';
import { IncomeUncheckedCreateWithoutCategoryInputObjectSchema } from './IncomeUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IncomeUpsertWithWhereUniqueWithoutCategoryInput> = z
  .object({
    where: z.lazy(() => IncomeWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => IncomeUpdateWithoutCategoryInputObjectSchema),
      z.lazy(() => IncomeUncheckedUpdateWithoutCategoryInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => IncomeCreateWithoutCategoryInputObjectSchema),
      z.lazy(() => IncomeUncheckedCreateWithoutCategoryInputObjectSchema),
    ]),
  })
  .strict();

export const IncomeUpsertWithWhereUniqueWithoutCategoryInputObjectSchema = Schema;
