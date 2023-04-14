function displayMusic() {
  const musicContainer = document.getElementById('music-container');
  musicContainer.innerHTML = '';

  for (const song of musicCollection) {
    const songCard = document.createElement('div');
    songCard.className = 'song-card';

    const songCover = document.createElement('img');
    songCover.src = song.coverUrl;
    songCover.className = 'song-cover';
    songCard.appendChild(songCover);

    const songTitle = document.createElement('h3');
    songTitle.textContent = song.title;
    songTitle.className = 'song-title';
    songCard.appendChild(songTitle);

    const songArtist = document.createElement('p');
    songArtist.textContent = song.artist;
    songArtist.className = 'song-artist';
    songCard.appendChild(songArtist);

    const songReleaseYear = document.createElement('p');
    songReleaseYear.textContent = song.releaseYear;
    songReleaseYear.className = 'song-release-year';
    songCard.appendChild(songReleaseYear);

    musicContainer.appendChild(songCard);
  }
}



displayMusic();
$(document).ready(function () {
  $('.song-card').tilt({
    maxTilt: 10,
    scale: 1.05,
  });
});


