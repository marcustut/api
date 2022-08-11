import { z } from 'zod';
import { IncomeWhereUniqueInputObjectSchema } from './objects/IncomeWhereUniqueInput.schema';
import { IncomeCreateInputObjectSchema } from './objects/IncomeCreateInput.schema';
import { IncomeUpdateInputObjectSchema } from './objects/IncomeUpdateInput.schema';

export const IncomeUpsertSchema = z.object({
  where: IncomeWhereUniqueInputObjectSchema,
  create: IncomeCreateInputObjectSchema,
  update: IncomeUpdateInputObjectSchema,
});
