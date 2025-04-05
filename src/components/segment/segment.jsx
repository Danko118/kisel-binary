import React from 'react';
import Style from './segment.module.scss';
import segment from '/segment.svg'

const Segment = ({
    State,
    UpdateFunc
}) => {

    return (
        <div 
            className={`${Style.seg} ${State ? Style.active : ""}`}
            onClick={UpdateFunc}    
        >
            <img src={segment} alt="сегмент" />
        </div>
    );
};

export default Segment;