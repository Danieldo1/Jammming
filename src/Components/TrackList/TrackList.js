import React from 'react'
import './TrackList.css'
import Track from '../Track/Track'

const TrackList = (props) => {


  return (
    <div className="TrackList">
{props.tracks.map((track)=> (

  <div className='TrackList'>{track.id}{track.name}{track.artist}{track.album}</div>
))}

</div>
  )
}

export default TrackList