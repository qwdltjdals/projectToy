/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useEffect, useState } from 'react';
import { IoCellularSharp } from "react-icons/io5";
import { IoIosWifi, IoIosBatteryFull } from "react-icons/io";
import MainContainer from '../MainContainer/MainContainer';
import RegisterModal from '../RegisterModal/RegisterModal';

function MainLayout({ children }) {
    const [clock, setClock] = useState("0:00");

    useEffect(() => {
        setInterval(() => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes(); // 10으로 나눴을때 절삭값이 0보다 크면 0을 넣고 크지 않으면 ""
            setClock(`${hours}:${minutes}`); // 시간과 분을 따로 받아와야 해서 새로 만듦 
            // const localTime = now.toLocaleTimeString(); // 현재의 타임을 가져옴
            // setClock(localTime.slice(3, 7)); // slice = 어디부터 어디까지 잘라서 가져옴
        }, 1000); // 1초마다 실행
    }, []);

    return (
        <div css={s.layout}>
            <div css={s.fram}>
                <div css={s.topBar}>
                    <div css={s.clock}>{clock}</div>
                    <div css={s.topBarCenter}></div>
                    <div css={s.rigthItems}><IoCellularSharp /><IoIosWifi /><IoIosBatteryFull /></div>
                </div>
                    {children}
            </div>
        </div>
    );
}
    // 마운트때 동작하는것이 useEffect/ 함수 = 리턴이 일어나면 실행됨 뒤에 [] = 의존성/ []에 있는 상태가 변하는 것을 감지함
    // 실행되는 시점 = 마운트 될때, [] 안의 상태가 변할때 / 아무것도 넣지 않으면 최초에 한번만 실행됨 - 감지할 것이 없으니까
    // [] 자체가 없으면 매번 랜더링 될때 마다 = 다른 것의 상태가 변할때마다 계속 실행됨
export default MainLayout;