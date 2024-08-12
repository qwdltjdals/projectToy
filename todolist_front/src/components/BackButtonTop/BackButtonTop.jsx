/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import * as s from './style';

function BackButtonTop({ setShow }) { // setShow가 필요하니까 가져옴
    const navigate = useNavigate();

    const handleBackClick = () => {
        setShow(false); // 여기서 필요함
        setTimeout(() => navigate("/todo"), 400);
    }
    return (
        <div css={s.layout}>
                <button onClick={handleBackClick}>&lt; 목록</button>
        </div>
    );
}

export default BackButtonTop;