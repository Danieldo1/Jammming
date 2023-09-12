import React from 'react'
import './Track.css'

const Track = (props) => {

  const renderAction =(props) => {
    if(props.isRemoval === true){
      return (
        <button className='Track-action' >-</button>
      )
    } else {
      return(
        <button className='Track-action' >+</button>
      )
    }
    
  
  }
  return (
    <div className="Track">
  <div className="Track-information">
    {/* <h3><!-- track name will go here --></h3> */}
    {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
  </div>
   <button className="Track-action" onClick={renderAction}></button> 
</div>
  )
}

export default Track