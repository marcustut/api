import { z } from 'zod';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithoutIncomeInputObjectSchema } from './TagUpdateWithoutIncomeInput.schema';
import { TagUncheckedUpdateWithoutIncomeInputObjectSchema } from './TagUncheckedUpdateWithoutIncomeInput.schema';
import { TagCreateWithoutIncomeInputObjectSchema } from './TagCreateWithoutIncomeInput.schema';
import { TagUncheckedCreateWithoutIncomeInputObjectSchema } from './TagUncheckedCreateWithoutIncomeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutIncomeInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TagUpdateWithoutIncomeInputObjectSchema),
      z.lazy(() => TagUncheckedUpdateWithoutIncomeInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TagCreateWithoutIncomeInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutIncomeInputObjectSchema),
    ]),
  })
  .strict();

export const TagUpsertWithWhereUniqueWithoutIncomeInputObjectSchema = Schema;
