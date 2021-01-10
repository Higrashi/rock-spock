import React from 'react';
import Icon from '../icon/icon.component';
import './rule.styles.scss';

const Rule = ({type1,type2,action}) => {

    return (
        <div className='rule'>
        <div className='inner-rule'> {type1} <Icon type={type1.toLowerCase()} size='1x' color='black'/> </div>
         {action} <div className='inner-rule'> {type2} <Icon type={type2.toLowerCase()} size='1x' color='black'/></div>
         </div>
    )
}

export default Rule;