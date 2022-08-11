import { z } from 'zod';
import { ExpenseCreateInputObjectSchema } from './objects/ExpenseCreateInput.schema';

export const ExpenseCreateOneSchema = z.object({ data: ExpenseCreateInputObjectSchema });
