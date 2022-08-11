import { z } from 'zod';
import { IncomeCreateWithoutCategoryInputObjectSchema } from './IncomeCreateWithoutCategoryInput.schema';
import { IncomeUncheckedCreateWithoutCategoryInputObjectSchema } from './IncomeUncheckedCreateWithoutCategoryInput.schema';
import { IncomeCreateOrConnectWithoutCategoryInputObjectSchema } from './IncomeCreateOrConnectWithoutCategoryInput.schema';
import { IncomeUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './IncomeUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { IncomeCreateManyCategoryInputEnvelopeObjectSchema } from './IncomeCreateManyCategoryInputEnvelope.schema';
import { IncomeWhereUniqueInputObjectSchema } from './IncomeWhereUniqueInput.schema';
import { IncomeUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './IncomeUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { IncomeUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './IncomeUpdateManyWithWhereWithoutCategoryInput.schema';
import { IncomeScalarWhereInputObjectSchema } from './IncomeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IncomeUncheckedUpdateManyWithoutCategoryNestedInput> = z.union([
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
    upsert: z
      .union([
        z.lazy(() => IncomeUpsertWithWhereUniqueWithoutCategoryInputObjectSchema),
        z.lazy(() => IncomeUpsertWithWhereUniqueWithoutCategoryInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    createMany: z.lazy(() => IncomeCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  }),
  z.object({
    set: z
      .union([
        z.lazy(() => IncomeWhereUniqueInputObjectSchema),
        z.lazy(() => IncomeWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    disconnect: z
      .union([
        z.lazy(() => IncomeWhereUniqueInputObjectSchema),
        z.lazy(() => IncomeWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    delete: z
      .union([
        z.lazy(() => IncomeWhereUniqueInputObjectSchema),
        z.lazy(() => IncomeWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    connect: z
      .union([
        z.lazy(() => IncomeWhereUniqueInputObjectSchema),
        z.lazy(() => IncomeWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    update: z
      .union([
        z.lazy(() => IncomeUpdateWithWhereUniqueWithoutCategoryInputObjectSchema),
        z.lazy(() => IncomeUpdateWithWhereUniqueWithoutCategoryInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    updateMany: z
      .union([
        z.lazy(() => IncomeUpdateManyWithWhereWithoutCategoryInputObjectSchema),
        z.lazy(() => IncomeUpdateManyWithWhereWithoutCategoryInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    deleteMany: z
      .union([
        z.lazy(() => IncomeScalarWhereInputObjectSchema),
        z.lazy(() => IncomeScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  }),
]);

export const IncomeUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema = Schema;
