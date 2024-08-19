package com.study.todolist.repository;

import com.study.todolist.dto.request.todo.ReqModifyTodoDto;
import com.study.todolist.dto.response.todo.RespTodoCountsDto;
import com.study.todolist.entity.Todo;
import com.study.todolist.entity.TodoCounts;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper // xml이랑 연동을 시키기 위한 @
public interface TodoMapper {
    int save(Todo todo);
    List<Todo> findAll();// Todo객체들을 담는 리스트를 리턴 - entity로 가져옴
    TodoCounts getTodoCounts();
    int changeStatus(int todoId);
    int modifyTodoByTodoId(Todo todo);
}
