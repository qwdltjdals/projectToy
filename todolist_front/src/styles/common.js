import { css } from "@emotion/react";


export const reset = css`

    * {
        font-weight: 400;
        font-size: 16px;
    }
    html, body, #root {
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: #555555;
    }

    h1, h2, h3, ul, p {
        margin: 0;
        padding: 0;
    }

    ul, ol {
        list-style-type: none;
    }

    button {
        border: none;
        padding: 5px 10px;
        color: #087fff;
        background-color: transparent;
        cursor: pointer;
    }

    button:active {
        color: #087fff40;
        background-color: transparent;
    }

    button:disabled {
        color: #087fff40;
        background-color: transparent;
        cursor: default;
    }

    @keyframes registerModalContentOpen { //애니메이션 키값 - 애니메이션 이름 : registerModalContentOpen
        from {
            inset: auto 0 -650px;
        }
        to {
            inset: auto 0 0;
        }
    }

    @keyframes registerModalContentClose { //애니메이션 전용
        from {
            inset: auto 0 0;
        }
        to {
            inset: auto 0 -650px;
        }
    }
`;