import { ExpenseFindManySchema } from '@/server/trpc/generated/schemas/findManyExpense.schema';
import { authedProcedure, t } from '@/server/trpc/utils';

export const financeRouter = t.router({
  findManyExpense: t.procedure
    .input(ExpenseFindManySchema)
    .query(({ ctx, input }) => ctx.prisma.expense.findMany(input)),
});
