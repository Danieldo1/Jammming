import React,{useState, useEffect} from 'react'
import Spotify from '../util/Spotify'
import './App.css'
import SearchBar from '../Components/SearchBar/SearchBar'
import SearchResults from '../Components/SearchResults/SearchResults'
import Playlist from '../Components/Playlist/Playlist'



const App = () => {
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchedTracks, setSearchedTracks] = useState([]);
  const [spotifyToken, setSpotifyToken] = useState(null);

  useEffect(() => {
    const spotifyTokenFromUrlFragment = window.location.hash.split('&')[0].substr(14);
    setSpotifyToken(spotifyTokenFromUrlFragment);
  }, [])


  async function createSpotifyPlaylist(name, trackIds) {
    await Spotify.createPlaylist(name, trackIds, spotifyToken);
    setPlaylistTracks([]);
  }

function addTrackToPlaylist(track) {
  setPlaylistTracks(oldPlaylistTracks => {
    if (oldPlaylistTracks.includes(track)) {
      return oldPlaylistTracks;
    }
    else {
      return [...oldPlaylistTracks, track];
    }
  });
}

  function removeTrackFromPlaylist(track) {

    setPlaylistTracks(oldPlaylistTracks => oldPlaylistTracks.filter((t => track !== t)));
  }
  async function searchSpotify(searchTerms) {
    const results = await Spotify.search(searchTerms, spotifyToken);
    setSearchedTracks(results);
  }
  
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar searchSpotify={searchSpotify} />
        <div className="App-playlist">
          <SearchResults 
          tracks={searchedTracks} 
          addTrackToPlaylist={addTrackToPlaylist} 
          />
          <Playlist 
          createSpotifyPlaylist={createSpotifyPlaylist}
          removeTrackFromPlaylist={removeTrackFromPlaylist} 
          tracks={playlistTracks}
          />
        </div>
      </div>
    </div>
    )
}



export default App;
