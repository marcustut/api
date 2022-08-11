import { z } from 'zod';
import { TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagCreateWithoutExpenseInputObjectSchema } from './TagCreateWithoutExpenseInput.schema';
import { TagUncheckedCreateWithoutExpenseInputObjectSchema } from './TagUncheckedCreateWithoutExpenseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagCreateOrConnectWithoutExpenseInput> = z
  .object({
    where: z.lazy(() => TagWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagCreateWithoutExpenseInputObjectSchema),
      z.lazy(() => TagUncheckedCreateWithoutExpenseInputObjectSchema),
    ]),
  })
  .strict();

export const TagCreateOrConnectWithoutExpenseInputObjectSchema = Schema;
