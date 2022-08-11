import { z } from 'zod';
import { ExpenseWhereUniqueInputObjectSchema } from './ExpenseWhereUniqueInput.schema';
import { ExpenseUpdateWithoutTagInputObjectSchema } from './ExpenseUpdateWithoutTagInput.schema';
import { ExpenseUncheckedUpdateWithoutTagInputObjectSchema } from './ExpenseUncheckedUpdateWithoutTagInput.schema';
import { ExpenseCreateWithoutTagInputObjectSchema } from './ExpenseCreateWithoutTagInput.schema';
import { ExpenseUncheckedCreateWithoutTagInputObjectSchema } from './ExpenseUncheckedCreateWithoutTagInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUpsertWithWhereUniqueWithoutTagInput> = z
  .object({
    where: z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ExpenseUpdateWithoutTagInputObjectSchema),
      z.lazy(() => ExpenseUncheckedUpdateWithoutTagInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ExpenseCreateWithoutTagInputObjectSchema),
      z.lazy(() => ExpenseUncheckedCreateWithoutTagInputObjectSchema),
    ]),
  })
  .strict();

export const ExpenseUpsertWithWhereUniqueWithoutTagInputObjectSchema = Schema;
