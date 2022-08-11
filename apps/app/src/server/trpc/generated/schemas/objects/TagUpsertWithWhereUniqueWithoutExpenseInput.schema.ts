import { z } from 'zod';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithoutExpenseInputObjectSchema } from './TagUpdateWithoutExpenseInput.schema';
import { TagUncheckedUpdateWithoutExpenseInputObjectSchema } from './TagUncheckedUpdateWithoutExpenseInput.schema';
import { TagCreateWithoutExpenseInputObjectSchema } from './TagCreateWithoutExpenseInput.schema';
import { TagUncheckedCreateWithoutExpenseInputObjectSchema } from './TagUncheckedCreateWithoutExpenseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutExpenseInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TagUpdateWithoutExpenseInputObjectSchema),
      z.lazy(() => TagUncheckedUpdateWithoutExpenseInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TagCreateWithoutExpenseInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutExpenseInputObjectSchema),
    ]),
  })
  .strict();

export const TagUpsertWithWhereUniqueWithoutExpenseInputObjectSchema = Schema;
