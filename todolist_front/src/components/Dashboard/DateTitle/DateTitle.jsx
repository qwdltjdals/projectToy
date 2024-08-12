/** @jsxImportSource @emotion/react */
import DashboardListItem from '../DashboardListItem/DashboardListItem';
import { IoTodayOutline } from "react-icons/io5";
import * as s from './style';
import Icon from '../Icon/Icon';

function DateTitle(props) {
    const today = new Date().toLocaleDateString();

    return (
        <DashboardListItem title={"Today"}>
            <div css={s.date}>
            <Icon color={"#087fff"}>
            <IoTodayOutline />
            </Icon>
                {today}
                </div>
        </DashboardListItem>
    );
}

export default DateTitle;