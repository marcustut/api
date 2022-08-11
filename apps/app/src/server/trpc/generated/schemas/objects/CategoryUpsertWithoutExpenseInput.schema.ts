import { z } from 'zod';
import { CategoryUpdateWithoutExpenseInputObjectSchema } from './CategoryUpdateWithoutExpenseInput.schema';
import { CategoryUncheckedUpdateWithoutExpenseInputObjectSchema } from './CategoryUncheckedUpdateWithoutExpenseInput.schema';
import { CategoryCreateWithoutExpenseInputObjectSchema } from './CategoryCreateWithoutExpenseInput.schema';
import { CategoryUncheckedCreateWithoutExpenseInputObjectSchema } from './CategoryUncheckedCreateWithoutExpenseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpsertWithoutExpenseInput> = z
  .object({
    update: z.union([
      z.lazy(() => CategoryUpdateWithoutExpenseInputObjectSchema),
      z.lazy(() => CategoryUncheckedUpdateWithoutExpenseInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutExpenseInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutExpenseInputObjectSchema),
    ]),
  })
  .strict();

export const CategoryUpsertWithoutExpenseInputObjectSchema = Schema;
