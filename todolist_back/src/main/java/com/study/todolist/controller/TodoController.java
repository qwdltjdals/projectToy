package com.study.todolist.controller;

import com.study.todolist.dto.request.todo.ReqAddTodoDto;
import com.study.todolist.dto.response.todo.RespTodoDto;
import com.study.todolist.service.TodoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/v1")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @PostMapping("/todo") // 등록
    public ResponseEntity<?> add(@RequestBody ReqAddTodoDto dto) {
        int successCount = todoService.addTodo(dto);
        return ResponseEntity.created(null).body(successCount); // created = 201(post요청의 응답)
    }

    @GetMapping("/todolist") // 전체조회
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok().body(todoService.getTodoList());
    }

    @GetMapping("/todo/counts")
    public ResponseEntity<?> getCounts() {
        return ResponseEntity.ok().body(todoService.getTodoCounts());
    }
}
