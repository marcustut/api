import { z } from 'zod';
import { IncomeScalarWhereInputObjectSchema } from './IncomeScalarWhereInput.schema';
import { IncomeUpdateManyMutationInputObjectSchema } from './IncomeUpdateManyMutationInput.schema';
import { IncomeUncheckedUpdateManyWithoutIncomeInputObjectSchema } from './IncomeUncheckedUpdateManyWithoutIncomeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IncomeUpdateManyWithWhereWithoutTagInput> = z
  .object({
    where: z.lazy(() => IncomeScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => IncomeUpdateManyMutationInputObjectSchema),
      z.lazy(() => IncomeUncheckedUpdateManyWithoutIncomeInputObjectSchema),
    ]),
  })
  .strict();

export const IncomeUpdateManyWithWhereWithoutTagInputObjectSchema = Schema;
