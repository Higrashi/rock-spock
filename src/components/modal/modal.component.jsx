import React from 'react';
import Icon from '../icon/icon.component';
import Rule from '../rule/rule.component';
import './modal.styles.scss';

const Modal = ({modalState, setModalState}) => {

    const handleBtn = () => {
        setModalState(!modalState);
    }

    return (
        <div className={`modal ${modalState && 'modal-active'}`}>
            <div className={`rules-container ${modalState && 'rules-container-active'}`}>
                <button className='close-btn' onClick={handleBtn}>&#215;</button>

                <Rule type1='Scissors' action='cuts' type2='Paper'/>
                <Rule type1='Paper' action='covers' type2='Rock'/>
                <Rule type1='Rock' action='crushes' type2='Lizard'/>
                <Rule type1='Lizard' action='poisons' type2='Spock'/>
                <Rule type1='Spock' action='smaches' type2='Scissors'/>
                <Rule type1='Scissors' action='decapitates' type2='Lizard'/>
                <Rule type1='Lizard' action='eats' type2='Paper'/>
                <Rule type1='Paper' action='disproves' type2='Spock'/>
                <Rule type1='Spock' action='vaporises' type2='Rock'/>
                     
              <div className='divider'>And as alwais has:  </div>
              <Rule type1='Rock' action='crushes' type2='Scissors'/>
            </div>
        </div>
    )
}

export default Modal;