import { z } from 'zod';
import { TagCreateWithoutExpenseInputObjectSchema } from './TagCreateWithoutExpenseInput.schema';
import { TagUncheckedCreateWithoutExpenseInputObjectSchema } from './TagUncheckedCreateWithoutExpenseInput.schema';
import { TagCreateOrConnectWithoutExpenseInputObjectSchema } from './TagCreateOrConnectWithoutExpenseInput.schema';
import { TagUpsertWithWhereUniqueWithoutExpenseInputObjectSchema } from './TagUpsertWithWhereUniqueWithoutExpenseInput.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateWithWhereUniqueWithoutExpenseInputObjectSchema } from './TagUpdateWithWhereUniqueWithoutExpenseInput.schema';
import { TagUpdateManyWithWhereWithoutExpenseInputObjectSchema } from './TagUpdateManyWithWhereWithoutExpenseInput.schema';
import { TagScalarWhereInputObjectSchema } from './TagScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUpdateManyWithoutExpenseNestedInput> = z.union([
  z.object({
    create: z
      .union([
        z.lazy(() => TagCreateWithoutExpenseInputObjectSchema),
        z.lazy(() => TagCreateWithoutExpenseInputObjectSchema).array(),
        z.lazy(() => TagUncheckedCreateWithoutExpenseInputObjectSchema),
        z.lazy(() => TagUncheckedCreateWithoutExpenseInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    connectOrCreate: z
      .union([
        z.lazy(() => TagCreateOrConnectWithoutExpenseInputObjectSchema),
        z.lazy(() => TagCreateOrConnectWithoutExpenseInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    upsert: z
      .union([
        z.lazy(() => TagUpsertWithWhereUniqueWithoutExpenseInputObjectSchema),
        z.lazy(() => TagUpsertWithWhereUniqueWithoutExpenseInputObjectSchema).array(),
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
        z.lazy(() => TagUpdateWithWhereUniqueWithoutExpenseInputObjectSchema),
        z.lazy(() => TagUpdateWithWhereUniqueWithoutExpenseInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    updateMany: z
      .union([
        z.lazy(() => TagUpdateManyWithWhereWithoutExpenseInputObjectSchema),
        z.lazy(() => TagUpdateManyWithWhereWithoutExpenseInputObjectSchema).array(),
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

export const TagUpdateManyWithoutExpenseNestedInputObjectSchema = Schema;
