package com.study.todolist.dto.request.todo;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ReqGetTodoListDto {
    private int todoId;
    private int userId;
    private String title;
    private String content;
    private int important;
    private int busy;
    private int status;
    private LocalDateTime todoDateTime;
}
