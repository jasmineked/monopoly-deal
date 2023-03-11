// import { TRUE } from 'node-sass'
import React from 'react'
import Card from '../../Card'

const Boardwalk = () => {
  const rentValues = ['3M', '8M']
  return (
    <Card
      title="Boardwalk"
      value="$3M"
      setColor="blue"
      completeSet= {2}
      propertiesOwned=""
      rent={rentValues}
      isUtility={false}
    />
  )
}
export default Boardwalk
