import { z } from 'zod';
import { IncomeUpdateManyMutationInputObjectSchema } from './objects/IncomeUpdateManyMutationInput.schema';
import { IncomeWhereInputObjectSchema } from './objects/IncomeWhereInput.schema';

export const IncomeUpdateManySchema = z.object({
  data: IncomeUpdateManyMutationInputObjectSchema,
  where: IncomeWhereInputObjectSchema.optional(),
});
