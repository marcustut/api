import { z } from 'zod';
import { TagCreateWithoutIncomeInputObjectSchema } from './TagCreateWithoutIncomeInput.schema';
import { TagUncheckedCreateWithoutIncomeInputObjectSchema } from './TagUncheckedCreateWithoutIncomeInput.schema';
import { TagCreateOrConnectWithoutIncomeInputObjectSchema } from './TagCreateOrConnectWithoutIncomeInput.schema';
import { TagUpsertWithWhereUniqueWithoutIncomeInputObjectSchema } from './TagUpsertWithWhereUniqueWithoutIncomeInput.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithWhereUniqueWithoutIncomeInputObjectSchema } from './TagUpdateWithWhereUniqueWithoutIncomeInput.schema';
import { TagUpdateManyWithWhereWithoutIncomeInputObjectSchema } from './TagUpdateManyWithWhereWithoutIncomeInput.schema';
import { TagScalarWhereInputObjectSchema } from './TagScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUncheckedUpdateManyWithoutIncomeNestedInput> = z.union([
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
    upsert: z
      .union([
        z.lazy(() => TagUpsertWithWhereUniqueWithoutIncomeInputObjectSchema),
        z.lazy(() => TagUpsertWithWhereUniqueWithoutIncomeInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    set: z
      .union([
        z.lazy(() => TagWhereUniqueInputObjectSchema),
        z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    disconnect: z
      .union([
        z.lazy(() => TagWhereUniqueInputObjectSchema),
        z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    delete: z
      .union([
        z.lazy(() => TagWhereUniqueInputObjectSchema),
        z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
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
  z.object({
    update: z
      .union([
        z.lazy(() => TagUpdateWithWhereUniqueWithoutIncomeInputObjectSchema),
        z.lazy(() => TagUpdateWithWhereUniqueWithoutIncomeInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    updateMany: z
      .union([
        z.lazy(() => TagUpdateManyWithWhereWithoutIncomeInputObjectSchema),
        z.lazy(() => TagUpdateManyWithWhereWithoutIncomeInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    deleteMany: z
      .union([
        z.lazy(() => TagScalarWhereInputObjectSchema),
        z.lazy(() => TagScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  }),
]);

export const TagUncheckedUpdateManyWithoutIncomeNestedInputObjectSchema = Schema;
