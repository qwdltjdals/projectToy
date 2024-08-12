/** @jsxImportSource @emotion/react */
import ReactSelect from 'react-select';
import * as s from './style';
import { useEffect, useState } from 'react';
import { addTodoApi } from '../../apis/todoApis/addTodoApi';
import {useSetRecoilState } from 'recoil';
import { refreshTodolistAtom } from '../../atoms/todolistAtoms';

function RegisterTodo({ closeModal }) {
    const importantOptions = [
        { label: "중요함", value: 1, },
        { label: "중요하지 않음", value: 2, }
    ];

    const busyOptions = [
        { label: "급함", value: 1, },
        { label: "급하지 않음", value: 2, }
    ];

    const [todo, setTodo] = useState({
        title: "",
        content: "",
        dateTime: "",
        important: 1,
        busy: 1,
    });

    const setRefresh = useSetRecoilState(refreshTodolistAtom);

    useEffect(() => {
        const parse = (value) => (value < 10 ? "0" : "") + value;

        const now = new Date();
        const year = now.getFullYear();
        const month = parse(now.getMonth() + 1); // 0부터 시작함
        const day = parse(now.getDate()); // 월~일
        const hours = parse(now.getHours());
        const minutes = parse(now.getMinutes());

        setTodo(todo => ({
            ...todo,
            dateTime: `${year}-${month}-${day}T${hours}:${minutes}`
        }))
    }, []);

    const handleOnChange = (e) => {
        setTodo(todo => ({
            ...todo,
            [e.target.name]: e.target.value
        }))
    }

    const handleImportantSelectOnchange = (option) => {
        handleOnChange({ target: { name: "important", value: option.value } });
        // setTodo(todo => ({ 위에꺼랑 같은 코드
        //     ...todo,
        //     important : e.option.value
        // }))
    }

    const handleBusySelectOnchange = (option) => {
        handleOnChange({ target: { name: "busy", value: option.value } });
    }

    const handleSubmitClick = () => {
        console.log(todo);
        addTodoApi(todo);
        setRefresh(true);
        closeModal();
    }

    return (
        <div css={s.layout}>
            <header>
                <button onClick={closeModal}>취소</button>
                <h2>새로운 할 일</h2>
                <button onClick={handleSubmitClick} disabled={!todo.title.trim() || !todo.content.trim()}>추가</button>
            </header>
            <main>
                <div css={s.todoDataBox}>
                    <input type="text" name="title" placeholder='제목' value={todo.title} onChange={handleOnChange} />
                    <textarea name="content" placeholder='메모' value={todo.content} onChange={handleOnChange}></textarea>
                </div>
                <div css={s.dateSelect}>
                    <input type="datetime-local" value={todo.dateTime} name="dateTime" onChange={handleOnChange} />
                </div>
                <div css={s.importantSelect}>
                    <ReactSelect
                        onChange={handleImportantSelectOnchange}
                        styles={{
                            control: (style) => ({
                                ...style,
                                border: "none",
                                outline: "none",
                                boxShadow: "none",
                            }), // 실행되면 기존의 스타일 가져오고 보더를 none으로 바꿈
                        }}
                        options={importantOptions}
                        value={importantOptions // 객체 형태로 들어가야함
                            .filter(option => option.value === todo.important)[0]} // 0번을 가져옴 = 객체
                    />

                    <div css={s.line}></div>

                    <ReactSelect
                        onChange={handleBusySelectOnchange}
                        styles={{
                            control: (style) => ({
                                ...style,
                                border: "none",
                                outline: "none",
                                boxShadow: "none"
                            }), // 실행되면 기존의 스타일 가져오고 보더를 none으로 바꿈
                        }}
                        options={busyOptions}
                        value={busyOptions
                            .filter(option => option.value === todo.busy)[0]}
                    />
                </div>
            </main>
        </div>
    );
}

export default RegisterTodo;