import { z } from 'zod';
import { ExpenseWhereInputObjectSchema } from './objects/ExpenseWhereInput.schema';
import { ExpenseOrderByWithRelationInputObjectSchema } from './objects/ExpenseOrderByWithRelationInput.schema';
import { ExpenseWhereUniqueInputObjectSchema } from './objects/ExpenseWhereUniqueInput.schema';

export const ExpenseAggregateSchema = z.object({
  where: ExpenseWhereInputObjectSchema.optional(),
  orderBy: ExpenseOrderByWithRelationInputObjectSchema.optional(),
  cursor: ExpenseWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
