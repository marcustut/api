import { z } from 'zod';
import { IncomeWhereUniqueInputObjectSchema } from './objects/IncomeWhereUniqueInput.schema';

export const IncomeFindUniqueSchema = z.object({ where: IncomeWhereUniqueInputObjectSchema });
