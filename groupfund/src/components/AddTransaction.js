import React from 'react'

function AddTransaction({ text, closePopup }) {
  return (
    <div>
     <div>
      <h1>{text}</h1>
      <button onClick={closePopup}>Close X</button>
     </div>
    </div>
  )
}

export default AddTransaction