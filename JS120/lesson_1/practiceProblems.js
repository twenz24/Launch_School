function createBook(title, author, read = false) {
  let book = {
    title: title,
    author: author,
    read: read,

    getDescription() {
      return `${this.title} was written by ${this.author}. I ${this.read ? 'have' : 'haven\'t'} read it.`;
    },

    readBook() {
      this.read = true;
    },
  }
  return book
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris', false);
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse', true);

console.log(book2.read); // => false
console.log(book2.getDescription());
book2.readBook();
console.log(book2.getDescription());
