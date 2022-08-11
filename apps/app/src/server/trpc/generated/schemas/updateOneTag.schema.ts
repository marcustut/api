import { z } from 'zod';
import { TagUpdateInputObjectSchema } from './objects/TagUpdateInput.schema';
import { TagWhereUniqueInputObjectSchema } from './objects/TagWhereUniqueInput.schema';

export const TagUpdateOneSchema = z.object({
  data: TagUpdateInputObjectSchema,
  where: TagWhereUniqueInputObjectSchema,
});
