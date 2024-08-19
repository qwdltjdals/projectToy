package com.study.todolist.controller;

import com.study.todolist.dto.request.todo.ReqAddTodoDto;
import com.study.todolist.dto.request.todo.ReqModifyTodoDto;
import com.study.todolist.dto.response.todo.RespTodoDto;
import com.study.todolist.service.TodoService;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.annotations.Param;
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

    @PutMapping("/todo/{todoId}/status")
    public ResponseEntity<?> changeStatus(@PathVariable int todoId) { // todoId 받아오려고 PathVariable 쓰는것
        return ResponseEntity.ok().body(todoService.changeStatus(todoId));
    }

    /**
     * ReqModifyTodoDto
     * modifyTodo(todoService)
     * modifyTodoByTodoId(todoMapper)
     *
     */
    @PutMapping("/todo/{todoId}")
    public ResponseEntity<?> modify(@RequestBody ReqModifyTodoDto dto) { // JSON 형태로 받아야함
        log.info("{}", dto);
        int successCount = todoService.modifyTodo(dto);
        return ResponseEntity.ok().body(successCount);
    }
}
// 프론트에서 날아오는가
// 프론트에서 어떤 형태로 넘겨줄건가
