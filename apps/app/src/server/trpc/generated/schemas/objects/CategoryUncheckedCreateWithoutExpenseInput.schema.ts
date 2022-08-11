import { z } from 'zod';
import { CategoryTypeSchema } from '../enums/CategoryType.schema';
import { IncomeUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './IncomeUncheckedCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutExpenseInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    type: z.lazy(() => CategoryTypeSchema),
    Income: z
      .lazy(() => IncomeUncheckedCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryUncheckedCreateWithoutExpenseInputObjectSchema = Schema;
