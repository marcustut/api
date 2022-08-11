import { z } from 'zod';
import { CategoryCreateWithoutIncomeInputObjectSchema } from './CategoryCreateWithoutIncomeInput.schema';
import { CategoryUncheckedCreateWithoutIncomeInputObjectSchema } from './CategoryUncheckedCreateWithoutIncomeInput.schema';
import { CategoryCreateOrConnectWithoutIncomeInputObjectSchema } from './CategoryCreateOrConnectWithoutIncomeInput.schema';
import { CategoryUpsertWithoutIncomeInputObjectSchema } from './CategoryUpsertWithoutIncomeInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateWithoutIncomeInputObjectSchema } from './CategoryUpdateWithoutIncomeInput.schema';
import { CategoryUncheckedUpdateWithoutIncomeInputObjectSchema } from './CategoryUncheckedUpdateWithoutIncomeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutIncomeNestedInput> = z.union([
  z.object({
    create: z
      .union([
        z.lazy(() => CategoryCreateWithoutIncomeInputObjectSchema),
        z.lazy(() => CategoryUncheckedCreateWithoutIncomeInputObjectSchema),
      ])
      .optional(),
  }),
  z.object({
    connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutIncomeInputObjectSchema).optional(),
  }),
  z.object({
    upsert: z.lazy(() => CategoryUpsertWithoutIncomeInputObjectSchema).optional(),
  }),
  z.object({
    connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
  }),
  z.object({
    update: z
      .union([
        z.lazy(() => CategoryUpdateWithoutIncomeInputObjectSchema),
        z.lazy(() => CategoryUncheckedUpdateWithoutIncomeInputObjectSchema),
      ])
      .optional(),
  }),
]);

export const CategoryUpdateOneRequiredWithoutIncomeNestedInputObjectSchema = Schema;
