export class PostMeta {
  constructor(releaseDate, title, tags, id) {
    this.releaseDate = new Date(releaseDate);
    this.title = title;
    this.tags = tags;
    this.id = id;
  }
}