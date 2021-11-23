const message = document.querySelector("#message")

const addMovie = (event) => {
    event.preventDefault()
    const inputField = document.querySelector("input")
    const movie = document.createElement("li")
    const movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)

    const unorderedList= document.querySelector("ul")
    unorderedList.appendChild(movie)
}

const formSelect = document.querySelector("form")

formSelect.addEventListener("submit", addMovie)

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = "Movie obliterated"
}

const crossOffMovie = (e) => {
    e.target.classList.toggle("checked")
    if(e.target.classList.contains("checked")){
        message.textContent = "Movie watched!"
    }else{
        message.textContent = "Movie returned"
    }
}

