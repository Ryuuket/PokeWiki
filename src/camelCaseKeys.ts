/*type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}` ?
  `${T}${Capitalize<SnakeToCamelCase<U>>}` : S

type KebabToCamelCase<S extends string> = S extends `${infer T}-${infer U}` ?
  `${T}${Capitalize<KebabToCamelCase<U>>}` : S

export function snakeToCamel<T extends string>(term: T): SnakeToCamelCase<T> {
  return (
    term.length === 1
      ? term.toLowerCase()
      : term
          .replace(/^([A-Z])/, (m) => m[0].toLowerCase())
          .replace(/[_]([a-z0-9])/g, (m) => m[1].toUpperCase())
  ) as SnakeToCamelCase<T>;
}

export function KebabToCamel<T extends string>(term: T): KebabToCamelCase<T> {
  return (
    term.length === 1
      ? term.toLowerCase()
      : term
          .replace(/^([A-Z])/, (m) => m[0].toLowerCase())
          .replace(/[-]([a-z0-9])/g, (m) => m[1].toUpperCase())
  ) as KebabToCamelCase<T>;
}

export function objectToCamel<T extends object>(obj: T): ObjectToCamel<T> {
  return convertObject(obj, toCamel);
}

export function objectToCamelCase<T> (json: T): T {
  for(const key in json) {
    if(key.indexOf('_') > -1){
      json.key = SnakeToCamelCase<key>;
    }
  }
}*/