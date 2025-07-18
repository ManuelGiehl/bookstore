function renderBookCard(book, idx) {
    return `
    <div class="book-card">
        <div class="book-title">
        ${book.name}
        </div>
        
        <div class="book-image-row">
            <img class="book-image" src="img/book-4986.svg" alt="Buchcover" />
        </div>

        <div class="book-info-row">
            <div class="book-price">
            ${book.price.toFixed(2).replace('.', ',')} €
            </div>

            <div class="book-likes">
                <span class="like-count">${book.likes}</span>
                <button class="like-btn${book.liked ? ' liked' : ''}" onclick="toggleLike(${idx})">&#10084;</button>
            </div>
        </div>

        <div class="book-details">
            <div><b>Author</b> : ${book.author}</div>
            <div><b>Erscheinungsjahr</b> : ${book.publishedYear}</div>
            <div><b>Genre</b> : ${book.genre}</div>
        </div>

        <div class="book-comments-section">
            <div class="comments-title">Kommentare:</div>
            <div class="comments-list">
                ${book.comments.map(c => `<div class='comment'>
                    <span class='comment-user'>[${c.name}]</span> 
                    <span class='comment-text'>${c.comment}</span>
                    </div>`)
                    .join('')}
            </div>
            
            <form class="comment-form" onsubmit="addComment(event, ${idx})">
                <input type="text" class="comment-input" placeholder="Schreibe dein Kommentar ..." required />
                <button type="submit" class="comment-send-btn">&#10148;</button>
            </form>
        </div>
    </div>
    `;
}
