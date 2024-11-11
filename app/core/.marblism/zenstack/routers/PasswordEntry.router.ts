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

        createMany: procedure.input($Schema.PasswordEntryInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).passwordEntry.createMany(input as any))),

        create: procedure.input($Schema.PasswordEntryInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).passwordEntry.create(input as any))),

        deleteMany: procedure.input($Schema.PasswordEntryInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).passwordEntry.deleteMany(input as any))),

        delete: procedure.input($Schema.PasswordEntryInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).passwordEntry.delete(input as any))),

        findFirst: procedure.input($Schema.PasswordEntryInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).passwordEntry.findFirst(input as any))),

        findMany: procedure.input($Schema.PasswordEntryInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).passwordEntry.findMany(input as any))),

        findUnique: procedure.input($Schema.PasswordEntryInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).passwordEntry.findUnique(input as any))),

        updateMany: procedure.input($Schema.PasswordEntryInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).passwordEntry.updateMany(input as any))),

        update: procedure.input($Schema.PasswordEntryInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).passwordEntry.update(input as any))),

        count: procedure.input($Schema.PasswordEntryInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).passwordEntry.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.PasswordEntryCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PasswordEntryCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PasswordEntryCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PasswordEntryCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.PasswordEntryCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PasswordEntryCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PasswordEntryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PasswordEntryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PasswordEntryCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PasswordEntryCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PasswordEntryGetPayload<T>, Context>) => Promise<Prisma.PasswordEntryGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.PasswordEntryDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PasswordEntryDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PasswordEntryDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PasswordEntryDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.PasswordEntryDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PasswordEntryDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PasswordEntryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PasswordEntryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PasswordEntryDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PasswordEntryDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PasswordEntryGetPayload<T>, Context>) => Promise<Prisma.PasswordEntryGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.PasswordEntryFindFirstArgs, TData = Prisma.PasswordEntryGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.PasswordEntryFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PasswordEntryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PasswordEntryFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PasswordEntryFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PasswordEntryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PasswordEntryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.PasswordEntryFindManyArgs, TData = Array<Prisma.PasswordEntryGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.PasswordEntryFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.PasswordEntryGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PasswordEntryFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.PasswordEntryFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.PasswordEntryGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.PasswordEntryGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.PasswordEntryFindUniqueArgs, TData = Prisma.PasswordEntryGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.PasswordEntryFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.PasswordEntryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.PasswordEntryFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.PasswordEntryFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.PasswordEntryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.PasswordEntryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.PasswordEntryUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PasswordEntryUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PasswordEntryUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PasswordEntryUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.PasswordEntryUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.PasswordEntryUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.PasswordEntryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.PasswordEntryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.PasswordEntryUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.PasswordEntryUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.PasswordEntryGetPayload<T>, Context>) => Promise<Prisma.PasswordEntryGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.PasswordEntryCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PasswordEntryCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.PasswordEntryCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.PasswordEntryCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.PasswordEntryCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.PasswordEntryCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.PasswordEntryCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.PasswordEntryCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
