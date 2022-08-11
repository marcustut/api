import { z } from 'zod';
import { IncomeWhereUniqueInputObjectSchema } from './IncomeWhereUniqueInput.schema';
import { IncomeCreateWithoutCategoryInputObjectSchema } from './IncomeCreateWithoutCategoryInput.schema';
import { IncomeUncheckedCreateWithoutCategoryInputObjectSchema } from './IncomeUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IncomeCreateOrConnectWithoutCategoryInput> = z
  .object({
    where: z.lazy(() => IncomeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => IncomeCreateWithoutCategoryInputObjectSchema),
      z.lazy(() => IncomeUncheckedCreateWithoutCategoryInputObjectSchema),
    ]),
  })
  .strict();

export const IncomeCreateOrConnectWithoutCategoryInputObjectSchema = Schema;
