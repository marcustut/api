import { z } from 'zod';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithoutIncomeInputObjectSchema } from './TagUpdateWithoutIncomeInput.schema';
import { TagUncheckedUpdateWithoutIncomeInputObjectSchema } from './TagUncheckedUpdateWithoutIncomeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutIncomeInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TagUpdateWithoutIncomeInputObjectSchema),
      z.lazy(() => TagUncheckedUpdateWithoutIncomeInputObjectSchema),
    ]),
  })
  .strict();

export const TagUpdateWithWhereUniqueWithoutIncomeInputObjectSchema = Schema;
