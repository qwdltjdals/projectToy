import React from 'react';
import TodoInfo from '../TodoInfo/TodoInfo';

function MonthGroup({months}) {
    const monthEntries = Object.entries(months); // months 객체를 배열로 만들어줌
    return (
        <ul>
            {
                monthEntries?.map(([month, todos]) => {  // ? = 빈값이면 실행하지 마라
                    return <li key={month}>
                        <h3>{month}월</h3>
                        <TodoInfo todos={todos} />
                    </li>
                })
            }
        </ul>
    );
}

export default MonthGroup;