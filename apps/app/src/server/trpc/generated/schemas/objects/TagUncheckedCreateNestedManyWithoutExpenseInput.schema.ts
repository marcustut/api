import { z } from 'zod';
import { TagCreateWithoutExpenseInputObjectSchema } from './TagCreateWithoutExpenseInput.schema';
import { TagUncheckedCreateWithoutExpenseInputObjectSchema } from './TagUncheckedCreateWithoutExpenseInput.schema';
import { TagCreateOrConnectWithoutExpenseInputObjectSchema } from './TagCreateOrConnectWithoutExpenseInput.schema';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagUncheckedCreateNestedManyWithoutExpenseInput> = z.union([
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
    connect: z
      .union([
        z.lazy(() => TagWhereUniqueInputObjectSchema),
        z.lazy(() => TagWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  }),
]);

export const TagUncheckedCreateNestedManyWithoutExpenseInputObjectSchema = Schema;
