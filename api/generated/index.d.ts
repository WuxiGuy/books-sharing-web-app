
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Books
 * 
 */
export type Books = {
  id: number
  title: string
  author: string
  publisher: string
  year: string
  cover: string
  category: string
  summary: string
}

/**
 * Model User
 * 
 */
export type User = {
  id: number
  email: string
  auth0Id: string
  name: string | null
}

/**
 * Model SavedBooks
 * 
 */
export type SavedBooks = {
  id: number
  userId: number
  bookId: number
  createdAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Books
 * const books = await prisma.books.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Books
   * const books = await prisma.books.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.books`: Exposes CRUD operations for the **Books** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.books.findMany()
    * ```
    */
  get books(): Prisma.BooksDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.savedBooks`: Exposes CRUD operations for the **SavedBooks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedBooks
    * const savedBooks = await prisma.savedBooks.findMany()
    * ```
    */
  get savedBooks(): Prisma.SavedBooksDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.7.0
   * Query Engine version: 39190b250ebc338586e25e6da45e5e783bc8a635
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Books: 'Books',
    User: 'User',
    SavedBooks: 'SavedBooks'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BooksCountOutputType
   */


  export type BooksCountOutputType = {
    savedBy: number
  }

  export type BooksCountOutputTypeSelect = {
    savedBy?: boolean
  }

  export type BooksCountOutputTypeGetPayload<S extends boolean | null | undefined | BooksCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BooksCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BooksCountOutputTypeArgs)
    ? BooksCountOutputType 
    : S extends { select: any } & (BooksCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BooksCountOutputType ? BooksCountOutputType[P] : never
  } 
      : BooksCountOutputType




  // Custom InputTypes

  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BooksCountOutputType
     * 
    **/
    select?: BooksCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    savedBooks: number
  }

  export type UserCountOutputTypeSelect = {
    savedBooks?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Books
   */


  export type AggregateBooks = {
    _count: BooksCountAggregateOutputType | null
    _avg: BooksAvgAggregateOutputType | null
    _sum: BooksSumAggregateOutputType | null
    _min: BooksMinAggregateOutputType | null
    _max: BooksMaxAggregateOutputType | null
  }

  export type BooksAvgAggregateOutputType = {
    id: number | null
  }

  export type BooksSumAggregateOutputType = {
    id: number | null
  }

  export type BooksMinAggregateOutputType = {
    id: number | null
    title: string | null
    author: string | null
    publisher: string | null
    year: string | null
    cover: string | null
    category: string | null
    summary: string | null
  }

  export type BooksMaxAggregateOutputType = {
    id: number | null
    title: string | null
    author: string | null
    publisher: string | null
    year: string | null
    cover: string | null
    category: string | null
    summary: string | null
  }

  export type BooksCountAggregateOutputType = {
    id: number
    title: number
    author: number
    publisher: number
    year: number
    cover: number
    category: number
    summary: number
    _all: number
  }


  export type BooksAvgAggregateInputType = {
    id?: true
  }

  export type BooksSumAggregateInputType = {
    id?: true
  }

  export type BooksMinAggregateInputType = {
    id?: true
    title?: true
    author?: true
    publisher?: true
    year?: true
    cover?: true
    category?: true
    summary?: true
  }

  export type BooksMaxAggregateInputType = {
    id?: true
    title?: true
    author?: true
    publisher?: true
    year?: true
    cover?: true
    category?: true
    summary?: true
  }

  export type BooksCountAggregateInputType = {
    id?: true
    title?: true
    author?: true
    publisher?: true
    year?: true
    cover?: true
    category?: true
    summary?: true
    _all?: true
  }

  export type BooksAggregateArgs = {
    /**
     * Filter which Books to aggregate.
     * 
    **/
    where?: BooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     * 
    **/
    orderBy?: Enumerable<BooksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BooksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BooksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BooksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BooksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BooksMaxAggregateInputType
  }

  export type GetBooksAggregateType<T extends BooksAggregateArgs> = {
        [P in keyof T & keyof AggregateBooks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooks[P]>
      : GetScalarType<T[P], AggregateBooks[P]>
  }




  export type BooksGroupByArgs = {
    where?: BooksWhereInput
    orderBy?: Enumerable<BooksOrderByWithAggregationInput>
    by: Array<BooksScalarFieldEnum>
    having?: BooksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BooksCountAggregateInputType | true
    _avg?: BooksAvgAggregateInputType
    _sum?: BooksSumAggregateInputType
    _min?: BooksMinAggregateInputType
    _max?: BooksMaxAggregateInputType
  }


  export type BooksGroupByOutputType = {
    id: number
    title: string
    author: string
    publisher: string
    year: string
    cover: string
    category: string
    summary: string
    _count: BooksCountAggregateOutputType | null
    _avg: BooksAvgAggregateOutputType | null
    _sum: BooksSumAggregateOutputType | null
    _min: BooksMinAggregateOutputType | null
    _max: BooksMaxAggregateOutputType | null
  }

  type GetBooksGroupByPayload<T extends BooksGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BooksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BooksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BooksGroupByOutputType[P]>
            : GetScalarType<T[P], BooksGroupByOutputType[P]>
        }
      >
    >


  export type BooksSelect = {
    id?: boolean
    title?: boolean
    author?: boolean
    publisher?: boolean
    year?: boolean
    cover?: boolean
    category?: boolean
    summary?: boolean
    savedBy?: boolean | SavedBooksFindManyArgs
    _count?: boolean | BooksCountOutputTypeArgs
  }


  export type BooksInclude = {
    savedBy?: boolean | SavedBooksFindManyArgs
    _count?: boolean | BooksCountOutputTypeArgs
  } 

  export type BooksGetPayload<S extends boolean | null | undefined | BooksArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Books :
    S extends undefined ? never :
    S extends { include: any } & (BooksArgs | BooksFindManyArgs)
    ? Books  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'savedBy' ? Array < SavedBooksGetPayload<S['include'][P]>>  :
        P extends '_count' ? BooksCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BooksArgs | BooksFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'savedBy' ? Array < SavedBooksGetPayload<S['select'][P]>>  :
        P extends '_count' ? BooksCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Books ? Books[P] : never
  } 
      : Books


  type BooksCountArgs = Merge<
    Omit<BooksFindManyArgs, 'select' | 'include'> & {
      select?: BooksCountAggregateInputType | true
    }
  >

  export interface BooksDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Books that matches the filter.
     * @param {BooksFindUniqueArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BooksFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BooksFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Books'> extends True ? Prisma__BooksClient<BooksGetPayload<T>> : Prisma__BooksClient<BooksGetPayload<T> | null, null>

    /**
     * Find one Books that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BooksFindUniqueOrThrowArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BooksFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BooksFindUniqueOrThrowArgs>
    ): Prisma__BooksClient<BooksGetPayload<T>>

    /**
     * Find the first Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksFindFirstArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BooksFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BooksFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Books'> extends True ? Prisma__BooksClient<BooksGetPayload<T>> : Prisma__BooksClient<BooksGetPayload<T> | null, null>

    /**
     * Find the first Books that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksFindFirstOrThrowArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BooksFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BooksFindFirstOrThrowArgs>
    ): Prisma__BooksClient<BooksGetPayload<T>>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.books.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.books.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const booksWithIdOnly = await prisma.books.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BooksFindManyArgs>(
      args?: SelectSubset<T, BooksFindManyArgs>
    ): PrismaPromise<Array<BooksGetPayload<T>>>

    /**
     * Create a Books.
     * @param {BooksCreateArgs} args - Arguments to create a Books.
     * @example
     * // Create one Books
     * const Books = await prisma.books.create({
     *   data: {
     *     // ... data to create a Books
     *   }
     * })
     * 
    **/
    create<T extends BooksCreateArgs>(
      args: SelectSubset<T, BooksCreateArgs>
    ): Prisma__BooksClient<BooksGetPayload<T>>

    /**
     * Create many Books.
     *     @param {BooksCreateManyArgs} args - Arguments to create many Books.
     *     @example
     *     // Create many Books
     *     const books = await prisma.books.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BooksCreateManyArgs>(
      args?: SelectSubset<T, BooksCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Books.
     * @param {BooksDeleteArgs} args - Arguments to delete one Books.
     * @example
     * // Delete one Books
     * const Books = await prisma.books.delete({
     *   where: {
     *     // ... filter to delete one Books
     *   }
     * })
     * 
    **/
    delete<T extends BooksDeleteArgs>(
      args: SelectSubset<T, BooksDeleteArgs>
    ): Prisma__BooksClient<BooksGetPayload<T>>

    /**
     * Update one Books.
     * @param {BooksUpdateArgs} args - Arguments to update one Books.
     * @example
     * // Update one Books
     * const books = await prisma.books.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BooksUpdateArgs>(
      args: SelectSubset<T, BooksUpdateArgs>
    ): Prisma__BooksClient<BooksGetPayload<T>>

    /**
     * Delete zero or more Books.
     * @param {BooksDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.books.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BooksDeleteManyArgs>(
      args?: SelectSubset<T, BooksDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const books = await prisma.books.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BooksUpdateManyArgs>(
      args: SelectSubset<T, BooksUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Books.
     * @param {BooksUpsertArgs} args - Arguments to update or create a Books.
     * @example
     * // Update or create a Books
     * const books = await prisma.books.upsert({
     *   create: {
     *     // ... data to create a Books
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Books we want to update
     *   }
     * })
    **/
    upsert<T extends BooksUpsertArgs>(
      args: SelectSubset<T, BooksUpsertArgs>
    ): Prisma__BooksClient<BooksGetPayload<T>>

    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.books.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BooksCountArgs>(
      args?: Subset<T, BooksCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BooksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BooksAggregateArgs>(args: Subset<T, BooksAggregateArgs>): PrismaPromise<GetBooksAggregateType<T>>

    /**
     * Group by Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BooksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BooksGroupByArgs['orderBy'] }
        : { orderBy?: BooksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BooksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBooksGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Books.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BooksClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    savedBy<T extends SavedBooksFindManyArgs= {}>(args?: Subset<T, SavedBooksFindManyArgs>): PrismaPromise<Array<SavedBooksGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Books base type for findUnique actions
   */
  export type BooksFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Books
     * 
    **/
    select?: BooksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BooksInclude | null
    /**
     * Filter, which Books to fetch.
     * 
    **/
    where: BooksWhereUniqueInput
  }

  /**
   * Books: findUnique
   */
  export interface BooksFindUniqueArgs extends BooksFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Books findUniqueOrThrow
   */
  export type BooksFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Books
     * 
    **/
    select?: BooksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BooksInclude | null
    /**
     * Filter, which Books to fetch.
     * 
    **/
    where: BooksWhereUniqueInput
  }


  /**
   * Books base type for findFirst actions
   */
  export type BooksFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Books
     * 
    **/
    select?: BooksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BooksInclude | null
    /**
     * Filter, which Books to fetch.
     * 
    **/
    where?: BooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     * 
    **/
    orderBy?: Enumerable<BooksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     * 
    **/
    cursor?: BooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     * 
    **/
    distinct?: Enumerable<BooksScalarFieldEnum>
  }

  /**
   * Books: findFirst
   */
  export interface BooksFindFirstArgs extends BooksFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Books findFirstOrThrow
   */
  export type BooksFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Books
     * 
    **/
    select?: BooksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BooksInclude | null
    /**
     * Filter, which Books to fetch.
     * 
    **/
    where?: BooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     * 
    **/
    orderBy?: Enumerable<BooksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     * 
    **/
    cursor?: BooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     * 
    **/
    distinct?: Enumerable<BooksScalarFieldEnum>
  }


  /**
   * Books findMany
   */
  export type BooksFindManyArgs = {
    /**
     * Select specific fields to fetch from the Books
     * 
    **/
    select?: BooksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BooksInclude | null
    /**
     * Filter, which Books to fetch.
     * 
    **/
    where?: BooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     * 
    **/
    orderBy?: Enumerable<BooksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     * 
    **/
    cursor?: BooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BooksScalarFieldEnum>
  }


  /**
   * Books create
   */
  export type BooksCreateArgs = {
    /**
     * Select specific fields to fetch from the Books
     * 
    **/
    select?: BooksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BooksInclude | null
    /**
     * The data needed to create a Books.
     * 
    **/
    data: XOR<BooksCreateInput, BooksUncheckedCreateInput>
  }


  /**
   * Books createMany
   */
  export type BooksCreateManyArgs = {
    /**
     * The data used to create many Books.
     * 
    **/
    data: Enumerable<BooksCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Books update
   */
  export type BooksUpdateArgs = {
    /**
     * Select specific fields to fetch from the Books
     * 
    **/
    select?: BooksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BooksInclude | null
    /**
     * The data needed to update a Books.
     * 
    **/
    data: XOR<BooksUpdateInput, BooksUncheckedUpdateInput>
    /**
     * Choose, which Books to update.
     * 
    **/
    where: BooksWhereUniqueInput
  }


  /**
   * Books updateMany
   */
  export type BooksUpdateManyArgs = {
    /**
     * The data used to update Books.
     * 
    **/
    data: XOR<BooksUpdateManyMutationInput, BooksUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     * 
    **/
    where?: BooksWhereInput
  }


  /**
   * Books upsert
   */
  export type BooksUpsertArgs = {
    /**
     * Select specific fields to fetch from the Books
     * 
    **/
    select?: BooksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BooksInclude | null
    /**
     * The filter to search for the Books to update in case it exists.
     * 
    **/
    where: BooksWhereUniqueInput
    /**
     * In case the Books found by the `where` argument doesn't exist, create a new Books with this data.
     * 
    **/
    create: XOR<BooksCreateInput, BooksUncheckedCreateInput>
    /**
     * In case the Books was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BooksUpdateInput, BooksUncheckedUpdateInput>
  }


  /**
   * Books delete
   */
  export type BooksDeleteArgs = {
    /**
     * Select specific fields to fetch from the Books
     * 
    **/
    select?: BooksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BooksInclude | null
    /**
     * Filter which Books to delete.
     * 
    **/
    where: BooksWhereUniqueInput
  }


  /**
   * Books deleteMany
   */
  export type BooksDeleteManyArgs = {
    /**
     * Filter which Books to delete
     * 
    **/
    where?: BooksWhereInput
  }


  /**
   * Books without action
   */
  export type BooksArgs = {
    /**
     * Select specific fields to fetch from the Books
     * 
    **/
    select?: BooksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BooksInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    auth0Id: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    auth0Id: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    auth0Id: number
    name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    auth0Id?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    auth0Id?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    auth0Id?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string
    auth0Id: string
    name: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    auth0Id?: boolean
    name?: boolean
    savedBooks?: boolean | SavedBooksFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    savedBooks?: boolean | SavedBooksFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  } 

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'savedBooks' ? Array < SavedBooksGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'savedBooks' ? Array < SavedBooksGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    savedBooks<T extends SavedBooksFindManyArgs= {}>(args?: Subset<T, SavedBooksFindManyArgs>): PrismaPromise<Array<SavedBooksGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model SavedBooks
   */


  export type AggregateSavedBooks = {
    _count: SavedBooksCountAggregateOutputType | null
    _avg: SavedBooksAvgAggregateOutputType | null
    _sum: SavedBooksSumAggregateOutputType | null
    _min: SavedBooksMinAggregateOutputType | null
    _max: SavedBooksMaxAggregateOutputType | null
  }

  export type SavedBooksAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    bookId: number | null
  }

  export type SavedBooksSumAggregateOutputType = {
    id: number | null
    userId: number | null
    bookId: number | null
  }

  export type SavedBooksMinAggregateOutputType = {
    id: number | null
    userId: number | null
    bookId: number | null
    createdAt: Date | null
  }

  export type SavedBooksMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    bookId: number | null
    createdAt: Date | null
  }

  export type SavedBooksCountAggregateOutputType = {
    id: number
    userId: number
    bookId: number
    createdAt: number
    _all: number
  }


  export type SavedBooksAvgAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
  }

  export type SavedBooksSumAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
  }

  export type SavedBooksMinAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    createdAt?: true
  }

  export type SavedBooksMaxAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    createdAt?: true
  }

  export type SavedBooksCountAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    createdAt?: true
    _all?: true
  }

  export type SavedBooksAggregateArgs = {
    /**
     * Filter which SavedBooks to aggregate.
     * 
    **/
    where?: SavedBooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedBooks to fetch.
     * 
    **/
    orderBy?: Enumerable<SavedBooksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SavedBooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedBooks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedBooks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedBooks
    **/
    _count?: true | SavedBooksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SavedBooksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SavedBooksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedBooksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedBooksMaxAggregateInputType
  }

  export type GetSavedBooksAggregateType<T extends SavedBooksAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedBooks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedBooks[P]>
      : GetScalarType<T[P], AggregateSavedBooks[P]>
  }




  export type SavedBooksGroupByArgs = {
    where?: SavedBooksWhereInput
    orderBy?: Enumerable<SavedBooksOrderByWithAggregationInput>
    by: Array<SavedBooksScalarFieldEnum>
    having?: SavedBooksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedBooksCountAggregateInputType | true
    _avg?: SavedBooksAvgAggregateInputType
    _sum?: SavedBooksSumAggregateInputType
    _min?: SavedBooksMinAggregateInputType
    _max?: SavedBooksMaxAggregateInputType
  }


  export type SavedBooksGroupByOutputType = {
    id: number
    userId: number
    bookId: number
    createdAt: Date
    _count: SavedBooksCountAggregateOutputType | null
    _avg: SavedBooksAvgAggregateOutputType | null
    _sum: SavedBooksSumAggregateOutputType | null
    _min: SavedBooksMinAggregateOutputType | null
    _max: SavedBooksMaxAggregateOutputType | null
  }

  type GetSavedBooksGroupByPayload<T extends SavedBooksGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SavedBooksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedBooksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedBooksGroupByOutputType[P]>
            : GetScalarType<T[P], SavedBooksGroupByOutputType[P]>
        }
      >
    >


  export type SavedBooksSelect = {
    id?: boolean
    user?: boolean | UserArgs
    userId?: boolean
    book?: boolean | BooksArgs
    bookId?: boolean
    createdAt?: boolean
  }


  export type SavedBooksInclude = {
    user?: boolean | UserArgs
    book?: boolean | BooksArgs
  } 

  export type SavedBooksGetPayload<S extends boolean | null | undefined | SavedBooksArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SavedBooks :
    S extends undefined ? never :
    S extends { include: any } & (SavedBooksArgs | SavedBooksFindManyArgs)
    ? SavedBooks  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends 'book' ? BooksGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SavedBooksArgs | SavedBooksFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends 'book' ? BooksGetPayload<S['select'][P]> :  P extends keyof SavedBooks ? SavedBooks[P] : never
  } 
      : SavedBooks


  type SavedBooksCountArgs = Merge<
    Omit<SavedBooksFindManyArgs, 'select' | 'include'> & {
      select?: SavedBooksCountAggregateInputType | true
    }
  >

  export interface SavedBooksDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one SavedBooks that matches the filter.
     * @param {SavedBooksFindUniqueArgs} args - Arguments to find a SavedBooks
     * @example
     * // Get one SavedBooks
     * const savedBooks = await prisma.savedBooks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SavedBooksFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SavedBooksFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SavedBooks'> extends True ? Prisma__SavedBooksClient<SavedBooksGetPayload<T>> : Prisma__SavedBooksClient<SavedBooksGetPayload<T> | null, null>

    /**
     * Find one SavedBooks that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SavedBooksFindUniqueOrThrowArgs} args - Arguments to find a SavedBooks
     * @example
     * // Get one SavedBooks
     * const savedBooks = await prisma.savedBooks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SavedBooksFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SavedBooksFindUniqueOrThrowArgs>
    ): Prisma__SavedBooksClient<SavedBooksGetPayload<T>>

    /**
     * Find the first SavedBooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedBooksFindFirstArgs} args - Arguments to find a SavedBooks
     * @example
     * // Get one SavedBooks
     * const savedBooks = await prisma.savedBooks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SavedBooksFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SavedBooksFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SavedBooks'> extends True ? Prisma__SavedBooksClient<SavedBooksGetPayload<T>> : Prisma__SavedBooksClient<SavedBooksGetPayload<T> | null, null>

    /**
     * Find the first SavedBooks that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedBooksFindFirstOrThrowArgs} args - Arguments to find a SavedBooks
     * @example
     * // Get one SavedBooks
     * const savedBooks = await prisma.savedBooks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SavedBooksFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SavedBooksFindFirstOrThrowArgs>
    ): Prisma__SavedBooksClient<SavedBooksGetPayload<T>>

    /**
     * Find zero or more SavedBooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedBooksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedBooks
     * const savedBooks = await prisma.savedBooks.findMany()
     * 
     * // Get first 10 SavedBooks
     * const savedBooks = await prisma.savedBooks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedBooksWithIdOnly = await prisma.savedBooks.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SavedBooksFindManyArgs>(
      args?: SelectSubset<T, SavedBooksFindManyArgs>
    ): PrismaPromise<Array<SavedBooksGetPayload<T>>>

    /**
     * Create a SavedBooks.
     * @param {SavedBooksCreateArgs} args - Arguments to create a SavedBooks.
     * @example
     * // Create one SavedBooks
     * const SavedBooks = await prisma.savedBooks.create({
     *   data: {
     *     // ... data to create a SavedBooks
     *   }
     * })
     * 
    **/
    create<T extends SavedBooksCreateArgs>(
      args: SelectSubset<T, SavedBooksCreateArgs>
    ): Prisma__SavedBooksClient<SavedBooksGetPayload<T>>

    /**
     * Create many SavedBooks.
     *     @param {SavedBooksCreateManyArgs} args - Arguments to create many SavedBooks.
     *     @example
     *     // Create many SavedBooks
     *     const savedBooks = await prisma.savedBooks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SavedBooksCreateManyArgs>(
      args?: SelectSubset<T, SavedBooksCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a SavedBooks.
     * @param {SavedBooksDeleteArgs} args - Arguments to delete one SavedBooks.
     * @example
     * // Delete one SavedBooks
     * const SavedBooks = await prisma.savedBooks.delete({
     *   where: {
     *     // ... filter to delete one SavedBooks
     *   }
     * })
     * 
    **/
    delete<T extends SavedBooksDeleteArgs>(
      args: SelectSubset<T, SavedBooksDeleteArgs>
    ): Prisma__SavedBooksClient<SavedBooksGetPayload<T>>

    /**
     * Update one SavedBooks.
     * @param {SavedBooksUpdateArgs} args - Arguments to update one SavedBooks.
     * @example
     * // Update one SavedBooks
     * const savedBooks = await prisma.savedBooks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SavedBooksUpdateArgs>(
      args: SelectSubset<T, SavedBooksUpdateArgs>
    ): Prisma__SavedBooksClient<SavedBooksGetPayload<T>>

    /**
     * Delete zero or more SavedBooks.
     * @param {SavedBooksDeleteManyArgs} args - Arguments to filter SavedBooks to delete.
     * @example
     * // Delete a few SavedBooks
     * const { count } = await prisma.savedBooks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SavedBooksDeleteManyArgs>(
      args?: SelectSubset<T, SavedBooksDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedBooksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedBooks
     * const savedBooks = await prisma.savedBooks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SavedBooksUpdateManyArgs>(
      args: SelectSubset<T, SavedBooksUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one SavedBooks.
     * @param {SavedBooksUpsertArgs} args - Arguments to update or create a SavedBooks.
     * @example
     * // Update or create a SavedBooks
     * const savedBooks = await prisma.savedBooks.upsert({
     *   create: {
     *     // ... data to create a SavedBooks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedBooks we want to update
     *   }
     * })
    **/
    upsert<T extends SavedBooksUpsertArgs>(
      args: SelectSubset<T, SavedBooksUpsertArgs>
    ): Prisma__SavedBooksClient<SavedBooksGetPayload<T>>

    /**
     * Count the number of SavedBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedBooksCountArgs} args - Arguments to filter SavedBooks to count.
     * @example
     * // Count the number of SavedBooks
     * const count = await prisma.savedBooks.count({
     *   where: {
     *     // ... the filter for the SavedBooks we want to count
     *   }
     * })
    **/
    count<T extends SavedBooksCountArgs>(
      args?: Subset<T, SavedBooksCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedBooksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedBooksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedBooksAggregateArgs>(args: Subset<T, SavedBooksAggregateArgs>): PrismaPromise<GetSavedBooksAggregateType<T>>

    /**
     * Group by SavedBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedBooksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedBooksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedBooksGroupByArgs['orderBy'] }
        : { orderBy?: SavedBooksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedBooksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedBooksGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedBooks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SavedBooksClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    book<T extends BooksArgs= {}>(args?: Subset<T, BooksArgs>): Prisma__BooksClient<BooksGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SavedBooks base type for findUnique actions
   */
  export type SavedBooksFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SavedBooks
     * 
    **/
    select?: SavedBooksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedBooksInclude | null
    /**
     * Filter, which SavedBooks to fetch.
     * 
    **/
    where: SavedBooksWhereUniqueInput
  }

  /**
   * SavedBooks: findUnique
   */
  export interface SavedBooksFindUniqueArgs extends SavedBooksFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SavedBooks findUniqueOrThrow
   */
  export type SavedBooksFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SavedBooks
     * 
    **/
    select?: SavedBooksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedBooksInclude | null
    /**
     * Filter, which SavedBooks to fetch.
     * 
    **/
    where: SavedBooksWhereUniqueInput
  }


  /**
   * SavedBooks base type for findFirst actions
   */
  export type SavedBooksFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SavedBooks
     * 
    **/
    select?: SavedBooksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedBooksInclude | null
    /**
     * Filter, which SavedBooks to fetch.
     * 
    **/
    where?: SavedBooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedBooks to fetch.
     * 
    **/
    orderBy?: Enumerable<SavedBooksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedBooks.
     * 
    **/
    cursor?: SavedBooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedBooks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedBooks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedBooks.
     * 
    **/
    distinct?: Enumerable<SavedBooksScalarFieldEnum>
  }

  /**
   * SavedBooks: findFirst
   */
  export interface SavedBooksFindFirstArgs extends SavedBooksFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SavedBooks findFirstOrThrow
   */
  export type SavedBooksFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SavedBooks
     * 
    **/
    select?: SavedBooksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedBooksInclude | null
    /**
     * Filter, which SavedBooks to fetch.
     * 
    **/
    where?: SavedBooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedBooks to fetch.
     * 
    **/
    orderBy?: Enumerable<SavedBooksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedBooks.
     * 
    **/
    cursor?: SavedBooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedBooks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedBooks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedBooks.
     * 
    **/
    distinct?: Enumerable<SavedBooksScalarFieldEnum>
  }


  /**
   * SavedBooks findMany
   */
  export type SavedBooksFindManyArgs = {
    /**
     * Select specific fields to fetch from the SavedBooks
     * 
    **/
    select?: SavedBooksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedBooksInclude | null
    /**
     * Filter, which SavedBooks to fetch.
     * 
    **/
    where?: SavedBooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedBooks to fetch.
     * 
    **/
    orderBy?: Enumerable<SavedBooksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedBooks.
     * 
    **/
    cursor?: SavedBooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedBooks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedBooks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SavedBooksScalarFieldEnum>
  }


  /**
   * SavedBooks create
   */
  export type SavedBooksCreateArgs = {
    /**
     * Select specific fields to fetch from the SavedBooks
     * 
    **/
    select?: SavedBooksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedBooksInclude | null
    /**
     * The data needed to create a SavedBooks.
     * 
    **/
    data: XOR<SavedBooksCreateInput, SavedBooksUncheckedCreateInput>
  }


  /**
   * SavedBooks createMany
   */
  export type SavedBooksCreateManyArgs = {
    /**
     * The data used to create many SavedBooks.
     * 
    **/
    data: Enumerable<SavedBooksCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SavedBooks update
   */
  export type SavedBooksUpdateArgs = {
    /**
     * Select specific fields to fetch from the SavedBooks
     * 
    **/
    select?: SavedBooksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedBooksInclude | null
    /**
     * The data needed to update a SavedBooks.
     * 
    **/
    data: XOR<SavedBooksUpdateInput, SavedBooksUncheckedUpdateInput>
    /**
     * Choose, which SavedBooks to update.
     * 
    **/
    where: SavedBooksWhereUniqueInput
  }


  /**
   * SavedBooks updateMany
   */
  export type SavedBooksUpdateManyArgs = {
    /**
     * The data used to update SavedBooks.
     * 
    **/
    data: XOR<SavedBooksUpdateManyMutationInput, SavedBooksUncheckedUpdateManyInput>
    /**
     * Filter which SavedBooks to update
     * 
    **/
    where?: SavedBooksWhereInput
  }


  /**
   * SavedBooks upsert
   */
  export type SavedBooksUpsertArgs = {
    /**
     * Select specific fields to fetch from the SavedBooks
     * 
    **/
    select?: SavedBooksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedBooksInclude | null
    /**
     * The filter to search for the SavedBooks to update in case it exists.
     * 
    **/
    where: SavedBooksWhereUniqueInput
    /**
     * In case the SavedBooks found by the `where` argument doesn't exist, create a new SavedBooks with this data.
     * 
    **/
    create: XOR<SavedBooksCreateInput, SavedBooksUncheckedCreateInput>
    /**
     * In case the SavedBooks was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SavedBooksUpdateInput, SavedBooksUncheckedUpdateInput>
  }


  /**
   * SavedBooks delete
   */
  export type SavedBooksDeleteArgs = {
    /**
     * Select specific fields to fetch from the SavedBooks
     * 
    **/
    select?: SavedBooksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedBooksInclude | null
    /**
     * Filter which SavedBooks to delete.
     * 
    **/
    where: SavedBooksWhereUniqueInput
  }


  /**
   * SavedBooks deleteMany
   */
  export type SavedBooksDeleteManyArgs = {
    /**
     * Filter which SavedBooks to delete
     * 
    **/
    where?: SavedBooksWhereInput
  }


  /**
   * SavedBooks without action
   */
  export type SavedBooksArgs = {
    /**
     * Select specific fields to fetch from the SavedBooks
     * 
    **/
    select?: SavedBooksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SavedBooksInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const BooksScalarFieldEnum: {
    id: 'id',
    title: 'title',
    author: 'author',
    publisher: 'publisher',
    year: 'year',
    cover: 'cover',
    category: 'category',
    summary: 'summary'
  };

  export type BooksScalarFieldEnum = (typeof BooksScalarFieldEnum)[keyof typeof BooksScalarFieldEnum]


  export const SavedBooksScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bookId: 'bookId',
    createdAt: 'createdAt'
  };

  export type SavedBooksScalarFieldEnum = (typeof SavedBooksScalarFieldEnum)[keyof typeof SavedBooksScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    auth0Id: 'auth0Id',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type BooksWhereInput = {
    AND?: Enumerable<BooksWhereInput>
    OR?: Enumerable<BooksWhereInput>
    NOT?: Enumerable<BooksWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    author?: StringFilter | string
    publisher?: StringFilter | string
    year?: StringFilter | string
    cover?: StringFilter | string
    category?: StringFilter | string
    summary?: StringFilter | string
    savedBy?: SavedBooksListRelationFilter
  }

  export type BooksOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publisher?: SortOrder
    year?: SortOrder
    cover?: SortOrder
    category?: SortOrder
    summary?: SortOrder
    savedBy?: SavedBooksOrderByRelationAggregateInput
  }

  export type BooksWhereUniqueInput = {
    id?: number
  }

  export type BooksOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publisher?: SortOrder
    year?: SortOrder
    cover?: SortOrder
    category?: SortOrder
    summary?: SortOrder
    _count?: BooksCountOrderByAggregateInput
    _avg?: BooksAvgOrderByAggregateInput
    _max?: BooksMaxOrderByAggregateInput
    _min?: BooksMinOrderByAggregateInput
    _sum?: BooksSumOrderByAggregateInput
  }

  export type BooksScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BooksScalarWhereWithAggregatesInput>
    OR?: Enumerable<BooksScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BooksScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    author?: StringWithAggregatesFilter | string
    publisher?: StringWithAggregatesFilter | string
    year?: StringWithAggregatesFilter | string
    cover?: StringWithAggregatesFilter | string
    category?: StringWithAggregatesFilter | string
    summary?: StringWithAggregatesFilter | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    auth0Id?: StringFilter | string
    name?: StringNullableFilter | string | null
    savedBooks?: SavedBooksListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    auth0Id?: SortOrder
    name?: SortOrder
    savedBooks?: SavedBooksOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
    auth0Id?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    auth0Id?: SortOrder
    name?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    auth0Id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
  }

  export type SavedBooksWhereInput = {
    AND?: Enumerable<SavedBooksWhereInput>
    OR?: Enumerable<SavedBooksWhereInput>
    NOT?: Enumerable<SavedBooksWhereInput>
    id?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    userId?: IntFilter | number
    book?: XOR<BooksRelationFilter, BooksWhereInput>
    bookId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
  }

  export type SavedBooksOrderByWithRelationInput = {
    id?: SortOrder
    user?: UserOrderByWithRelationInput
    userId?: SortOrder
    book?: BooksOrderByWithRelationInput
    bookId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedBooksWhereUniqueInput = {
    id?: number
  }

  export type SavedBooksOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
    _count?: SavedBooksCountOrderByAggregateInput
    _avg?: SavedBooksAvgOrderByAggregateInput
    _max?: SavedBooksMaxOrderByAggregateInput
    _min?: SavedBooksMinOrderByAggregateInput
    _sum?: SavedBooksSumOrderByAggregateInput
  }

  export type SavedBooksScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SavedBooksScalarWhereWithAggregatesInput>
    OR?: Enumerable<SavedBooksScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SavedBooksScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    bookId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BooksCreateInput = {
    title: string
    author: string
    publisher: string
    year: string
    cover: string
    category: string
    summary: string
    savedBy?: SavedBooksCreateNestedManyWithoutBookInput
  }

  export type BooksUncheckedCreateInput = {
    id?: number
    title: string
    author: string
    publisher: string
    year: string
    cover: string
    category: string
    summary: string
    savedBy?: SavedBooksUncheckedCreateNestedManyWithoutBookInput
  }

  export type BooksUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    savedBy?: SavedBooksUpdateManyWithoutBookNestedInput
  }

  export type BooksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    savedBy?: SavedBooksUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BooksCreateManyInput = {
    id?: number
    title: string
    author: string
    publisher: string
    year: string
    cover: string
    category: string
    summary: string
  }

  export type BooksUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type BooksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    email: string
    auth0Id?: string
    name?: string | null
    savedBooks?: SavedBooksCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    auth0Id?: string
    name?: string | null
    savedBooks?: SavedBooksUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    savedBooks?: SavedBooksUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    savedBooks?: SavedBooksUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    auth0Id?: string
    name?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SavedBooksCreateInput = {
    user: UserCreateNestedOneWithoutSavedBooksInput
    book: BooksCreateNestedOneWithoutSavedByInput
    createdAt?: Date | string
  }

  export type SavedBooksUncheckedCreateInput = {
    id?: number
    userId: number
    bookId: number
    createdAt?: Date | string
  }

  export type SavedBooksUpdateInput = {
    user?: UserUpdateOneRequiredWithoutSavedBooksNestedInput
    book?: BooksUpdateOneRequiredWithoutSavedByNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedBooksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedBooksCreateManyInput = {
    id?: number
    userId: number
    bookId: number
    createdAt?: Date | string
  }

  export type SavedBooksUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedBooksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type SavedBooksListRelationFilter = {
    every?: SavedBooksWhereInput
    some?: SavedBooksWhereInput
    none?: SavedBooksWhereInput
  }

  export type SavedBooksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BooksCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publisher?: SortOrder
    year?: SortOrder
    cover?: SortOrder
    category?: SortOrder
    summary?: SortOrder
  }

  export type BooksAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BooksMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publisher?: SortOrder
    year?: SortOrder
    cover?: SortOrder
    category?: SortOrder
    summary?: SortOrder
  }

  export type BooksMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publisher?: SortOrder
    year?: SortOrder
    cover?: SortOrder
    category?: SortOrder
    summary?: SortOrder
  }

  export type BooksSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    auth0Id?: SortOrder
    name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    auth0Id?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    auth0Id?: SortOrder
    name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BooksRelationFilter = {
    is?: BooksWhereInput
    isNot?: BooksWhereInput
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SavedBooksCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedBooksAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type SavedBooksMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedBooksMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedBooksSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type SavedBooksCreateNestedManyWithoutBookInput = {
    create?: XOR<Enumerable<SavedBooksCreateWithoutBookInput>, Enumerable<SavedBooksUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<SavedBooksCreateOrConnectWithoutBookInput>
    createMany?: SavedBooksCreateManyBookInputEnvelope
    connect?: Enumerable<SavedBooksWhereUniqueInput>
  }

  export type SavedBooksUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<Enumerable<SavedBooksCreateWithoutBookInput>, Enumerable<SavedBooksUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<SavedBooksCreateOrConnectWithoutBookInput>
    createMany?: SavedBooksCreateManyBookInputEnvelope
    connect?: Enumerable<SavedBooksWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SavedBooksUpdateManyWithoutBookNestedInput = {
    create?: XOR<Enumerable<SavedBooksCreateWithoutBookInput>, Enumerable<SavedBooksUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<SavedBooksCreateOrConnectWithoutBookInput>
    upsert?: Enumerable<SavedBooksUpsertWithWhereUniqueWithoutBookInput>
    createMany?: SavedBooksCreateManyBookInputEnvelope
    set?: Enumerable<SavedBooksWhereUniqueInput>
    disconnect?: Enumerable<SavedBooksWhereUniqueInput>
    delete?: Enumerable<SavedBooksWhereUniqueInput>
    connect?: Enumerable<SavedBooksWhereUniqueInput>
    update?: Enumerable<SavedBooksUpdateWithWhereUniqueWithoutBookInput>
    updateMany?: Enumerable<SavedBooksUpdateManyWithWhereWithoutBookInput>
    deleteMany?: Enumerable<SavedBooksScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SavedBooksUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<Enumerable<SavedBooksCreateWithoutBookInput>, Enumerable<SavedBooksUncheckedCreateWithoutBookInput>>
    connectOrCreate?: Enumerable<SavedBooksCreateOrConnectWithoutBookInput>
    upsert?: Enumerable<SavedBooksUpsertWithWhereUniqueWithoutBookInput>
    createMany?: SavedBooksCreateManyBookInputEnvelope
    set?: Enumerable<SavedBooksWhereUniqueInput>
    disconnect?: Enumerable<SavedBooksWhereUniqueInput>
    delete?: Enumerable<SavedBooksWhereUniqueInput>
    connect?: Enumerable<SavedBooksWhereUniqueInput>
    update?: Enumerable<SavedBooksUpdateWithWhereUniqueWithoutBookInput>
    updateMany?: Enumerable<SavedBooksUpdateManyWithWhereWithoutBookInput>
    deleteMany?: Enumerable<SavedBooksScalarWhereInput>
  }

  export type SavedBooksCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SavedBooksCreateWithoutUserInput>, Enumerable<SavedBooksUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SavedBooksCreateOrConnectWithoutUserInput>
    createMany?: SavedBooksCreateManyUserInputEnvelope
    connect?: Enumerable<SavedBooksWhereUniqueInput>
  }

  export type SavedBooksUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SavedBooksCreateWithoutUserInput>, Enumerable<SavedBooksUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SavedBooksCreateOrConnectWithoutUserInput>
    createMany?: SavedBooksCreateManyUserInputEnvelope
    connect?: Enumerable<SavedBooksWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SavedBooksUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SavedBooksCreateWithoutUserInput>, Enumerable<SavedBooksUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SavedBooksCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SavedBooksUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SavedBooksCreateManyUserInputEnvelope
    set?: Enumerable<SavedBooksWhereUniqueInput>
    disconnect?: Enumerable<SavedBooksWhereUniqueInput>
    delete?: Enumerable<SavedBooksWhereUniqueInput>
    connect?: Enumerable<SavedBooksWhereUniqueInput>
    update?: Enumerable<SavedBooksUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SavedBooksUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SavedBooksScalarWhereInput>
  }

  export type SavedBooksUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SavedBooksCreateWithoutUserInput>, Enumerable<SavedBooksUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SavedBooksCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SavedBooksUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SavedBooksCreateManyUserInputEnvelope
    set?: Enumerable<SavedBooksWhereUniqueInput>
    disconnect?: Enumerable<SavedBooksWhereUniqueInput>
    delete?: Enumerable<SavedBooksWhereUniqueInput>
    connect?: Enumerable<SavedBooksWhereUniqueInput>
    update?: Enumerable<SavedBooksUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SavedBooksUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SavedBooksScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutSavedBooksInput = {
    create?: XOR<UserCreateWithoutSavedBooksInput, UserUncheckedCreateWithoutSavedBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedBooksInput
    connect?: UserWhereUniqueInput
  }

  export type BooksCreateNestedOneWithoutSavedByInput = {
    create?: XOR<BooksCreateWithoutSavedByInput, BooksUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: BooksCreateOrConnectWithoutSavedByInput
    connect?: BooksWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedBooksNestedInput = {
    create?: XOR<UserCreateWithoutSavedBooksInput, UserUncheckedCreateWithoutSavedBooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedBooksInput
    upsert?: UserUpsertWithoutSavedBooksInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSavedBooksInput, UserUncheckedUpdateWithoutSavedBooksInput>
  }

  export type BooksUpdateOneRequiredWithoutSavedByNestedInput = {
    create?: XOR<BooksCreateWithoutSavedByInput, BooksUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: BooksCreateOrConnectWithoutSavedByInput
    upsert?: BooksUpsertWithoutSavedByInput
    connect?: BooksWhereUniqueInput
    update?: XOR<BooksUpdateWithoutSavedByInput, BooksUncheckedUpdateWithoutSavedByInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type SavedBooksCreateWithoutBookInput = {
    user: UserCreateNestedOneWithoutSavedBooksInput
    createdAt?: Date | string
  }

  export type SavedBooksUncheckedCreateWithoutBookInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type SavedBooksCreateOrConnectWithoutBookInput = {
    where: SavedBooksWhereUniqueInput
    create: XOR<SavedBooksCreateWithoutBookInput, SavedBooksUncheckedCreateWithoutBookInput>
  }

  export type SavedBooksCreateManyBookInputEnvelope = {
    data: Enumerable<SavedBooksCreateManyBookInput>
    skipDuplicates?: boolean
  }

  export type SavedBooksUpsertWithWhereUniqueWithoutBookInput = {
    where: SavedBooksWhereUniqueInput
    update: XOR<SavedBooksUpdateWithoutBookInput, SavedBooksUncheckedUpdateWithoutBookInput>
    create: XOR<SavedBooksCreateWithoutBookInput, SavedBooksUncheckedCreateWithoutBookInput>
  }

  export type SavedBooksUpdateWithWhereUniqueWithoutBookInput = {
    where: SavedBooksWhereUniqueInput
    data: XOR<SavedBooksUpdateWithoutBookInput, SavedBooksUncheckedUpdateWithoutBookInput>
  }

  export type SavedBooksUpdateManyWithWhereWithoutBookInput = {
    where: SavedBooksScalarWhereInput
    data: XOR<SavedBooksUpdateManyMutationInput, SavedBooksUncheckedUpdateManyWithoutSavedByInput>
  }

  export type SavedBooksScalarWhereInput = {
    AND?: Enumerable<SavedBooksScalarWhereInput>
    OR?: Enumerable<SavedBooksScalarWhereInput>
    NOT?: Enumerable<SavedBooksScalarWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    bookId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
  }

  export type SavedBooksCreateWithoutUserInput = {
    book: BooksCreateNestedOneWithoutSavedByInput
    createdAt?: Date | string
  }

  export type SavedBooksUncheckedCreateWithoutUserInput = {
    id?: number
    bookId: number
    createdAt?: Date | string
  }

  export type SavedBooksCreateOrConnectWithoutUserInput = {
    where: SavedBooksWhereUniqueInput
    create: XOR<SavedBooksCreateWithoutUserInput, SavedBooksUncheckedCreateWithoutUserInput>
  }

  export type SavedBooksCreateManyUserInputEnvelope = {
    data: Enumerable<SavedBooksCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SavedBooksUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedBooksWhereUniqueInput
    update: XOR<SavedBooksUpdateWithoutUserInput, SavedBooksUncheckedUpdateWithoutUserInput>
    create: XOR<SavedBooksCreateWithoutUserInput, SavedBooksUncheckedCreateWithoutUserInput>
  }

  export type SavedBooksUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedBooksWhereUniqueInput
    data: XOR<SavedBooksUpdateWithoutUserInput, SavedBooksUncheckedUpdateWithoutUserInput>
  }

  export type SavedBooksUpdateManyWithWhereWithoutUserInput = {
    where: SavedBooksScalarWhereInput
    data: XOR<SavedBooksUpdateManyMutationInput, SavedBooksUncheckedUpdateManyWithoutSavedBooksInput>
  }

  export type UserCreateWithoutSavedBooksInput = {
    email: string
    auth0Id?: string
    name?: string | null
  }

  export type UserUncheckedCreateWithoutSavedBooksInput = {
    id?: number
    email: string
    auth0Id?: string
    name?: string | null
  }

  export type UserCreateOrConnectWithoutSavedBooksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedBooksInput, UserUncheckedCreateWithoutSavedBooksInput>
  }

  export type BooksCreateWithoutSavedByInput = {
    title: string
    author: string
    publisher: string
    year: string
    cover: string
    category: string
    summary: string
  }

  export type BooksUncheckedCreateWithoutSavedByInput = {
    id?: number
    title: string
    author: string
    publisher: string
    year: string
    cover: string
    category: string
    summary: string
  }

  export type BooksCreateOrConnectWithoutSavedByInput = {
    where: BooksWhereUniqueInput
    create: XOR<BooksCreateWithoutSavedByInput, BooksUncheckedCreateWithoutSavedByInput>
  }

  export type UserUpsertWithoutSavedBooksInput = {
    update: XOR<UserUpdateWithoutSavedBooksInput, UserUncheckedUpdateWithoutSavedBooksInput>
    create: XOR<UserCreateWithoutSavedBooksInput, UserUncheckedCreateWithoutSavedBooksInput>
  }

  export type UserUpdateWithoutSavedBooksInput = {
    email?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutSavedBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BooksUpsertWithoutSavedByInput = {
    update: XOR<BooksUpdateWithoutSavedByInput, BooksUncheckedUpdateWithoutSavedByInput>
    create: XOR<BooksCreateWithoutSavedByInput, BooksUncheckedCreateWithoutSavedByInput>
  }

  export type BooksUpdateWithoutSavedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type BooksUncheckedUpdateWithoutSavedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    cover?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type SavedBooksCreateManyBookInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type SavedBooksUpdateWithoutBookInput = {
    user?: UserUpdateOneRequiredWithoutSavedBooksNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedBooksUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedBooksUncheckedUpdateManyWithoutSavedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedBooksCreateManyUserInput = {
    id?: number
    bookId: number
    createdAt?: Date | string
  }

  export type SavedBooksUpdateWithoutUserInput = {
    book?: BooksUpdateOneRequiredWithoutSavedByNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedBooksUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedBooksUncheckedUpdateManyWithoutSavedBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}