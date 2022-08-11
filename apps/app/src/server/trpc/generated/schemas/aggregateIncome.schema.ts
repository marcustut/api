import { z } from 'zod';
import { IncomeWhereInputObjectSchema } from './objects/IncomeWhereInput.schema';
import { IncomeOrderByWithRelationInputObjectSchema } from './objects/IncomeOrderByWithRelationInput.schema';
import { IncomeWhereUniqueInputObjectSchema } from './objects/IncomeWhereUniqueInput.schema';

export const IncomeAggregateSchema = z.object({
  where: IncomeWhereInputObjectSchema.optional(),
  orderBy: IncomeOrderByWithRelationInputObjectSchema.optional(),
  cursor: IncomeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
