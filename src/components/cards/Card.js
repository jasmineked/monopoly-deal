import React from 'react'
import './Card.scss'

function Card ({
  title,
  value,
  onClick,
  action,
  description,
  setColor,
  completeSet = 'number',
  propertiesOwned,
  rent,
  isUtility = 'boolean'
}) {
  return (
    <div className="card" onClick={() => console.log('clicked!')}>
      <h4 style={{ backgroundColor: setColor }}>
        {title}
      </h4>
      <p className="card-value">{value}</p>
    </div>
  )
}

export default Card
