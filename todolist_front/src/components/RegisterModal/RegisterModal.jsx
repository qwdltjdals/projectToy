/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useRecoilState } from 'recoil';
import ReactModal from 'react-modal';
import { RegisterModalAtom } from '../../atoms/ModalAtoms';
import { useState } from 'react';
import RegisterTodo from '../RegisterTodo/RegisterTodo';
ReactModal.setAppElement("#root");


function RegisterModal({ containerRef }) {

    const [isOpen, setOpen] = useRecoilState(RegisterModalAtom);
    const [animation, setAnimation] = useState("registerModalContentOpen");

    const closeModal = () => {
        setAnimation("registerModalContentClose");
        setTimeout(() => {
            setAnimation("registerModalContentOpen");
            setOpen(false);
        }, 400);
    }
    
    return (
        <ReactModal
            style={{
                overlay: {
                    position: 'absolute', // 메인 컨테이너의 포지션을 렐러티브로 잡아줘서 안으로 들어감
                    backgroundColor : 'transparent',
                },
                content: {
                    inset : 'auto 0 0', // 안으로 여백을 집어넣기
                    boxSizing : 'border-box',
                    borderRadius : '10px',
                    width : '100%',
                    height : '80%',
                    animation : `${animation} 0.5s 1`,
                }
            }}
            isOpen={isOpen}
            onRequestClose={closeModal}
            ariaHideApp={false}
            parentSelector={() => containerRef.current} // current : html 요소 - 부모선택
        >
            <RegisterTodo closeModal={closeModal}/>
        </ReactModal>
    );
}
 //             <RegisterTodo closeModal={closeModal}/> 얘를 넣어줘야 다른데서 받을 수 있음
export default RegisterModal;