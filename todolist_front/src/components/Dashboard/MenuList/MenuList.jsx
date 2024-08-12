/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import DashboardListItem from '../DashboardListItem/DashboardListItem';
import Icon from '../Icon/Icon';
import * as s from './style';
import { BsCalendar4Week, BsCalendar4Event, BsCalendarCheck } from "react-icons/bs";
import { useRecoilState } from 'recoil';
import { todolistAtom } from '../../../atoms/todolistAtoms';
import { MENUS } from '../../../constants/menus';

function Menu({ path, icon, title, count, color }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    }

    return (
        <div css={s.menuContainer} onClick={handleClick}>
            <div css={s.menuTop}>
                <Icon color={color}>{icon}</Icon>
                <p>{count}</p>
            </div>
            <h3 css={s.menuBotton}>
                {title}
            </h3>
        </div>

    )
}

function MenuList(props) {
    const [todolist] = useRecoilState(todolistAtom);

    return (
        <DashboardListItem title={"Menu"}>
            <div css={s.layout}>
                <Menu
                    path={MENUS.today.path}
                    icon={<BsCalendar4Event />}
                    color={MENUS.today.color}
                    title={MENUS.today.title}
                    count={todolist.counts.today}
                />
                <Menu
                    path={"/todo/all"}
                    icon={<BsCalendar4Week />}
                    color={MENUS.all.color}
                    title={MENUS.all.title}
                    count={todolist.counts.all}
                />
                <Menu
                    path={"/todo/busy"}
                    icon={<BsCalendar4Week />}
                    color={MENUS.busy.color}
                    title={MENUS.busy.title}
                    count={todolist.counts.busy}
                />
                <Menu
                    path={"/todo/important"}
                    icon={<BsCalendar4Week />}
                    color={MENUS.important.color}
                    title={MENUS.important.title}
                    count={todolist.counts.important}
                />
                <Menu
                    path={"/todo/complete"}
                    icon={<BsCalendarCheck />}
                    color={MENUS.complete.color}
                    title={MENUS.complete.title}
                    count={todolist.counts.complete}
                />
            </div>
        </DashboardListItem>
    );
}

export default MenuList;