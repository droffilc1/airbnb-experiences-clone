import React from 'react'

function Card(props) {
  return (
    <div className='card'>
      <img src={`assets/${props.img}`} alt='' className='card--image'/>
      <div className='card--stats'>
        <img src='assets/star.png' alt='' className='card--star'/>
        <span className='gray'>{props.rating}</span>
        <span className='gray'>({props.reviewCount}) • </span>
        <span className='gray'>{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p><span className='bold'>From ${props.price}</span> / person</p>
    </div>
  )
}

export default Card