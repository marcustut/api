import { z } from 'zod';

export const IncomeScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'amount',
  'date',
  'comment',
  'categoryId',
]);
