import { atom } from "recoil";

export const selectedCalendatTodoAtom = atom({
    key : "selectedCalendarTodoState",
    default : 0 // todoId가져올거임
});

export const modifyTodoAtom = atom({
    key : "modifyTodoState",
    default: {}
})