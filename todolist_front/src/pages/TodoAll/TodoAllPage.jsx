/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import PageAnimationLayout from '../../components/PageAnimationLayout/PageAnimationLayout';
import MainContainer from '../../components/MainContainer/MainContainer';
import BackButtonTop from '../../components/BackButtonTop/BackButtonTop';
import PageTitle from '../../components/PageTitle/PageTitle';
import { MENUS } from '../../constants/menus';
import { useRecoilState } from 'recoil';
import { todolistAtom } from '../../atoms/todolistAtoms';
import TodoCalendar from '../../components/TodoCalendar/TodoCalendar';
import RegisterTodoButton from '../../components/RegisterTodoButton/RegisterTodoButton';
import { modifyTodoAtom, selectedCalendatTodoAtom } from "../../atoms/calendarAtoms";
import ConfirmButtonTop from "../../components/ConfirmButtonTop/ConfirmButtonTop";
function TodoAllPage(props) {

    const [isShow, setShow] = useState(true);
    const [todolistAll] = useRecoilState(todolistAtom); // 리코일로 받아옴
    const [selectedTodo, setSelectedTodo] = useRecoilState(selectedCalendatTodoAtom); // 이 안에 어떠한 Id가 들어가 있으면 수정모드
    const [calendarData, setCalenderData] = useState({});
    const [modifyTodo, setModifyTodo] = useRecoilState(modifyTodoAtom);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

    useEffect(() => {
        let preTodo = {
            ...(todolistAll.todolist.filter(todo =>
            todo.todoId === modifyTodo?.todoId)[0]) // ? = 값이 null이면 참조하지 말아라 - todoId가 없을 수 있으니까(맨 처음에)
        }

        preTodo = {
            ...preTodo,
            todoDateTime : preTodo?.todoDateTime?.replaceAll(" ", "T")
        }
        const disabled = JSON.stringify(modifyTodo) === JSON.stringify(preTodo) || !modifyTodo?.title?.trim(); // 객체가 서로 같은지 비교할 때에 사용
        setSubmitButtonDisabled(disabled); // 객체가 서로 같거나, 빈값이면 확인버튼이 보이지 않게
    }, [modifyTodo])


    useEffect(() => {
        const tempCalendarData = {}; // tempCalendarData 라는 map하나 생성

        for (let todo of todolistAll.todolist) {
            const dateTime = todo.todoDateTime;
            const year = dateTime.slice(0, 4);
            const month = dateTime.slice(5, 7);
            const date = dateTime.slice(0, 10);

            if (!tempCalendarData[year]) { // tempCalendarData에 year배열이 없으면 객체를 하나 만들어라?
                tempCalendarData[year] = {};
            }

            if (!tempCalendarData[year][month]) { // tempCalendarData에 year배열에 month 배열이 없으면 객체를 하나 만들어라?
                tempCalendarData[year][month] = {};
            }
            if (!tempCalendarData[year][month][date]) {
                tempCalendarData[year][month][date] = [];
            }
            // if 문 세개 지나오면 연월일 배열에 키값 만듦
            tempCalendarData[year][month][date].push(todo); // 배열 참조.넣어라(꺼내온todo)
        }
        setCalenderData(tempCalendarData);
    }, [todolistAll]);

    const modifyCancel = () => { // todoId를 비워줌 - cancel
        setSelectedTodo(0);
    }

    const modifySubmit = () => {
        console.log(modifyTodo);
        setSelectedTodo(0);
    }

    // useEffect(() => {
    //     const obj = {
    //         "a": "test1",
    //         "b": "test2",
    //         "c": "test3",
    //         "d": "test4",
    //         "e": "test5",
    //         "f": "test6",
    //     } // 객체를 배열로 만들어야 반복을 돌릴 수 있음
    //     const objList = Object.entries(obj); // 객체를 배열로 바꿈 - objList 반복 돌리기 가능
    //     for (let o of objList) { // objList 에서 반복돌려서 o(entry)를 추출
    //         console.log(o[0]); // 0번이 키값
    //         console.log(o[1]); // 1번이 value
    //     }

    // }, [])

    // useEffect(() => {
    //     const obj = {
    //         "a": {
    //             "test1": 10, // object안의 object = entry안의 entry
    //             "test2": 20,
    //             "test3": 30,
    //             "test4": 40,
    //         },
    //         "b": {
    //             "test5": 50,
    //             "test6": 60,
    //             "test7": 70,
    //             "test8": 80,
    //         },
    //     }
    //     const objList = Object.entries(obj);
    //     for (let o of objList) {
    //         const key = o[0];
    //         const value = Object.entries(o[1]);

    //         console.log("key : " + key);
    //         console.log("value : " + value);

    //         for (let e of value) {
    //             const key2 = e[0];
    //             const value2 = e[1];
    //             console.log("key2 : " + key2)
    //             console.log("value2 : " + value2)
    //         }
    //     }
    // }, [])

    // entries = 객체를 배열로 만들어 준다
    // const calenderDataEntries = Object.entries(calendarData); // calenderDataEntry[0] = 년 / calenderDataEntry[1] = 월

    // setCalender(calenderDataEntries.map(calenderDataEntry => {
    //     const yearText = calenderDataEntry[0];
    //     const monthEntries = Object.entries(calenderDataEntry[1])

    //     return <li>
    //         <h2>{yearText}</h2> {/* 년 */}
    //         <ul>
    //         {
    //             monthEntries.map(monthEntry => {
    //                 const monthText = monthEntry[0]
    //                 const todos = monthEntry[1]
    //                 return <li>
    //                     <h3>{monthText}</h3>  {/* 월 */}
    //                     <ul> {/* 투두 들어감 */}
    //                         {
    //                             todos.map(todo => {
    //                                 return <li>
    //                                     <h4>{todo.title}</h4>
    //                                     <div>
    //                                         <input type="checkbox" checked={todo.status === 2}/>
    //                                         <div>
    //                                             <code>{todo.content}</code>
    //                                             <p>{todo.todoDateTime}</p>
    //                                             <p>{todo.important}, {todo.busy}</p>
    //                                         </div>
    //                                     </div>
    //                                 </li>
    //                             })
    //                         }
    //                     </ul>
    //                 </li>
    //             })
    //         }
    //         </ul>
    //     </li>
    // }));

    return (
        <PageAnimationLayout isShow={isShow} setShow={setShow}>
            <MainContainer>
                <div css={s.layout}>
                    {
                        selectedTodo === 0 ?
                            <BackButtonTop setShow={setShow} />
                            : <ConfirmButtonTop onCencel={modifyCancel} onSubmit={modifySubmit} disabled={submitButtonDisabled} />
                    }
                    <PageTitle title={MENUS.all.title} color={MENUS.all.color} />
                    <TodoCalendar calendarData={calendarData} />
                    <RegisterTodoButton />
                </div>
            </MainContainer>
        </PageAnimationLayout>
    );
}

export default TodoAllPage;