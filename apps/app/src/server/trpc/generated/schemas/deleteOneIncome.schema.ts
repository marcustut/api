import { z } from 'zod';
import { IncomeWhereUniqueInputObjectSchema } from './objects/IncomeWhereUniqueInput.schema';

export const IncomeDeleteOneSchema = z.object({ where: IncomeWhereUniqueInputObjectSchema });
