export function makeImagePath(id: string, format?: string) {
  return `https://media.themoviedb.org/t/p/${
    format ? format : "original"
  }/${id}`;
}
