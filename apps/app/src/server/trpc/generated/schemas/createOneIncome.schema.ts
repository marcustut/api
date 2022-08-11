import { z } from 'zod';
import { IncomeCreateInputObjectSchema } from './objects/IncomeCreateInput.schema';

export const IncomeCreateOneSchema = z.object({ data: IncomeCreateInputObjectSchema });
