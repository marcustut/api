import { z } from 'zod';

export const ExpenseScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'amount',
  'date',
  'comment',
  'categoryId',
]);
