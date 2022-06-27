import { useState } from 'react';
import Modal from 'react-modal';
import '../styles/card.css';
import { customStyles } from '../utils/customModalStyle';
import { ModalContent } from './ModalContent';

export function Card({ user }) {
    const [modalVisible, setModalVisible] = useState(false)
    const { id, login, avatar_url } = user

    const changeModalVisibility = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <>
            <div className="card" onClick={changeModalVisibility}>
                <img src={avatar_url} alt="avatar"/> 
                <div className='details'>
                    <span><b>Id: </b>{id}</span>
                    <span><b>Login: </b>{login}</span>
                </div>
            </div>
            <Modal
                isOpen={modalVisible}
                onRequestClose={changeModalVisibility}
                style={customStyles}
                contentLabel="Usuário"
            >
                <ModalContent user={user} />
            </Modal>
        </>
    )
}