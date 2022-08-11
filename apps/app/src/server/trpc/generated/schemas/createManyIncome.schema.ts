import { z } from 'zod';
import { IncomeCreateManyInputObjectSchema } from './objects/IncomeCreateManyInput.schema';

export const IncomeCreateManySchema = z.object({ data: IncomeCreateManyInputObjectSchema });
