import React from 'react';
import MonthGroup from '../MonthGroup/MonthGroup';

function YearGroup({calendarData}) {
    const calenderDateEntries = Object.entries(calendarData); // calendarData를 calenderDateEntries로 바꿈
    return (
        <ul>
            {
                calenderDateEntries?.map(([year, months]) => {
                    return  <li key={year}>
                        <h2>{year}년</h2>
                        <MonthGroup months={months} /> {/* monthEntries를 보내는데, value가 월이니까 이걸 보내줌*/}
                    </li>
                })
            }
        </ul>
    );
}

export default YearGroup;