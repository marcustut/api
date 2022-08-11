import { z } from 'zod';
import { UserCreateWithoutAccountsInputObjectSchema } from './UserCreateWithoutAccountsInput.schema';
import { UserUncheckedCreateWithoutAccountsInputObjectSchema } from './UserUncheckedCreateWithoutAccountsInput.schema';
import { UserCreateOrConnectWithoutAccountsInputObjectSchema } from './UserCreateOrConnectWithoutAccountsInput.schema';
import { UserUpsertWithoutAccountsInputObjectSchema } from './UserUpsertWithoutAccountsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutAccountsInputObjectSchema } from './UserUpdateWithoutAccountsInput.schema';
import { UserUncheckedUpdateWithoutAccountsInputObjectSchema } from './UserUncheckedUpdateWithoutAccountsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> = z.union([
  z.object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutAccountsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutAccountsInputObjectSchema),
      ])
      .optional(),
  }),
  z.object({
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputObjectSchema).optional(),
  }),
  z.object({
    upsert: z.lazy(() => UserUpsertWithoutAccountsInputObjectSchema).optional(),
  }),
  z.object({
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  }),
  z.object({
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutAccountsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutAccountsInputObjectSchema),
      ])
      .optional(),
  }),
]);

export const UserUpdateOneRequiredWithoutAccountsNestedInputObjectSchema = Schema;
