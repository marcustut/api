import { z } from 'zod';
import { CategoryCreateWithoutExpenseInputObjectSchema } from './CategoryCreateWithoutExpenseInput.schema';
import { CategoryUncheckedCreateWithoutExpenseInputObjectSchema } from './CategoryUncheckedCreateWithoutExpenseInput.schema';
import { CategoryCreateOrConnectWithoutExpenseInputObjectSchema } from './CategoryCreateOrConnectWithoutExpenseInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutExpenseInput> = z.union([
  z.object({
    create: z
      .union([
        z.lazy(() => CategoryCreateWithoutExpenseInputObjectSchema),
        z.lazy(() => CategoryUncheckedCreateWithoutExpenseInputObjectSchema),
      ])
      .optional(),
  }),
  z.object({
    connectOrCreate: z
      .lazy(() => CategoryCreateOrConnectWithoutExpenseInputObjectSchema)
      .optional(),
  }),
  z.object({
    connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
  }),
]);

export const CategoryCreateNestedOneWithoutExpenseInputObjectSchema = Schema;
