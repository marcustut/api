import { z } from 'zod';
import { TagWhereInputObjectSchema } from './objects/TagWhereInput.schema';
import { TagOrderByWithRelationInputObjectSchema } from './objects/TagOrderByWithRelationInput.schema';
import { TagWhereUniqueInputObjectSchema } from './objects/TagWhereUniqueInput.schema';

export const TagAggregateSchema = z.object({
  where: TagWhereInputObjectSchema.optional(),
  orderBy: TagOrderByWithRelationInputObjectSchema.optional(),
  cursor: TagWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
