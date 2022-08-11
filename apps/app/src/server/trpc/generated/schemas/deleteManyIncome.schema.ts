import { z } from 'zod';
import { IncomeWhereInputObjectSchema } from './objects/IncomeWhereInput.schema';

export const IncomeDeleteManySchema = z.object({ where: IncomeWhereInputObjectSchema.optional() });
