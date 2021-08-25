import React from 'react'

// Components
import VRScene from './VRScene'

const Menu =(props) => {
    switch(props.menu){
      case '360 Degree':
        return <VRScene/>
      default:
        return <VRScene/>
    }
}

export default Menu
