export function join(tokens: string | string[], glue?: string): string {
    if(Array.isArray(tokens)) {
      return tokens.join(glue)
    } else {
      return tokens 
    }
}