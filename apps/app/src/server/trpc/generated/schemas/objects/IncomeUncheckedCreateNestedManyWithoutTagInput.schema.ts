import { z } from 'zod';
import { IncomeCreateWithoutTagInputObjectSchema } from './IncomeCreateWithoutTagInput.schema';
import { IncomeUncheckedCreateWithoutTagInputObjectSchema } from './IncomeUncheckedCreateWithoutTagInput.schema';
import { IncomeCreateOrConnectWithoutTagInputObjectSchema } from './IncomeCreateOrConnectWithoutTagInput.schema';
import { IncomeWhereUniqueInputObjectSchema } from './IncomeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IncomeUncheckedCreateNestedManyWithoutTagInput> = z.union([
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
    connect: z
      .union([
        z.lazy(() => IncomeWhereUniqueInputObjectSchema),
        z.lazy(() => IncomeWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
]);

export const IncomeUncheckedCreateNestedManyWithoutTagInputObjectSchema = Schema;
