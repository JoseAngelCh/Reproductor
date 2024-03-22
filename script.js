const trackList = document.getElementById(`track-list`)

axios.get(`https://leonardoapi.onrender.com/songs`)
    .then((res) => {

        res.data.songs.map( (song) => {

            const div = document.createElement(`div`)

            div.classList.add(`containe__box__listm`)

            div.innerHTML = `
            <div class="title__artist">
            <div class="img_album">
            <img class="album__list" src="${song.path.front}" alt="">
            <p>${song.title}</p>
            </div>
            <p class="text_album">${song.album}</p>
            <p>${song.duration}</p>
            </div>

            `

            trackList.appendChild(div)
    } )
})

