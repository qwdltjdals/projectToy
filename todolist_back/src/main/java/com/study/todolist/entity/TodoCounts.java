package com.study.todolist.entity;

import com.study.todolist.dto.response.todo.RespTodoCountsDto;
import lombok.Data;

@Data
public class TodoCounts { // 각각의 조건에 맞는 갯수들
    private int all;
    private int today;
    private int important;
    private int busy;
    private int complete;

    public RespTodoCountsDto toDto() {
        return  RespTodoCountsDto.builder()
                .all(all)
                .today(today)
                .important(important)
                .busy(busy)
                .complete(complete)
                .build();
    }
}
