import React,{useState} from 'react'
import './Playlist.css'
import Track from '../Track/Track'

const Playlist = (props) => {
  const [playlistName, setPlaylistName] = useState("New Playlist");

  async function handleSave() {
    const trackIds = props.tracks.map(t => t.id)
    props.createSpotifyPlaylist(playlistName, trackIds)
}
  return (
    <div className="Playlist">
  <input onChange={e => setPlaylistName(e.target.value)} placeholder={playlistName}/>
  <div className="TrackList">
            {
                props.tracks.map(track => {
                    return(<Track 
                        key={track.id}
                        track={track}
                        trackActionCharacter="-"
                        handleTrackAction={props.removeTrackFromPlaylist} />)
                })
            }
            </div>
  <button className="Playlist-save"onClick={handleSave} >SAVE TO SPOTIFY</button>
</div>
  )
}

export default Playlist