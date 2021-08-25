import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Navigator = (props) => {
    const today = (new Date().getDay())-1;

    // const navigate = (direction) => {
    //     if(direction==='backward'){
    //         props.setDay(day=>{
    //             if(day===0)return 6
    //             else return (day-1)%7
    //         })
    //     }
    //     else{
    //         props.setDay(day=>(day+1)%7)
    //     }
    // }
    return(
        <>
            <div className="next-buttons-container">
                <IconButton size="small" className="next-buttons" onClick={()=>props.navigate('back')}>
                    <ChevronLeftIcon className="icon"/>
                </IconButton>
            </div>
            <div className="day-label">
                <label>{props.room.name}</label>
            </div>
            <div className="next-buttons-container">
                <IconButton size="small" className="next-buttons" onClick={()=>props.navigate('next')}>
                    <ChevronRightIcon className="icon"/>
                </IconButton>
            </div>
        </>
    )
}

export default Navigator
