/** @jsxImportSource @emotion/react */
import { Route, Routes } from 'react-router-dom';
import DateTitle from '../../components/Dashboard/DateTitle/DateTitle';
import MenuList from '../../components/Dashboard/MenuList/MenuList';
import Search from '../../components/Dashboard/Search/Search';
import MainContainer from '../../components/MainContainer/MainContainer';
import RegisterTodoButton from '../../components/RegisterTodoButton/RegisterTodoButton';
import * as s from './style';
import TodoAllPage from '../TodoAll/TodoAllPage';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { refreshTodolistAtom, todolistAtom } from '../../atoms/todolistAtoms';
import { getTodoAllApi, getTodoCountsApi } from '../../apis/todoApis/getTodoApi';
import { useEffect } from 'react';
function Dashboard(props) {
    const setTodolistAll = useSetRecoilState(todolistAtom); // todolistAtom을 받아옴
    const [refresh, setRefresh] = useRecoilState(refreshTodolistAtom)

    const requestTodolist = async () => {
        const todolist = await getTodoAllApi();
        const counts = await getTodoCountsApi();
        setTodolistAll({
            todolist : todolist?.data,
            counts: counts?.data
        });
    }

    useEffect(() => { // 처음(트루) - 실행 - if동작 - false로 바꿈 - 상태바꼇으니 한번더 실행 - false라 if 실행 안됨
        if(refresh) {
        requestTodolist();
        }
        setRefresh(false)
    }, [refresh]); // refresh의 상태가 바뀌면 동작을 함

    return (
        <MainContainer>
            <div css={s.layout}>
                <header>
                    <Search />
                </header>
                <main>
                    <DateTitle />
                    <MenuList />
                </main>
                <footer>
                    <RegisterTodoButton />
                </footer>
            </div>
            <Routes> 
                <Route path="/all" element={<TodoAllPage />} />
            </Routes>
        </MainContainer>
    );
}

export default Dashboard;