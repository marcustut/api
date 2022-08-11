// src/server/trpc/router/index.ts
import { authRouter } from '@/server/trpc/router/auth';
import { financeRouter } from '@/server/trpc/router/finance';
import { t } from '@/server/trpc/utils';

export const appRouter = t.router({
  finance: financeRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
