import * as trpc from "@trpc/server";

import { Context } from '@/server/trpc/context';

export function createRouter() {
  return trpc.router<Context>();
}

export function createProtectedRouter() {
  return trpc
    .router<Context>()
    ;
}
