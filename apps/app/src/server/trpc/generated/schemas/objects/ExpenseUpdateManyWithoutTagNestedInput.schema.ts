import { z } from 'zod';
import { ExpenseCreateWithoutTagInputObjectSchema } from './ExpenseCreateWithoutTagInput.schema';
import { ExpenseUncheckedCreateWithoutTagInputObjectSchema } from './ExpenseUncheckedCreateWithoutTagInput.schema';
import { ExpenseCreateOrConnectWithoutTagInputObjectSchema } from './ExpenseCreateOrConnectWithoutTagInput.schema';
import { ExpenseUpsertWithWhereUniqueWithoutTagInputObjectSchema } from './ExpenseUpsertWithWhereUniqueWithoutTagInput.schema';
import { ExpenseWhereUniqueInputObjectSchema } from './ExpenseWhereUniqueInput.schema';
import { ExpenseUpdateWithWhereUniqueWithoutTagInputObjectSchema } from './ExpenseUpdateWithWhereUniqueWithoutTagInput.schema';
import { ExpenseUpdateManyWithWhereWithoutTagInputObjectSchema } from './ExpenseUpdateManyWithWhereWithoutTagInput.schema';
import { ExpenseScalarWhereInputObjectSchema } from './ExpenseScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExpenseUpdateManyWithoutTagNestedInput> = z.union([
  z.object({
    create: z
      .union([
        z.lazy(() => ExpenseCreateWithoutTagInputObjectSchema),
        z.lazy(() => ExpenseCreateWithoutTagInputObjectSchema).array(),
        z.lazy(() => ExpenseUncheckedCreateWithoutTagInputObjectSchema),
        z.lazy(() => ExpenseUncheckedCreateWithoutTagInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    connectOrCreate: z
      .union([
        z.lazy(() => ExpenseCreateOrConnectWithoutTagInputObjectSchema),
        z.lazy(() => ExpenseCreateOrConnectWithoutTagInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    upsert: z
      .union([
        z.lazy(() => ExpenseUpsertWithWhereUniqueWithoutTagInputObjectSchema),
        z.lazy(() => ExpenseUpsertWithWhereUniqueWithoutTagInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    set: z
      .union([
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    disconnect: z
      .union([
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    delete: z
      .union([
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    connect: z
      .union([
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema),
        z.lazy(() => ExpenseWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    update: z
      .union([
        z.lazy(() => ExpenseUpdateWithWhereUniqueWithoutTagInputObjectSchema),
        z.lazy(() => ExpenseUpdateWithWhereUniqueWithoutTagInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    updateMany: z
      .union([
        z.lazy(() => ExpenseUpdateManyWithWhereWithoutTagInputObjectSchema),
        z.lazy(() => ExpenseUpdateManyWithWhereWithoutTagInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    deleteMany: z
      .union([
        z.lazy(() => ExpenseScalarWhereInputObjectSchema),
        z.lazy(() => ExpenseScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  }),
]);

export const ExpenseUpdateManyWithoutTagNestedInputObjectSchema = Schema;
