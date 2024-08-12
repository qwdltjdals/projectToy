/** @jsxImportSource @emotion/react */
import * as s from './style';
import { IoSearchSharp } from "react-icons/io5";

function Search(props) {
    return (
        <div css ={s.searchInputBox}>
            <IoSearchSharp />
            <input type="text" />
            <button>취소</button>
        </div>
    );
}

export default Search;