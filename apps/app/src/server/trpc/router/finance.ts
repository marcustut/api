import { ExpenseFindManySchema } from '@/server/trpc/generated/schemas/findManyExpense.schema';
import { authedProcedure, t } from '@/server/trpc/utils';

import { ExpenseCreateManySchema } from '../generated/schemas/createManyExpense.schema';
import { ExpenseCreateOneSchema } from '../generated/schemas/createOneExpense.schema';

const INCOMES_CATEGORIES = [
  {
    id: 1,
    name: 'Parent',
  },
  {
    id: 2,
    name: 'Claim',
  },
  {
    id: 3,
    name: 'Salary',
  },
  {
    id: 4,
    name: 'Blessing',
  },
  {
    id: 5,
    name: 'Bill Split',
  },
];

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
  seed: t.procedure.mutation(({ ctx }) => {}),
});
