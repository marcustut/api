import { z } from 'zod';
import { CategoryUpdateWithoutIncomeInputObjectSchema } from './CategoryUpdateWithoutIncomeInput.schema';
import { CategoryUncheckedUpdateWithoutIncomeInputObjectSchema } from './CategoryUncheckedUpdateWithoutIncomeInput.schema';
import { CategoryCreateWithoutIncomeInputObjectSchema } from './CategoryCreateWithoutIncomeInput.schema';
import { CategoryUncheckedCreateWithoutIncomeInputObjectSchema } from './CategoryUncheckedCreateWithoutIncomeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpsertWithoutIncomeInput> = z
  .object({
    update: z.union([
      z.lazy(() => CategoryUpdateWithoutIncomeInputObjectSchema),
      z.lazy(() => CategoryUncheckedUpdateWithoutIncomeInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutIncomeInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutIncomeInputObjectSchema),
    ]),
  })
  .strict();

export const CategoryUpsertWithoutIncomeInputObjectSchema = Schema;
