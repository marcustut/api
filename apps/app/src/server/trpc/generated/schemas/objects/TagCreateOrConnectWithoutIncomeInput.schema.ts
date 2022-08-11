import { z } from 'zod';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagCreateWithoutIncomeInputObjectSchema } from './TagCreateWithoutIncomeInput.schema';
import { TagUncheckedCreateWithoutIncomeInputObjectSchema } from './TagUncheckedCreateWithoutIncomeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateOrConnectWithoutIncomeInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagCreateWithoutIncomeInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutIncomeInputObjectSchema),
    ]),
  })
  .strict();

export const TagCreateOrConnectWithoutIncomeInputObjectSchema = Schema;
