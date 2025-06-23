export function intersect<T extends Object, U extends Object>(first: T, second: U): Pick<T, Extract<keyof T, keyof U>> {
  const result = {} as Pick<T, Extract<keyof T, keyof U>>;
  
  for(const key in first) {
    if(key in second) {
      (result as any)[key] = (first as any)[key];
    }
  }
    return result;
}
​