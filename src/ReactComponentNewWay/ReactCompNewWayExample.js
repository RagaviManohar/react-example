import React from 'react'

import ReactCompNewWay from './ReactCompNewWay'

export const ReactCompNewWayExample = () => (
  <ReactCompNewWay>
    <ReactCompNewWay.Header onCloseClick={() => { }} borderColor="green" >
      <ReactCompNewWay.Title title="TITLE" />
    </ReactCompNewWay.Header>

    <ReactCompNewWay.Body>
      <p>CONTENT GOES HERE</p>
      <p>any content</p>
    </ReactCompNewWay.Body>

    <ReactCompNewWay.Footer borderColor="green" label="TOTAL" value="50000" />
  </ReactCompNewWay>
)

export default ReactCompNewWayExample
