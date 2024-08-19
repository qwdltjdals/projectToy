import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import { Global } from "@emotion/react";
import { reset } from "./styles/common";
import DandP from "./pages/DandP/DandP";
import MainLayout from "./components/MainLayout/MainLayout";
import TodoAllPage from "./pages/TodoAll/TodoAllPage";
import Note from "./pages/Note/Note";

function App() {
    
    return (
        <>
            <Global styles={reset} />
            <MainLayout>
            <Routes>
                <Route path="/todo/*" element={<Dashboard />} />
                <Route path="/login" element={<></>} />
                <Route path="/join" element={<></>} />
                <Route path="/dp" element={<DandP />} />
                <Route path="/note" element={<Note />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
            </MainLayout>
        </>
    );
}

 // <Route path="/*" element={<NotFound />} />  * = 모든 경로 지만, 우선순위가 가장 낮음 - 위에 있는 애들 다 처리 하고 처리함
export default App;