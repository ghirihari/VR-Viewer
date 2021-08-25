import React from 'react'
import Navigator from './Navigator'
import {useState} from 'react'
import './TouchControls'
// Images
import master from './assets/images/master_bedroom.jpg'
import hari from './assets/images/hari_room.jpg'
import spv from './assets/images/spv_room.jpg'


const VRScene = () => {
    const data = [
        {name:"Master Bedroom", url:master},
        {name:"Vardhini Room", url:spv},
        {name:"Hari Room", url:hari},
      ]
    
    const [Room, setRoom] = useState(0)

    const navigate = (type) => {
    if(type==="next"){
        setRoom(Room=>(Room+1)%data.length)
    }else if(type==="back"){
        if(Room===0)setRoom(data.length)
        setRoom(Room=>(Room-1))
    }
    }
    
    return (
        <div className="App">
            <a-scene>
            <a-assets>
                {data.map(item=>{
                return <img key={item.name} id={item.name} src={item.url} alt={item.name}/>
                })}
            </a-assets>
            <a-sky id="sky" cursor="rayOrigin: mouse; fuse: false;" src= {'#'+data[Room].name} /> 
            <a-camera id="cam1" look-controls="reverseMouseDrag: true"  cursor="rayOrigin: mouse; fuse: false;"></a-camera> 
            </a-scene>
            <div className="day-container">
            <Navigator room={data[Room]} navigate={navigate} />
            </div>
        </div>
    )
}

export default VRScene