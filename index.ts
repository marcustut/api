// This file was generated by [rspc](https://github.com/oscartbeaumont/rspc). Do not edit this file manually.

export type Operations = {
    queries: 
        { key: ["listExpenses"], result: Array<Expenses> } | 
        { key: ["version"], result: string },
    mutations: never,
    subscriptions: never
};

export interface Expenses { id: number, name: string, amount: string, date: string, comment: string | null, expenses_categories_id: number | null }