import { createRouter } from "./helpers/createRouter";
import { accountsRouter } from "./Account.router";
import { sessionsRouter } from "./Session.router";
import { usersRouter } from "./User.router";
import { verificationtokensRouter } from "./VerificationToken.router";
import { expensesRouter } from "./Expense.router";
import { incomesRouter } from "./Income.router";
import { categoriesRouter } from "./Category.router";
import { tagsRouter } from "./Tag.router";

export const appRouter = createRouter()

  .merge('account.', accountsRouter)

  .merge('session.', sessionsRouter)

  .merge('user.', usersRouter)

  .merge('verificationtoken.', verificationtokensRouter)

  .merge('expense.', expensesRouter)

  .merge('income.', incomesRouter)

  .merge('category.', categoriesRouter)

  .merge('tag.', tagsRouter)
