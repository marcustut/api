import { authedProcedure, t } from '@/server/trpc/utils';

export const authRouter = t.router({
  getSession: t.procedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: authedProcedure.query(() => {
    return 'You are logged in and can see this secret message!';
  }),
});
