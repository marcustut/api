import { z } from 'zod';
import { ExpenseWhereInputObjectSchema } from './objects/ExpenseWhereInput.schema';
import { ExpenseOrderByWithRelationInputObjectSchema } from './objects/ExpenseOrderByWithRelationInput.schema';
import { ExpenseWhereUniqueInputObjectSchema } from './objects/ExpenseWhereUniqueInput.schema';
import { ExpenseScalarFieldEnumSchema } from './enums/ExpenseScalarFieldEnum.schema';

export const ExpenseFindManySchema = z.object({
  where: ExpenseWhereInputObjectSchema.optional(),
  orderBy: ExpenseOrderByWithRelationInputObjectSchema.optional(),
  cursor: ExpenseWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(ExpenseScalarFieldEnumSchema).optional(),
});
