import { z } from 'zod';
import { ExpenseWhereUniqueInputObjectSchema } from './ExpenseWhereUniqueInput.schema';
import { ExpenseUpdateWithoutCategoryInputObjectSchema } from './ExpenseUpdateWithoutCategoryInput.schema';
import { ExpenseUncheckedUpdateWithoutCategoryInputObjectSchema } from './ExpenseUncheckedUpdateWithoutCategoryInput.schema';
import { ExpenseCreateWithoutCategoryInputObjectSchema } from './ExpenseCreateWithoutCategoryInput.schema';
import { ExpenseUncheckedCreateWithoutCategoryInputObjectSchema } from './ExpenseUncheckedCreateWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUpsertWithWhereUniqueWithoutCategoryInput> = z
  .object({
    where: z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ExpenseUpdateWithoutCategoryInputObjectSchema),
      z.lazy(() => ExpenseUncheckedUpdateWithoutCategoryInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ExpenseCreateWithoutCategoryInputObjectSchema),
      z.lazy(() => ExpenseUncheckedCreateWithoutCategoryInputObjectSchema),
    ]),
  })
  .strict();

export const ExpenseUpsertWithWhereUniqueWithoutCategoryInputObjectSchema = Schema;
