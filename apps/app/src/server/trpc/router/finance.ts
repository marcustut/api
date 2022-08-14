import { ExpenseFindManySchema } from '@/server/trpc/generated/schemas/findManyExpense.schema';
import { t } from '@/server/trpc/utils';

import { ExpenseCreateManySchema } from '../generated/schemas/createManyExpense.schema';
import { ExpenseCreateOneSchema } from '../generated/schemas/createOneExpense.schema';

export const financeRouter = t.router({
  findManyExpense: t.procedure
    .input(ExpenseFindManySchema)
    .query(({ ctx, input }) => ctx.prisma.expense.findMany(input)),
  createManyExpense: t.procedure
    .input(ExpenseCreateManySchema)
    .mutation(({ ctx, input }) => ctx.prisma.expense.createMany(input)),
  createOneExpense: t.procedure
    .input(ExpenseCreateOneSchema)
    .mutation(({ ctx, input }) => ctx.prisma.expense.create(input)),
});
