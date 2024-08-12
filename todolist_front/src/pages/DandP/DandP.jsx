/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const parent = css` // 주축 : justify / 교차축 : aligen
    display: flex;
    flex-wrap: wrap; // 부모의 크기를 벗어나면 다음줄로 바꿔라
    justify-content: center; // 주축 안에서 센터정령
    align-items: center;  //한줄일 때  각각의 아이템에서 가운데 정렬
    /* align-content: center; // wrap을 써야 이걸 쓸 수 있음(여러줄일때) 아이템이랑 상관 없이 가운데 */
    flex-direction: row;
    box-sizing: border-box;
    margin: 50px auto;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 800px;
    height: 400px;
`;

const parent2 = css`
    display: flex;
    flex-wrap: nowrap;
    box-sizing: border-box;
    margin: 50px auto;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 800px;
    height: 400px;
`;

const child = css`
    box-sizing: border-box;
    border: 4px solid red;
    width: 150px;
    height: 50px;
    background-color: white;
    &:nth-of-type(1) { // 자식요소의 세번째 
        background-color: pink;
        align-self: flex-start; // 셀프는 자식한테 주는거임
    }
    &:nth-of-type(3) { // 자식요소의 세번째 
        background-color: pink;
        align-self: flex-end; // 셀프는 자식한테 주는거임
    }
    &:nth-of-type(5) { // 자식요소의 세번째 
        background-color: pink;
        align-self: flex-start; // 셀프는 자식한테 주는거임
    }
`;

const child2 = css`
    box-sizing: border-box;
    border: 4px solid blue;
    width: 300px;
    height: 100%;
    background-color: white;
    /* flex-shrink: 1; // 튀어나온 부분이 있으면 넘친부분만큼 균등하게 줄이자 */

    &:nth-of-type(1) {
        background-color: yellow;
        flex-shrink: 2;
    }
    &:nth-of-type(2) {
        /* flex-grow: 1; // 남은 여백 크기만큼 다 차지해라(컨텐츠영역) */
        background-color: green;
        flex-shrink: 1;
    }
    &:nth-of-type(3) {
        /* flex-grow: 1;  // 두개있으면 여백을 서로 나눔 */
        background-color: purple;
    }
`;

const inputBox = css`
    position: relative;
`;

const input = css`
    width: 300px;
    height: 50px;
    padding-right: 70px;

    & + button {
        position: absolute; //absolute = 상위의 포지션 따라감/ relative = 기준이 현재 자신 위치 - right, bottom 못씀
        top: 50%;
        right: 10px;
        transform: translateY(-50%); // 50퍼센트 만큼 끌어올림
        z-index: 0;
        background-color: pink;
    }
`;

function DandP(props) {
    return (
        <>
            <div css={parent}>
                <div css={child}>1</div>
                <div css={child}>2</div>
                <div css={child}>3</div>
                <div css={child}>4</div>
                <div css={child}>5</div>
                <div css={inputBox}>
                    <input type="text" css={input}/>
                    <button>OK</button>
                </div>
            </div>
                    
            <div css={parent2}>
                <div css={child2}>1</div>
                <div css={child2}>2</div>
                <div css={child2}>3</div>

            </div>
        </>
    );
}
// 블록 레벨 요소 / 인라인 레벨 요소
// 블록레벨 = 한 줄을 먹음(div), 세로로 오게 하고싶으면 inline-block사용
// 인라인 = 높이와 너비를 무시함, 한 줄로 쭉 감(label), 사이즈를 늘리려면 패딩을 늘리거나, 폰트의 사이즈를 늘림
export default DandP;