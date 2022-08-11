import { z } from 'zod';
import { IncomeWhereInputObjectSchema } from './objects/IncomeWhereInput.schema';
import { IncomeOrderByWithRelationInputObjectSchema } from './objects/IncomeOrderByWithRelationInput.schema';
import { IncomeWhereUniqueInputObjectSchema } from './objects/IncomeWhereUniqueInput.schema';
import { IncomeScalarFieldEnumSchema } from './enums/IncomeScalarFieldEnum.schema';

export const IncomeFindManySchema = z.object({
  where: IncomeWhereInputObjectSchema.optional(),
  orderBy: IncomeOrderByWithRelationInputObjectSchema.optional(),
  cursor: IncomeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(IncomeScalarFieldEnumSchema).optional(),
});
