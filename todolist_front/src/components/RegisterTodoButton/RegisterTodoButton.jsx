/** @jsxImportSource @emotion/react */
import { useSetRecoilState } from 'recoil';
import * as s from './style';
import { FaCirclePlus } from "react-icons/fa6";
import { RegisterModalAtom } from '../../atoms/ModalAtoms';

function RegisterTodoButton(props) {
    const setOpen = useSetRecoilState(RegisterModalAtom);

    const handleModalOpenClick = () => {
        setOpen(true);
    }
    return (
        <button css={s.layout} onClick={handleModalOpenClick}>
            <FaCirclePlus />
            <span>새로운 할 일</span> 
        </button>
    );
}
 // span = 인라인 중에 div처럼 아무 솏성이 없는 것
export default RegisterTodoButton;