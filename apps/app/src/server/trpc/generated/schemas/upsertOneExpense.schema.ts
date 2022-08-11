import { z } from 'zod';
import { ExpenseWhereUniqueInputObjectSchema } from './objects/ExpenseWhereUniqueInput.schema';
import { ExpenseCreateInputObjectSchema } from './objects/ExpenseCreateInput.schema';
import { ExpenseUpdateInputObjectSchema } from './objects/ExpenseUpdateInput.schema';

export const ExpenseUpsertSchema = z.object({
  where: ExpenseWhereUniqueInputObjectSchema,
  create: ExpenseCreateInputObjectSchema,
  update: ExpenseUpdateInputObjectSchema,
});
