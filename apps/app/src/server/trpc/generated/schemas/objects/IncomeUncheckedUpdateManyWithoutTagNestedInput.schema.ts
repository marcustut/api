import { z } from 'zod';
import { IncomeCreateWithoutTagInputObjectSchema } from './IncomeCreateWithoutTagInput.schema';
import { IncomeUncheckedCreateWithoutTagInputObjectSchema } from './IncomeUncheckedCreateWithoutTagInput.schema';
import { IncomeCreateOrConnectWithoutTagInputObjectSchema } from './IncomeCreateOrConnectWithoutTagInput.schema';
import { IncomeUpsertWithWhereUniqueWithoutTagInputObjectSchema } from './IncomeUpsertWithWhereUniqueWithoutTagInput.schema';
import { IncomeWhereUniqueInputObjectSchema } from './IncomeWhereUniqueInput.schema';
import { IncomeUpdateWithWhereUniqueWithoutTagInputObjectSchema } from './IncomeUpdateWithWhereUniqueWithoutTagInput.schema';
import { IncomeUpdateManyWithWhereWithoutTagInputObjectSchema } from './IncomeUpdateManyWithWhereWithoutTagInput.schema';
import { IncomeScalarWhereInputObjectSchema } from './IncomeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IncomeUncheckedUpdateManyWithoutTagNestedInput> = z.union([
  z.object({
    create: z
      .union([
        z.lazy(() => IncomeCreateWithoutTagInputObjectSchema),
        z.lazy(() => IncomeCreateWithoutTagInputObjectSchema).array(),
        z.lazy(() => IncomeUncheckedCreateWithoutTagInputObjectSchema),
        z.lazy(() => IncomeUncheckedCreateWithoutTagInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    connectOrCreate: z
      .union([
        z.lazy(() => IncomeCreateOrConnectWithoutTagInputObjectSchema),
        z.lazy(() => IncomeCreateOrConnectWithoutTagInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    upsert: z
      .union([
        z.lazy(() => IncomeUpsertWithWhereUniqueWithoutTagInputObjectSchema),
        z.lazy(() => IncomeUpsertWithWhereUniqueWithoutTagInputObjectSchema).array(),
      ])
      .optional(),
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
        z.lazy(() => IncomeUpdateWithWhereUniqueWithoutTagInputObjectSchema),
        z.lazy(() => IncomeUpdateWithWhereUniqueWithoutTagInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    updateMany: z
      .union([
        z.lazy(() => IncomeUpdateManyWithWhereWithoutTagInputObjectSchema),
        z.lazy(() => IncomeUpdateManyWithWhereWithoutTagInputObjectSchema).array(),
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

export const IncomeUncheckedUpdateManyWithoutTagNestedInputObjectSchema = Schema;
