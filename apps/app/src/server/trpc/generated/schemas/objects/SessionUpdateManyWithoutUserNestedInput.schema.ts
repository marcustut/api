import { z } from 'zod';
import { SessionCreateWithoutUserInputObjectSchema } from './SessionCreateWithoutUserInput.schema';
import { SessionUncheckedCreateWithoutUserInputObjectSchema } from './SessionUncheckedCreateWithoutUserInput.schema';
import { SessionCreateOrConnectWithoutUserInputObjectSchema } from './SessionCreateOrConnectWithoutUserInput.schema';
import { SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './SessionUpsertWithWhereUniqueWithoutUserInput.schema';
import { SessionCreateManyUserInputEnvelopeObjectSchema } from './SessionCreateManyUserInputEnvelope.schema';
import { SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './SessionUpdateWithWhereUniqueWithoutUserInput.schema';
import { SessionUpdateManyWithWhereWithoutUserInputObjectSchema } from './SessionUpdateManyWithWhereWithoutUserInput.schema';
import { SessionScalarWhereInputObjectSchema } from './SessionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> = z.union([
  z.object({
    create: z
      .union([
        z.lazy(() => SessionCreateWithoutUserInputObjectSchema),
        z.lazy(() => SessionCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    connectOrCreate: z
      .union([
        z.lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => SessionCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    upsert: z
      .union([
        z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeObjectSchema).optional(),
  }),
  z.object({
    set: z
      .union([
        z.lazy(() => SessionWhereUniqueInputObjectSchema),
        z.lazy(() => SessionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    disconnect: z
      .union([
        z.lazy(() => SessionWhereUniqueInputObjectSchema),
        z.lazy(() => SessionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    delete: z
      .union([
        z.lazy(() => SessionWhereUniqueInputObjectSchema),
        z.lazy(() => SessionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    connect: z
      .union([
        z.lazy(() => SessionWhereUniqueInputObjectSchema),
        z.lazy(() => SessionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    update: z
      .union([
        z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    updateMany: z
      .union([
        z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputObjectSchema),
        z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    deleteMany: z
      .union([
        z.lazy(() => SessionScalarWhereInputObjectSchema),
        z.lazy(() => SessionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  }),
]);

export const SessionUpdateManyWithoutUserNestedInputObjectSchema = Schema;
