import React, { useState } from 'react'
import './Gallery.scss'

function Gallery() {
  const [open, setOpen] = useState(false)

  const onToggle = () => {
    setOpen(!open)
  }
  return (
    <div className={open ? 'gallery on' : 'gallery'}>
      '
      <a href="">
        <img src="http://placeimg.com/470/495/any" alt="이미지" />
      </a>
      <button onClick={onToggle} open={open}>
        <span className="hide">더보기</span>
      </button>
      <div>
        <strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </strong>
        Necessitatibus eius eum tempore distinctio, excepturi labore id
        perferendis odit iste, tempora ex dignissimos explicabo harum quasi
        placeat ipsa sit blanditiis maxime.
      </div>
    </div>
  )
}

export default Gallery
