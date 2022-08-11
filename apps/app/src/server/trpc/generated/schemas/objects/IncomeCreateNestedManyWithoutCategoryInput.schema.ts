import { z } from 'zod';
import { IncomeCreateWithoutCategoryInputObjectSchema } from './IncomeCreateWithoutCategoryInput.schema';
import { IncomeUncheckedCreateWithoutCategoryInputObjectSchema } from './IncomeUncheckedCreateWithoutCategoryInput.schema';
import { IncomeCreateOrConnectWithoutCategoryInputObjectSchema } from './IncomeCreateOrConnectWithoutCategoryInput.schema';
import { IncomeCreateManyCategoryInputEnvelopeObjectSchema } from './IncomeCreateManyCategoryInputEnvelope.schema';
import { IncomeWhereUniqueInputObjectSchema } from './IncomeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IncomeCreateNestedManyWithoutCategoryInput> = z.union([
  z.object({
    create: z
      .union([
        z.lazy(() => IncomeCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => IncomeCreateWithoutCategoryInputObjectSchema).array(),
        z.lazy(() => IncomeUncheckedCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => IncomeUncheckedCreateWithoutCategoryInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    connectOrCreate: z
      .union([
        z.lazy(() => IncomeCreateOrConnectWithoutCategoryInputObjectSchema),
        z.lazy(() => IncomeCreateOrConnectWithoutCategoryInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    createMany: z.lazy(() => IncomeCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  }),
  z.object({
    connect: z
      .union([
        z.lazy(() => IncomeWhereUniqueInputObjectSchema),
        z.lazy(() => IncomeWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
]);

export const IncomeCreateNestedManyWithoutCategoryInputObjectSchema = Schema;
