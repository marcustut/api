// src/server/trpc/context.ts
import { unstable_getServerSession as getServerSession } from 'next-auth';
import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';

import { authOptions as nextAuthOptions } from '@/pages/api/auth/[...nextauth]';
import { prisma } from '@/server/db/client';

export const createContext = async (opts: trpcNext.CreateNextContextOptions) => {
  const session = await getServerSession(opts.req, opts.res, nextAuthOptions);

  return {
    session,
    prisma,
  };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
