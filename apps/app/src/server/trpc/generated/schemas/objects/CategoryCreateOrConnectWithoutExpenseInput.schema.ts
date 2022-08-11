import { z } from 'zod';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryCreateWithoutExpenseInputObjectSchema } from './CategoryCreateWithoutExpenseInput.schema';
import { CategoryUncheckedCreateWithoutExpenseInputObjectSchema } from './CategoryUncheckedCreateWithoutExpenseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutExpenseInput> = z
  .object({
    where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutExpenseInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutExpenseInputObjectSchema),
    ]),
  })
  .strict();

export const CategoryCreateOrConnectWithoutExpenseInputObjectSchema = Schema;
