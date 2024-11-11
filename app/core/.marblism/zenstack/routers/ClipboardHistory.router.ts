/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.ClipboardHistoryInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).clipboardHistory.createMany(input as any))),

        create: procedure.input($Schema.ClipboardHistoryInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).clipboardHistory.create(input as any))),

        deleteMany: procedure.input($Schema.ClipboardHistoryInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).clipboardHistory.deleteMany(input as any))),

        delete: procedure.input($Schema.ClipboardHistoryInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).clipboardHistory.delete(input as any))),

        findFirst: procedure.input($Schema.ClipboardHistoryInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).clipboardHistory.findFirst(input as any))),

        findMany: procedure.input($Schema.ClipboardHistoryInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).clipboardHistory.findMany(input as any))),

        findUnique: procedure.input($Schema.ClipboardHistoryInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).clipboardHistory.findUnique(input as any))),

        updateMany: procedure.input($Schema.ClipboardHistoryInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).clipboardHistory.updateMany(input as any))),

        update: procedure.input($Schema.ClipboardHistoryInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).clipboardHistory.update(input as any))),

        count: procedure.input($Schema.ClipboardHistoryInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).clipboardHistory.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ClipboardHistoryCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ClipboardHistoryCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ClipboardHistoryCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ClipboardHistoryCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ClipboardHistoryCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ClipboardHistoryCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ClipboardHistoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ClipboardHistoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ClipboardHistoryCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ClipboardHistoryCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ClipboardHistoryGetPayload<T>, Context>) => Promise<Prisma.ClipboardHistoryGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ClipboardHistoryDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ClipboardHistoryDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ClipboardHistoryDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ClipboardHistoryDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ClipboardHistoryDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ClipboardHistoryDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ClipboardHistoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ClipboardHistoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ClipboardHistoryDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ClipboardHistoryDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ClipboardHistoryGetPayload<T>, Context>) => Promise<Prisma.ClipboardHistoryGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ClipboardHistoryFindFirstArgs, TData = Prisma.ClipboardHistoryGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ClipboardHistoryFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ClipboardHistoryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ClipboardHistoryFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ClipboardHistoryFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ClipboardHistoryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ClipboardHistoryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ClipboardHistoryFindManyArgs, TData = Array<Prisma.ClipboardHistoryGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.ClipboardHistoryFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ClipboardHistoryGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ClipboardHistoryFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ClipboardHistoryFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ClipboardHistoryGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ClipboardHistoryGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ClipboardHistoryFindUniqueArgs, TData = Prisma.ClipboardHistoryGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ClipboardHistoryFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ClipboardHistoryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ClipboardHistoryFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ClipboardHistoryFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ClipboardHistoryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ClipboardHistoryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ClipboardHistoryUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ClipboardHistoryUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ClipboardHistoryUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ClipboardHistoryUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ClipboardHistoryUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ClipboardHistoryUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ClipboardHistoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ClipboardHistoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ClipboardHistoryUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ClipboardHistoryUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ClipboardHistoryGetPayload<T>, Context>) => Promise<Prisma.ClipboardHistoryGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.ClipboardHistoryCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ClipboardHistoryCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.ClipboardHistoryCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ClipboardHistoryCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ClipboardHistoryCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.ClipboardHistoryCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ClipboardHistoryCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ClipboardHistoryCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
