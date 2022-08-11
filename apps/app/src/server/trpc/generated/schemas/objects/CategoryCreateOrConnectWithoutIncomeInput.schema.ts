import { z } from 'zod';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryCreateWithoutIncomeInputObjectSchema } from './CategoryCreateWithoutIncomeInput.schema';
import { CategoryUncheckedCreateWithoutIncomeInputObjectSchema } from './CategoryUncheckedCreateWithoutIncomeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutIncomeInput> = z
  .object({
    where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutIncomeInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutIncomeInputObjectSchema),
    ]),
  })
  .strict();

export const CategoryCreateOrConnectWithoutIncomeInputObjectSchema = Schema;
