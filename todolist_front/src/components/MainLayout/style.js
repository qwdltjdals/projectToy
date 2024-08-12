import { css } from "@emotion/react";

export const layout = css`
    display: flex; // display : 해당 요소의 특성을 바꿈 - 정렬등 블록레벨 - 한줄 먹기 / 인라인 - 글자처럼취급 / position : 요소의 위치를 마음대로 움직일 수 있게 함
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const fram = css`
    position: relative;
    border: 5px solid #000000;
    border-radius: 40px;
    width: 375px;
    height: 812px;
    background-color: white;
    overflow: hidden;
`;

export const topBar = css`
    position: absolute;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 45px;
`;

export const topBarCenter = css`
border-radius: 20px;
    width: 35%;
    height: 30px;
    background-color: black;
`;

export const clock = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32%;
    cursor: default;
    font-size: 15px;
    font-weight: 600;
`;

export const rigthItems = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32%;
    & *:nth-of-type(2) {
        margin: 0px 5px;
    }
`;