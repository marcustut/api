import { z } from 'zod';
import { TagCreateWithoutIncomeInputObjectSchema } from './TagCreateWithoutIncomeInput.schema';
import { TagUncheckedCreateWithoutIncomeInputObjectSchema } from './TagUncheckedCreateWithoutIncomeInput.schema';
import { TagCreateOrConnectWithoutIncomeInputObjectSchema } from './TagCreateOrConnectWithoutIncomeInput.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateNestedManyWithoutIncomeInput> = z.union([
  z.object({
    create: z
      .union([
        z.lazy(() => TagCreateWithoutIncomeInputObjectSchema),
        z.lazy(() => TagCreateWithoutIncomeInputObjectSchema).array(),
        z.lazy(() => TagUncheckedCreateWithoutIncomeInputObjectSchema),
        z.lazy(() => TagUncheckedCreateWithoutIncomeInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    connectOrCreate: z
      .union([
        z.lazy(() => TagCreateOrConnectWithoutIncomeInputObjectSchema),
        z.lazy(() => TagCreateOrConnectWithoutIncomeInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    connect: z
      .union([
        z.lazy(() => TagWhereUniqueInputObjectSchema),
        z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
]);

export const TagCreateNestedManyWithoutIncomeInputObjectSchema = Schema;
