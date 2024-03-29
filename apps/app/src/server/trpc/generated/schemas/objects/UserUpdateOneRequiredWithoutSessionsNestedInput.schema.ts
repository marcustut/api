import { z } from 'zod';
import { UserCreateWithoutSessionsInputObjectSchema } from './UserCreateWithoutSessionsInput.schema';
import { UserUncheckedCreateWithoutSessionsInputObjectSchema } from './UserUncheckedCreateWithoutSessionsInput.schema';
import { UserCreateOrConnectWithoutSessionsInputObjectSchema } from './UserCreateOrConnectWithoutSessionsInput.schema';
import { UserUpsertWithoutSessionsInputObjectSchema } from './UserUpsertWithoutSessionsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutSessionsInputObjectSchema } from './UserUpdateWithoutSessionsInput.schema';
import { UserUncheckedUpdateWithoutSessionsInputObjectSchema } from './UserUncheckedUpdateWithoutSessionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> = z.union([
  z.object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutSessionsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutSessionsInputObjectSchema),
      ])
      .optional(),
  }),
  z.object({
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputObjectSchema).optional(),
  }),
  z.object({
    upsert: z.lazy(() => UserUpsertWithoutSessionsInputObjectSchema).optional(),
  }),
  z.object({
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  }),
  z.object({
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutSessionsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutSessionsInputObjectSchema),
      ])
      .optional(),
  }),
]);

export const UserUpdateOneRequiredWithoutSessionsNestedInputObjectSchema = Schema;
