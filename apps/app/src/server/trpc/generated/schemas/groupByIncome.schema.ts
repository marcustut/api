import { z } from 'zod';
import { IncomeWhereInputObjectSchema } from './objects/IncomeWhereInput.schema';
import { IncomeOrderByWithAggregationInputObjectSchema } from './objects/IncomeOrderByWithAggregationInput.schema';
import { IncomeScalarWhereWithAggregatesInputObjectSchema } from './objects/IncomeScalarWhereWithAggregatesInput.schema';
import { IncomeScalarFieldEnumSchema } from './enums/IncomeScalarFieldEnum.schema';

export const IncomeGroupBySchema = z.object({
  where: IncomeWhereInputObjectSchema.optional(),
  orderBy: IncomeOrderByWithAggregationInputObjectSchema,
  having: IncomeScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(IncomeScalarFieldEnumSchema),
});
