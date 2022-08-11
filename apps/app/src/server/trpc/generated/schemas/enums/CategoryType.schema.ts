import { z } from 'zod';

export const CategoryTypeSchema = z.enum(['Income', 'Expense']);
