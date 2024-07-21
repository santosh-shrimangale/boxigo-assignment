import React from 'react'
import MoveCard from './MoveCard'

const Details = ({myMoves}) => {

  return (
    <div className='col-sm-12 col-md-12 col-lg-10'>
        <MoveCard myMoves={myMoves}/>
    </div>
  )
}

export default Details