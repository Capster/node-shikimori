/**
 * Represents an interface with an 'id' property of type T
 * This type is commonly used to represent Shikimori entities with unique identifiers
 * @template T The type of the 'id' property
 */
export type Id<T> = Record<'id', T>;
