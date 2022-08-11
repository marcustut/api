import { z } from 'zod';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithoutExpenseInputObjectSchema } from './TagUpdateWithoutExpenseInput.schema';
import { TagUncheckedUpdateWithoutExpenseInputObjectSchema } from './TagUncheckedUpdateWithoutExpenseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutExpenseInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TagUpdateWithoutExpenseInputObjectSchema),
      z.lazy(() => TagUncheckedUpdateWithoutExpenseInputObjectSchema),
    ]),
  })
  .strict();

export const TagUpdateWithWhereUniqueWithoutExpenseInputObjectSchema = Schema;
