const booksContainer = document.getElementById('books');

function renderBooks() {
    booksContainer.innerHTML = '';
    for (let i = 0; i < books.length; i++) {
        booksContainer.innerHTML += renderBookCard(books[i], i);
    }
}

function toggleLike(index) {
    books[index].liked = !books[index].liked;
    if (books[index].liked) {
        books[index].likes++;
    } else {
        books[index].likes--;
    }
    saveLikesToLocalStorage();
    renderBooks();
}

function addComment(event, index) {
    event.preventDefault();
    const input = event.target.querySelector('.comment-input');
    const text = input.value.trim();
    if (text.length > 0) {
        books[index].comments.unshift({ name: 'Du', comment: text });
        saveCommentsToLocalStorage();
        renderBooks();
    }
}

function saveCommentsToLocalStorage() {
    const commentsArr = books.map(book => book.comments);
    localStorage.setItem('bookComments', JSON.stringify(commentsArr));
}

function loadCommentsFromLocalStorage() {
    const saved = localStorage.getItem('bookComments');
    if (saved) {
        const commentsArr = JSON.parse(saved);
        for (let i = 0; i < books.length; i++) {
            if (commentsArr[i]) {
                books[i].comments = commentsArr[i];
            }
        }
    }
}

function saveLikesToLocalStorage() {
    const likesArr = books.map(book => ({
        likes: book.likes,
        liked: book.liked
    }));
    localStorage.setItem('bookLikes', JSON.stringify(likesArr));
}

function loadLikesFromLocalStorage() {
    const saved = localStorage.getItem('bookLikes');
    if (saved) {
        const likesArr = JSON.parse(saved);
        for (let i = 0; i < books.length; i++) {
            if (likesArr[i]) {
                books[i].likes = likesArr[i].likes;
                books[i].liked = likesArr[i].liked;
            }
        }
    }
}

loadCommentsFromLocalStorage();
loadLikesFromLocalStorage();
renderBooks();
