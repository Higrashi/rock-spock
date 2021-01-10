import React from 'react';
import Icon from '../icon/icon.component';

import './option.styles.scss';

const Option = ({type, onClick, winner, size, border}) => {

  

    return (
        <div className={`option ${winner ? 'delete': null} ${border && border} `} id={type} onClick={onClick}>
         
           <Icon type={type} size={size}/>
        </div>
    )
}

export default Option;