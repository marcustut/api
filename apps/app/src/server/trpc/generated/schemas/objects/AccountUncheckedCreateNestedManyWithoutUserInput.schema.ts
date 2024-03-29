import { z } from 'zod';
import { AccountCreateWithoutUserInputObjectSchema } from './AccountCreateWithoutUserInput.schema';
import { AccountUncheckedCreateWithoutUserInputObjectSchema } from './AccountUncheckedCreateWithoutUserInput.schema';
import { AccountCreateOrConnectWithoutUserInputObjectSchema } from './AccountCreateOrConnectWithoutUserInput.schema';
import { AccountCreateManyUserInputEnvelopeObjectSchema } from './AccountCreateManyUserInputEnvelope.schema';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> = z.union([
  z.object({
    create: z
      .union([
        z.lazy(() => AccountCreateWithoutUserInputObjectSchema),
        z.lazy(() => AccountCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    connectOrCreate: z
      .union([
        z.lazy(() => AccountCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => AccountCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
  }),
  z.object({
    createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeObjectSchema).optional(),
  }),
  z.object({
    connect: z
      .union([
        z.lazy(() => AccountWhereUniqueInputObjectSchema),
        z.lazy(() => AccountWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
]);

export const AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema = Schema;
