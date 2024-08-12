import { css } from "@emotion/react";

export const container = css`
    box-sizing: border-box;
    position: relative;
    padding-top: 45px;
    padding-bottom: 15px;
    height: 100%;
    overflow-y: scroll;
    background-color: #efefef;
    &::-webkit-scrollbar {
        display: none;
    }
`;