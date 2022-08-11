import { z } from 'zod';
import { CategoryCreateWithoutIncomeInputObjectSchema } from './CategoryCreateWithoutIncomeInput.schema';
import { CategoryUncheckedCreateWithoutIncomeInputObjectSchema } from './CategoryUncheckedCreateWithoutIncomeInput.schema';
import { CategoryCreateOrConnectWithoutIncomeInputObjectSchema } from './CategoryCreateOrConnectWithoutIncomeInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutIncomeInput> = z.union([
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
    connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
  }),
]);

export const CategoryCreateNestedOneWithoutIncomeInputObjectSchema = Schema;
