const apiKey = "bb0ce750"; // Replace with your actual OMDB API key

async function getMovie() {

    const movie = document.getElementById("movie").value.trim();

    if (movie === "") {
        alert("Please enter a movie name");
        return;
    }

    const url = `https://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "False") {
            document.getElementById("result").innerHTML =
                "<h2>❌ Movie Not Found</h2>";
            return;
        }

        document.getElementById("result").innerHTML = `

        <img src="${data.Poster}" alt="${data.Title}">

        <h2>${data.Title}</h2>

        <p><strong>⭐ IMDb:</strong> ${data.imdbRating}</p>

        <p><strong>📅 Released:</strong> ${data.Released}</p>

        <p><strong>🎭 Genre:</strong> ${data.Genre}</p>

        <p><strong>⏱ Runtime:</strong> ${data.Runtime}</p>

        <p><strong>🌍 Language:</strong> ${data.Language}</p>

        <p><strong>🌎 Country:</strong> ${data.Country}</p>

        <p><strong>📝 Plot:</strong> ${data.Plot}</p>

        `;

    } catch {
        document.getElementById("result").innerHTML =
            "<h2>Something went wrong.</h2>";
    }
}

document.getElementById("movie").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        getMovie();
    }
});
