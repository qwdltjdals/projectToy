import React, { useEffect, useRef, useState } from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';


function Note(props) {

    const textarea = useRef();
    const handleHeight = () => {
        textarea.current.style.height = 'auto';
        textarea.current.style.height = textarea.current.scrollHeight + 'px';
    }

    const [memo, setMemo] = useState({
        input: ""
    });

    const handleInputChange = (e) => {
        setMemo(memo => ({
            ...memo,
            [e.target.name]: e.target.value
        }))
    }

    const handleClick = () => {
        const useTrim = memo.input.trim("");
        if (!!useTrim) {
            alert("등록 완료")
            console.log("메모 : " + memo.input);
            setMemo({
                input: "" // 인풋값 초기화
            })
            return;
        }
        alert("내용을 입력해 주세요")
        setMemo({
            input: "" // 인풋값 초기화
        })
    }

    return (
        <MainContainer>
            <div className='container'>
                <h1>메모</h1>
                <div>
                    <textarea
                        type="text"
                        placeholder='내용을 입력하세요'
                        value={memo.input}
                        name='input'
                        onChange={handleInputChange}
                        ref={textarea}
                        onInput={handleHeight}
                    />
                </div>
                <button onClick={handleClick}>확인</button>
            </div>
        </MainContainer>
    );
}

export default Note;