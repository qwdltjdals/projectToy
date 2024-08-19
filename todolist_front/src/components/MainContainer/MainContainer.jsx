/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useRef, useState } from 'react';
import * as s from './style';
import ReactModal from 'react-modal';
import RegisterModal from '../RegisterModal/RegisterModal';

function MainContainer({ children }) {
    const [modalElement, setModalElement] = useState(<></>); // 다른것들이 먼저 실행되게 냅둠?
    const containerRef = useRef();

    useEffect(() => {
        if (!!containerRef) {
            setModalElement(<RegisterModal containerRef={containerRef} />) // 컨테이너가 랜더링 되면 그때 Modal을 랜터링 해라
        }
    }, [containerRef])

    return (
        <div css={s.container} ref={containerRef} >
            {modalElement} {/* 어디서나 todo추가할 수 있게 함*/}
            {children}
        </div>
    );
}
export default MainContainer; 