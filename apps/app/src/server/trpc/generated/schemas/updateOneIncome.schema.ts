import { z } from 'zod';
import { IncomeUpdateInputObjectSchema } from './objects/IncomeUpdateInput.schema';
import { IncomeWhereUniqueInputObjectSchema } from './objects/IncomeWhereUniqueInput.schema';

export const IncomeUpdateOneSchema = z.object({
  data: IncomeUpdateInputObjectSchema,
  where: IncomeWhereUniqueInputObjectSchema,
});
