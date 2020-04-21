import React from 'react'
import Swiper from 'swiper'
import './MainSlide.scss'
import './Swiper.scss'

function MainSlide() {
  const mySwiper = new Swiper('.swiper-container', {
    effect: 'fade',
    loop: true,
  })

  return (
    <>
      <div className="swiper-container slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide bg1">
            <span>Time to sleep</span>
            <p>Something !!</p>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              <br />
              Doloremque dolorum voluptatum porro consequuntur quo? <br />
              Blanditiis cum consectetur non similique maxime!
            </div>
          </div>
          <div className="swiper-slide bg2">
            <span>Time to sleep</span>
            <p>Something happens!!</p>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque dolorum voluptatum porro consequuntur quo? Blanditiis
              cum consectetur non similique maxime!
            </div>
          </div>
          <div className="swiper-slide bg3">
            <span>Time to sleep</span>
            <p>Something happens!!</p>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque dolorum voluptatum porro consequuntur quo? Blanditiis
              cum consectetur non similique maxime!
            </div>
          </div>
          <div className="swiper-slide bg4">
            <span>Time to sleep</span>
            <p>Something happens!!</p>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque dolorum voluptatum porro consequuntur quo? Blanditiis
              cum consectetur non similique maxime!
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainSlide
