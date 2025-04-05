import React from 'react';
import Style from './display.module.scss'
import Segment from '../segment/segment';

const Display = ({
    States,
    setStates
}) => {

    const toggleActiveState = (id) => {
        setStates(prevStates => 
          prevStates.map(state => 
            state.id === id ? { ...state, active: !state.active } : state
          )
        );
      };
    return (
        <div className={Style.disp}>
            {States.map((segment) => (
                <Segment
                    key={segment.id}
                    State={segment.active}
                    UpdateFunc={() => toggleActiveState(segment.id)}
                />
            ))}
        </div>
    );
};

export default Display;