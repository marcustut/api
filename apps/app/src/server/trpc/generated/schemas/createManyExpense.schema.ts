import { z } from 'zod';
import { ExpenseCreateManyInputObjectSchema } from './objects/ExpenseCreateManyInput.schema';

export const ExpenseCreateManySchema = z.object({ data: ExpenseCreateManyInputObjectSchema });
