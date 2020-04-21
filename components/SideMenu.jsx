import React, { useState } from 'react'
import './SideMenu.scss'

function SideMenu() {
  const [open, setOpen] = useState(false)

  const onToggle = () => {
    setOpen(!open)
  }
  return (
    <>
      <div className={open ? 'nav on' : 'nav'}>
        <a
          href="#"
          className={open ? 'menu on' : 'menu'}
          onClick={onToggle}
          open={open}
        >
          <i>메뉴</i>
          <span></span>
          <span></span>
          <span></span>
        </a>
        <nav>
          <ul>
            <li>
              <a href="#">메뉴1</a>
            </li>
            <li>
              <a href="#">메뉴2</a>
            </li>
            <li>
              <a href="#">메뉴3</a>
            </li>
            <li>
              <a href="#">메뉴4</a>
            </li>
            <li>
              <a href="#">메뉴5</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default SideMenu
