/* eslint-disable */
import type {
  unsetMarker,
  AnyRouter,
  AnyRootConfig,
  CreateRouterInner,
  Procedure,
  ProcedureBuilder,
  ProcedureParams,
  ProcedureRouterRecord,
  ProcedureType,
} from '@trpc/server'
import type { PrismaClient } from '@prisma/client'
import createUserRouter from './User.router'
import createPasswordEntryRouter from './PasswordEntry.router'
import createClipboardHistoryRouter from './ClipboardHistory.router'
import { ClientType as UserClientType } from './User.router'
import { ClientType as PasswordEntryClientType } from './PasswordEntry.router'
import { ClientType as ClipboardHistoryClientType } from './ClipboardHistory.router'

export type BaseConfig = AnyRootConfig

export type RouterFactory<Config extends BaseConfig> = <
  ProcRouterRecord extends ProcedureRouterRecord,
>(
  procedures: ProcRouterRecord,
) => CreateRouterInner<Config, ProcRouterRecord>

export type UnsetMarker = typeof unsetMarker

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
  ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>

export function db(ctx: any) {
  if (!ctx.prisma) {
    throw new Error('Missing "prisma" field in trpc context')
  }
  return ctx.prisma as PrismaClient
}

export function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    user: createUserRouter(router, procedure),
    passwordEntry: createPasswordEntryRouter(router, procedure),
    clipboardHistory: createClipboardHistoryRouter(router, procedure),
  })
}

export interface ClientType<AppRouter extends AnyRouter> {
  user: UserClientType<AppRouter>
  passwordEntry: PasswordEntryClientType<AppRouter>
  clipboardHistory: ClipboardHistoryClientType<AppRouter>
}
