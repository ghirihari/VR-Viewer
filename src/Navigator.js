import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Navigator = (props) => {
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
