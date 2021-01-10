import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFan, faHandRock} from '@fortawesome/free-solid-svg-icons';
import {faHandScissors} from '@fortawesome/free-solid-svg-icons';
import {faHandPaper} from '@fortawesome/free-solid-svg-icons';
import {faHandLizard} from '@fortawesome/free-solid-svg-icons';
import {faHandSpock} from '@fortawesome/free-solid-svg-icons';
import {faRedoAlt} from '@fortawesome/free-solid-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import './icon.styles.scss';

const Icon = ({type,size,color, pointer, onClick}) => {

    const iconTypes = {
        rock: faHandRock,
        scissors: faHandScissors,
        paper: faHandPaper,
        lizard: faHandLizard,
        spock: faHandSpock,
        refresh: faRedoAlt,
        globe: faGlobe
    }

    return (
       
            <FontAwesomeIcon
                icon={iconTypes[type]}
                size={size}
                style={color && {color: color}}
                className={`icon ${pointer && 'pointer'}`}
                onClick={onClick} />
       
    )
}

export default Icon;