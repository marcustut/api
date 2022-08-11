import { z } from 'zod';
import { CategoryCreateWithoutExpenseInputObjectSchema } from './CategoryCreateWithoutExpenseInput.schema';
import { CategoryUncheckedCreateWithoutExpenseInputObjectSchema } from './CategoryUncheckedCreateWithoutExpenseInput.schema';
import { CategoryCreateOrConnectWithoutExpenseInputObjectSchema } from './CategoryCreateOrConnectWithoutExpenseInput.schema';
import { CategoryUpsertWithoutExpenseInputObjectSchema } from './CategoryUpsertWithoutExpenseInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateWithoutExpenseInputObjectSchema } from './CategoryUpdateWithoutExpenseInput.schema';
import { CategoryUncheckedUpdateWithoutExpenseInputObjectSchema } from './CategoryUncheckedUpdateWithoutExpenseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutExpenseNestedInput> = z.union([
  z.object({
    create: z
      .union([
        z.lazy(() => CategoryCreateWithoutExpenseInputObjectSchema),
        z.lazy(() => CategoryUncheckedCreateWithoutExpenseInputObjectSchema),
      ])
      .optional(),
  }),
  z.object({
    connectOrCreate: z
      .lazy(() => CategoryCreateOrConnectWithoutExpenseInputObjectSchema)
      .optional(),
  }),
  z.object({
    upsert: z.lazy(() => CategoryUpsertWithoutExpenseInputObjectSchema).optional(),
  }),
  z.object({
    connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
  }),
  z.object({
    update: z
      .union([
        z.lazy(() => CategoryUpdateWithoutExpenseInputObjectSchema),
        z.lazy(() => CategoryUncheckedUpdateWithoutExpenseInputObjectSchema),
      ])
      .optional(),
  }),
]);

export const CategoryUpdateOneRequiredWithoutExpenseNestedInputObjectSchema = Schema;
