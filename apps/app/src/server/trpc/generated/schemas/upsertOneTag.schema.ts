import { z } from 'zod';
import { TagWhereUniqueInputObjectSchema } from './objects/TagWhereUniqueInput.schema';
import { TagCreateInputObjectSchema } from './objects/TagCreateInput.schema';
import { TagUpdateInputObjectSchema } from './objects/TagUpdateInput.schema';

export const TagUpsertSchema = z.object({
  where: TagWhereUniqueInputObjectSchema,
  create: TagCreateInputObjectSchema,
  update: TagUpdateInputObjectSchema,
});
