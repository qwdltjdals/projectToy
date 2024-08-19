/** @jsxImportSource @emotion/react */
import { useRecoilState, useSetRecoilState } from "recoil";
import { changeCheckTodoStatus } from "../../apis/todoApis/modifyTodoApi";
import * as s from "./style";
import { refreshTodolistAtom } from "../../atoms/todolistAtoms";
import { modifyTodoAtom, selectedCalendatTodoAtom } from "../../atoms/calendarAtoms";
import { useEffect, useState } from "react";
import ReactSelect from "react-select";

function TodoBox({ todo }) { // async await = 비동기인 promise를 순서대로 동작하게 해줌
    const importantOptions = [
        { label: "중요함", value: 1, },
        { label: "중요하지 않음", value: 2, }
    ];

    const busyOptions = [
        { label: "급함", value: 1, },
        { label: "급하지 않음", value: 2, }
    ];

    const [selectedTodo, setSelectedTodo] = useRecoilState(selectedCalendatTodoAtom); // 이 안에 어떠한 Id가 들어가 있으면 수정모드
    const setRefresh = useSetRecoilState(refreshTodolistAtom);
    const [modifyTodo, setModifyTodo] = useRecoilState(modifyTodoAtom);

    useEffect(() => {

        if(selectedTodo === todo.todoId) { // 선택한거랑 아이디랑 맞는지 확인
            setModifyTodo({
                ...todo,  // 맞으면 리스트 그거 데려옴
                todoDateTime : todo.todoDateTime.replaceAll(" ", "T"), // 날짜 가져오기 위해서
            });
        } 
    }, [selectedTodo]); // 수정을 취소하면 수정본의 상태를 원본으로 바꿔야함

    const handleCheckBoxOnChange = async (e) => { // change되면 백엔드에서 체크박스 속성 바꿔줘야함
        await changeCheckTodoStatus(e.target.value);
        setRefresh(true);
    }

    const handleSelectTodoClick = (todoId) => { // todoId 받음
        setSelectedTodo(todoId); // todoId 넘겨줌 - atom
    }

    const handleModifyChange = (e) => {
        setModifyTodo(modifyTodo => ({
            ...modifyTodo,
            [e.target.name]: e.target.value
        }));
    }



    const handleImportantSelectOnchange = (option) => { // reactSelect는 이벤트가 들어오는게 아니라 key value로 들어옴
        // handleOnChange({ target: { name: "important", value: option.value } });
        setModifyTodo(modifyTodo => ({ // 위에꺼랑 같은 코드
            ...modifyTodo,
            important: option.value
        }))
    }

    const handleBusySelectOnchange = (option) => {
        setModifyTodo(modifyTodo => ({
            ...modifyTodo,
            busy: option.value
        }))
    }

    return <div css={s.todoBox}>
        <div css={s.todoTitleBox}>
            <div css={s.todoCheckBox}>
                <input type="checkbox"
                    id={todo.todoId}
                    checked={todo.status === 2}
                    onChange={handleCheckBoxOnChange}
                    value={todo.todoId}
                />
                <label htmlFor={todo.todoId}></label>
            </div>
            <div css={s.todoTitleAndTime}>
                {
                    selectedTodo === todo.todoId // 아이디가 수정할 id면 정보창이 수정창으로 바뀜
                        ? <input type="text" name="title" onChange={handleModifyChange} value={modifyTodo.title} />
                        : <h2 onClick={() => handleSelectTodoClick(todo.todoId)}>{todo.title}</h2> // () => handleSelectTodoClick(todo.todoId) 함수호출 / todo.todoId를 줌
                }
                <span>{todo.todoDateTime.slice(11)}</span>
            </div>
        </div>
        <div css={s.todoSubBox}>
            {
                selectedTodo === todo.todoId && // jsx에서 null은 표기가 안되는 특성을 활용
                <>
                    <div css={s.contentBox}>
                        <h3>메모</h3>
                        <textarea name="content" onChange={handleModifyChange} value={modifyTodo.content} ></textarea>
                    </div>
                    <div>
                        <ReactSelect
                            onChange={handleImportantSelectOnchange}
                            styles={{
                                control: (style) => ({
                                    ...style,
                                    marginBottom: "5px",
                                    border: "none",
                                    outline: "none",
                                    boxShadow: "none",
                                    backgroundColor: "#f5f5f5",
                                    cursor: "pointer",
                                }), // 실행되면 기존의 스타일 가져오고 보더를 none으로 바꿈
                                menu: (style) => ({
                                    ...style,
                                    backgroundColor: "#f5f5f5",
                                }),
                                option: (style) => ({
                                    ...style,
                                    cursor: "pointer",
                                }),
                            }}
                            options={importantOptions}
                            value={importantOptions // 객체 형태로 들어가야함
                                .filter(option => option.value === modifyTodo.important)[0]} // 0번을 가져옴 = 객체
                        />

                        <ReactSelect
                            onChange={handleBusySelectOnchange}
                            styles={{
                                control: (style) => ({
                                    ...style,
                                    border: "none",
                                    outline: "none",
                                    boxShadow: "none",
                                    backgroundColor: "#f5f5f5"
                                }), // 실행되면 기존의 스타일 가져오고 보더를 none으로 바꿈
                            }}
                            options={busyOptions}
                            value={busyOptions
                                .filter(option => option.value === modifyTodo.busy)[0]}
                        />
                    </div>
                </>

            }

        </div>
    </div>
}

function TodoDateGroup({ date, todos }) {
    return <>
        <h2 css={s.dateTitle}>{date}</h2>
        <div>
            {
                todos.map(todo => <TodoBox key={todo.todoId} todo={todo} />)
            }
        </div>
    </>
}

function TodoMonthGroup({ month, dateOfCalendarData }) {
    const entriesOfDate = Object.entries(dateOfCalendarData);

    return <>
        <h2 css={s.monthTitle}>{month}월</h2>
        <div>
            {
                entriesOfDate.map(([date, todos]) =>
                    <TodoDateGroup key={date} date={date} todos={todos} />)
            }
        </div>
    </>
}

function TodoYearGroup({ year, monthOfCalendarData }) {
    const entriesOfMonth = Object.entries(monthOfCalendarData); // 월에 대한 그룹을 entries로 변환

    return <>
        <h2 css={s.yearTitle}>{year}년</h2>
        <div>
            {
                entriesOfMonth.map(([month, dateOfCalendarData]) =>
                    <TodoMonthGroup key={year + month} month={month} dateOfCalendarData={dateOfCalendarData} />) // TodoMonthGroup에 props로 넘겨줌 - 키값으로 연 + 월을 넘겨줘야함
            }
        </div>
    </>
}

function TodoCalendar({ calendarData }) {
    const [selectedTodo, setSelectedTodo] = useRecoilState(selectedCalendatTodoAtom);
    const entriesOfCalendarData = Object.entries(calendarData); // TodoAll에서 props로 받은걸 entries로 변환

    useEffect(() => {
        setSelectedTodo(0);
    }, [])

    return (
        <div css={s.layout}>
            {
                entriesOfCalendarData.map(([year, monthOfCalendarData]) => // 해당 연월에 대한 데이터로 가져옴
                    <TodoYearGroup key={year} year={year} monthOfCalendarData={monthOfCalendarData} />) // TodoYearGroup에 props로 넘겨줌 - 얘 자체가 리턴임
            }
        </div>
    );
}

export default TodoCalendar;