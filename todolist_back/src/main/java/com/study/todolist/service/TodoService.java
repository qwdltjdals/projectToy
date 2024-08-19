package com.study.todolist.service;

import com.study.todolist.dto.request.todo.ReqAddTodoDto;
import com.study.todolist.dto.request.todo.ReqModifyTodoDto;
import com.study.todolist.dto.response.todo.RespTodoCountsDto;
import com.study.todolist.dto.response.todo.RespTodoDto;
import com.study.todolist.entity.Todo;
import com.study.todolist.repository.TodoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoService {

    @Autowired
    private TodoMapper todoMapper; // mapper에 보내줘야함

    public int addTodo(ReqAddTodoDto dto) {

        return todoMapper.save(dto.toEntity());
    }

    public List<RespTodoDto> getTodoList() {
        List<Todo> todoList = todoMapper.findAll(); // todoMapper 에서 가져온 리스트
        List<RespTodoDto> dtoList = new ArrayList<>(); // Dto에 담아서 보내줘야함

        for(Todo todo : todoList) { // Todo todo를 하나씩 꺼냄 - todolist에서
            dtoList.add(todo.toTodoDto()); // dtoList에 todo에 만든 toTodoDto를 넣어줌
        }
        return dtoList; // 타입이 List<RespTodoDto>임
    }

    public RespTodoCountsDto getTodoCounts() {
        return todoMapper.getTodoCounts().toDto();
    }

    public int changeStatus(int todoId) {
        return todoMapper.changeStatus(todoId);
    }

    public int modifyTodo(ReqModifyTodoDto dto) {
        return todoMapper.modifyTodoByTodoId(dto.toEntity()); // dto 가 entity로 바뀌어야함
    }
}
