/*
NAME: GLORY CHINEMEREM OKAFOR
 TRACK: FRONTEND DEVELOPMENT
 DATE:16/10/2021
 DESIGN PATTERN: MODULE AND CONSTRUCTOR PATTERN
 */

 const assert = require('assert');

 // books object
 class Book {
     constructor(title, author, year, Pages){
         assert(typeof title === 'string', 'title must be a string');
         assert(typeof author === 'string', 'author must be a string');
         assert(typeof year === 'number', 'year must be a number');
         assert(typeof Pages === 'number', 'numberOfPages must be a number');
 
 
         this.id = Math.trunc(new Date().getFullYear() = Math.random());
         this.title = title;
         this.author = author;
         this.year = year;
         this.Pages = Pages;
         this.borrower = null;
 
     }
 
     getBorrower() {
         return this.borrower;
     }
 
     lend(borrower) {
         if (this.borrower === null){
             this.borrower = this.borrower;
             this.borrower.books.push(this);
             console.log(`${borrower.name} has borrowed ${this.title}`); 
         }else{
             console.log(`${this.title} is already borrowed`);
         }
     }
 
 
 }
 
 class Borrower {
     constructor(name) {
         assert(typeof name === 'string', 'name must be a string')
         this.name = name;
         this.books = [];
         this.id = Math.trunc(new Date().getFullYear() * Math.random());
     }
 
     getInstance() {
         return this;
     }
 
     findById(id) {
         return this.books.find(book => book.id === this.id);
     }
 
     getBooks() {
         return this.books;
     }
 
     returnBook(id) {
         const book = this.books.find(book => book.id === id);
         if (book) {
             book.borrower = null;
             this.books.splice(this.books.indexOf(book), 1);
             console.log(`${this.name} has returned ${book.title}`);
         } else {
             console.log(`${this.name} has not borrowed this book`);
         }
     }
 
     borrowBook(book) {
         if (book.borrower === null) {
             book.lend(this);
         } else {
             console.log(`${book.title} is already borrowed`);
         }
     }    
 }
 
 // Create library
 class Library {
     constructor() {
         this.books = [];
         this.borrowers = [];
     }
 
     static instance = null;
 
     static getInstance() {
         if (this.instance === null) {
             this.instance = new Library();
             return this.instance;
         }
         return this.instance;
     }
 
     get allBooks() {
         return this.books;
     }
 
     get bookCount() {
         return this.books.length;
     }
 
     get borrowedBookCount() {
         return this.books.filter(book => book.borrower !== null).length;
     }
 
     get availableBookCount() {
         return this.books.filter(book => book.borrower === null).length;
     }
 
     get allBorrowers() {
         return this.borrowers;
     }
 
     getAvailableBooks() {
         console.log(`Available Books:`);
         this.books.forEach(book => {
             if (book.borrower === null) {
                 console.log(`${book.title}. ID #: ${book.id}`);
             }
         });
     }
 
     getBorrowedBooks() {
         console.log(`Borrowed Books:`);
         this.books.forEach(book => {
             if (book.borrower !== null) {
                 console.log(`${book.title}. ID #: ${book.id}`);
             }
         });
     }
 
     add(book) {
         assert(book instanceof Book, `book must be an instance of Book`);
         this.books.push(book);
         return book.id;
     }
 
     remove(id) {
 
         //assert(typeof id === 'number', 'id must be a number');
         const book = this.books.find(book => book.id === id);
         if (book) {
             this.books.splice(this.books.indexOf(book), 1);
             console.log(`Book ${book.id} removed`);
         } else {
             console.log(`Book ${id} not found`);
         }
     }
 
     lend(id, borrower) {
 
         //assert(typeof id === 'number', 'id must be a number');
         assert(borrower instanceof Borrower, `borrower must be an instance of Borrower`);
         const book = this.books.find(book => book.id === id);
         if (book) {
             book.lend(borrower);
         } else {
             console.log(`Book ${id} not found`);
         }
     }
 
     retract(id, borrower) {
 
         //assert(typeof id === 'number', 'id must be a number');
         assert(borrower instanceof Borrower, `borrower must be an instance of Borrower`);
         const book = this.books.find(book => book.id === id);
         if (book) {
             book.borrower = null;
             borrower.returnBook(id);
         } else {
             console.log(`Book ${id} not found`);
         }
     }
 
     addBorrower(borrower) {
         assert(borrower instanceof Borrower, `borrower must be an instance of Borrower`);
         this.borrowers.push(borrower);
         return borrower.name;
     }
 
     removeBorrower(id) {
 
         //assert(typeof id === 'number', 'id must be a number');
         const borrower = this.borrowers.find(borrower => borrower.id === id);
         if (borrower) {
             this.borrowers.splice(this.borrowers.indexOf(borrower), 1);
             console.log(`Borrower ${borrower.name} removed`);
         } else {
             console.log(`Borrower ${id} not found`);
         }
     }
 
     printBooks() {
         console.log(`Books:`);
         this.books.forEach(book => console.log(`${book.title}. ID #: ${book.id}`));
     }
 
 
     findById(id) {
 
         //assert(typeof id === 'number', 'id must be a number');
         return this.books.find(book => book.id === id);
     }
 }
 
 const library = Library.getInstance();
 
 let book1 = library.add(new Book('The Lightening Theif', 'Rick Riodan', 2005, 377));
 let book2 = library.add(new Book('The Sea of Monster', 'Rick Riodan', 2006, 279));
 let book3 = library.add(new Book('The Titan Curse', 'Rick Riodan', 2007, 312));
 let book4 = library.add(new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 180));
 let book5 = library.add(new Book('The Blood of Olympus', 'Rick Riodan', 2014, 516));
 let book6 = library.add(new Book('Harry Potter and The Deadly Hallows', 'J.K rowling', 2007, 607));
 let book7 = library.add(new Book('Harry Potter The Philosoper Stone', 'J.K rowling', 1997, 223));
 let book8 = library.add(new Book('The Son of Neptune', 'Rick Riodan', 2011, 513));
 
 //imediately invoked function to start the program
 (function () {
     console.log("---> WELCOME TO LIBRARY NANIA");
 
     let username = prompt("Please enter your name: ");
     let user = library.addBorrower(new Borrower(username));
     let menu = ` MAIN MENU:
     1. VIEW ALL BOOKS
     2. DONATE A BOOK
     3. BORROW A BOOK
     4. RETURN A BOOK
     5. QUIT
     `;
     console.log(`---> Welcome ${user}, I'm HERMIONE GRANGER... Your Nania librarian`);
     console.log("---> Let's get started");
     console.log("---> ");
     console.log("============================================================================")
     console.log(menu);
     console.log("============================================================================")
     
     // start the program
     let userInput = prompt("---> What would you like to do? (enter a number) ");
     while (userInput !== '5') {
         if (userInput === '1') {
             console.log("---> VIEW ALL BOOKS");
             library.printBooks();
             console.log("============================================================================")
             console.log(menu);
             userInput = prompt("---> What would you like to do? (enter a number) ");
         } else if (userInput === '2') {
             console.log("---> DONATE A BOOK");
             let title = prompt("---> Enter the title of the book you want to donate: ");
             let author = prompt("---> Enter the author of the book you want to donate: ");
             let year = parseInt(prompt("---> Enter the year of publication of the book you want to donate: "));
             let pages = parseInt(prompt("---> Enter the number of pages of the book you want to donate: "));
             let book = library.add(new Book(title, author, year, pages));
             console.log(`---> Book added`);
             console.log(`---> Book donated: ${title}. Thanks for your donation!`);
             console.log("============================================================================")
             console.log(menu);
             userInput = prompt("---> What would you like to do? (enter a number) ");
         } else if (userInput === '3') {
             console.log("---> BORROW A BOOK");
             library.getAvailableBooks();
             console.log("---> What book would you like to borrow?");
             let bookId = parseInt(prompt("---> Enter the ID of the book you want to borrow: "));
             let bookToBorrow = library.findById(bookId);
             if (bookToBorrow) {
                 if (bookToBorrow.borrower) {
                     console.log(`---> Book ${bookId} is already borrowed`);
                 } else {
                     let borrowerName = prompt("---> Enter the name of the borrower: ");
                     let borrower = library.borrowers.find(borrower => borrower.name === borrowerName);
                     if (borrower) {
                         library.lend(bookId, borrower);
                         console.log(`---> Book ${bookId} borrowed by ${borrower.name}`);
                     } else {
                         console.log(`---> User: ${borrowerName} not found`);
                     }
                 }
             } else {
                 console.log(`---> Book ${bookId} not found`);
             }
             console.log("============================================================================")
             console.log(menu);
             userInput = prompt("---> What would you like to do? (enter a number) ");
         } else if (userInput === '4') {
             console.log("---> RETURN A BOOK");
             library.getBorrowedBooks();
             let bookId = parseInt(prompt("---> Enter the ID of the book you want to return: "));
             let borrower = library.borrowers.find(borrower => borrower.name);
             let bookToReturn = library.getBorrowedBooks().find(book => book.id === bookId);
             if (bookId === bookToReturn) {
                 library.retract(bookId, borrower);
                 console.log(`---> Book ${bookId} returned`);
             } else {
                 console.log(`---> book not found`);
             }
             console.log("============================================================================")
             console.log(menu);
             userInput = prompt("---> What would you like to do? (enter a number) ");
         } else {
             console.log("---> Invalid input");
             console.log("============================================================================")
             console.log(menu);
             userInput = prompt("---> What would you like to do? (enter a number) ");
         }
     }
     console.log("---> Thank you for coming to LIBRARY NANIA");
 })();
 
 