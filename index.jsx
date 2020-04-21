import React from 'react'
import ReactDom from 'react-dom'
import { hot } from 'react-hot-loader/root'
import './node_modules/reset-css/sass/_reset.scss'
// import MainSlide from './components/MainSlide'
import SideMenu from './components/SideMenu'

const Hot = hot(SideMenu)

ReactDom.render(<Hot />, document.querySelector('#root'))
