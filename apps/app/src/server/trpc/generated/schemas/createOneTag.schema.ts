import { z } from 'zod';
import { TagCreateInputObjectSchema } from './objects/TagCreateInput.schema';

export const TagCreateOneSchema = z.object({ data: TagCreateInputObjectSchema });
