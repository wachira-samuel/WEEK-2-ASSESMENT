let movies = [
    {
        id: 1,
        title: "The Lion King",
        description: "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery..",
        rating: 9,
        cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRu6K8z_pBKeeeG_ew9Xlk-JC0e4FEoE4Qx4nEpxP9dg88BuVze",
        starring: "Jeff Nathanson"
    },
    {
        id: 2,
        title: "Transporter",
        description: "Frank Martin is a former special forces operator who works as a mercenary driver in France, often getting embroiled in dangerous situations, including human trafficking plots and confrontations with various adversaries.",
        rating: 8.5,
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Transporterposter.jpg/220px-Transporterposter.jpg",
        starring: "Jason Statham"
    }
];

function saveMovies() {
    localStorage.setItem('movies', JSON.stringify(movies));
}

function loadMovies() {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
        movies = JSON.parse(storedMovies);
    }
    displayMovies();
}

function displayMovies() {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';
        movieDiv.innerHTML = `
            <img src="${movie.cover}" alt="${movie.title} Cover">
            <strong>${movie.title}</strong> - Rating: ${movie.rating}/10<br>
            <em>${movie.description}</em><br>
            <strong>Starring:</strong> ${movie.starring}<br>
            <button onclick="editMovie(${movie.id})">Edit</button>
            <button onclick="deleteMovie(${movie.id})">Delete</button>
`;
        movieList.appendChild(movieDiv);
    });
}

document.getElementById('movieForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const rating = parseFloat(document.getElementById('rating').value);
    const cover = document.getElementById('cover').value.trim();
    const starring = document.getElementById('starring').value.trim();
    let isValid = true;

    document.querySelectorAll('.error').forEach(span => span.textContent = '');

    if (!title) { document.getElementById('titleError').textContent = 'Title is required.'; isValid = false; }
    if (!description) { document.getElementById('descriptionError').textContent = 'Description is required.'; isValid = false; }
    if (isNaN(rating) || rating < 1 || rating > 10) { document.getElementById('ratingError').textContent = 'Rating must be between 1 and 10.'; isValid = false; }
    if (!cover) { document.getElementById('coverError').textContent = 'Cover image URL is required.'; isValid = false; }
    if (!starring) { document.getElementById('starringError').textContent = 'Starring is required.'; isValid = false; }

    if (isValid) {
        const id = movies.length ? movies[movies.length - 1].id + 1 : 1;
        movies.push({ id, title, description, rating, cover, starring });
        saveMovies();
        displayMovies();
        this.reset();
    }
});

function UpdateMovie(id) {
    const movie = movies.find(m => m.id === id);
    const newTitle = prompt("Edit Title:", movie.title);
    const newDescription = prompt("Edit Description:", movie.description);
    const newRating = prompt("Edit Rating (1-10):", movie.rating);
    const newCover = prompt("Edit Cover Image URL:", movie.cover);
    const newStarring = prompt("Edit Starring:", movie.starring);
    if (newTitle && newDescription && newRating && newCover && newStarring) {
        movie.title = newTitle.trim();
        movie.description = newDescription.trim();
        movie.rating = parseFloat(newRating);
        movie.cover = newCover.trim();
        movie.starring = newStarring.trim();
        saveMovies();
        displayMovies();
    }
}

function deleteMovie(id) {
    if (confirm("Are you sure you want to delete this movie?")) {
        movies = movies.filter(movie => movie.id !== id);
        saveMovies();
        displayMovies();
    }
}

loadMovies();