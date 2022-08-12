import { CategoryType, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import expenses from './data/expenses.json';
import expenses_categories from './data/expenses_categories.json';
import incomes from './data/incomes.json';
import incomes_categories from './data/incomes_categories.json';

async function main() {
  console.log('Cleaning previous data for seed...');
  await prisma.category.deleteMany({});
  await prisma.tag.deleteMany({});
  await prisma.expense.deleteMany({});
  await prisma.income.deleteMany({});
  console.log("Deleted 'Category'");
  console.log("Deleted 'Tag'");
  console.log("Deleted 'Expense'");
  console.log("Deleted 'Income'");

  console.log('----------------------------------------');

  console.log("Seeding 'Category'...");
  const { count: categoryCount } = await prisma.category.createMany({
    data: [
      ...expenses_categories.map(({ name }) => ({ name, type: CategoryType.Expense })),
      ...incomes_categories.map(({ name }) => ({ name, type: CategoryType.Income })),
    ],
    skipDuplicates: true,
  });
  console.log(`Seeded 'Category' with ${categoryCount} items.`);

  console.log('----------------------------------------');

  console.log("Seeding 'Expense'...");
  for (const expense of expenses) {
    await prisma.expense.create({
      data: {
        name: expense.name,
        amount: parseFloat(expense.amount),
        comment: expense.comment,
        date: new Date(expense.date),
        Category: {
          connectOrCreate: {
            where: { name_type: { name: expense.category, type: CategoryType.Expense } },
            create: { name: expense.category, type: CategoryType.Expense },
          },
        },
        Tag: {
          connectOrCreate: {
            where: { name: expense.tags },
            create: { name: expense.tags },
          },
        },
      },
    });
  }
  console.log(`Seeded 'Expense' with ${expenses.length} items.`);

  console.log('----------------------------------------');

  console.log("Seeding 'Income'...");
  for (const income of incomes) {
    await prisma.income.create({
      data: {
        name: income.name,
        amount: parseFloat(income.amount),
        comment: income.comment,
        date: new Date(income.date),
        Category: {
          connectOrCreate: {
            where: { name_type: { name: income.category, type: CategoryType.Income } },
            create: { name: income.category, type: CategoryType.Income },
          },
        },
        Tag: {
          connectOrCreate: {
            where: { name: income.tags },
            create: { name: income.tags },
          },
        },
      },
    });
  }
  console.log(`Seeded 'Income' with ${incomes.length} items.`);
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
