import React from 'react'

function Content({items}) {
  /* return (
    <div>{items?.nama}</div>
  ) */
  return (
    <div>
        <h4>{items?.nama}</h4>
        <h4>{items?.alamat}</h4>
    </div>
  )
}

export default Content