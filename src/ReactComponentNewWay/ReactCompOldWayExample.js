import React from 'react'

import ReactCompOldWay from './ReactCompOldWay'

export const ReactCompOldWayExample = () => (
  <ReactCompOldWay
    headerDetails={{
      title: 'TITLE',
      textColor: 'green',
      borderColor: 'green',
      onCloseClick: () => {},
    }}
    footerDetails={{
      borderColor: 'red',
      label: 'TOTAL',
      value: '10000',
    }}
  >
    <div>
      <p>CONTENT GOES HERE</p>
      <p>any content</p>
    </div>
  </ReactCompOldWay>
)

export default ReactCompOldWayExample
