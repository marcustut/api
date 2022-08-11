import { z } from 'zod';
import { ExpenseUpdateInputObjectSchema } from './objects/ExpenseUpdateInput.schema';
import { ExpenseWhereUniqueInputObjectSchema } from './objects/ExpenseWhereUniqueInput.schema';

export const ExpenseUpdateOneSchema = z.object({
  data: ExpenseUpdateInputObjectSchema,
  where: ExpenseWhereUniqueInputObjectSchema,
});
