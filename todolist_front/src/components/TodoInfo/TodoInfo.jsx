import React from 'react';

function TodoInfo({todos}) {
    return (
        <ul>
            {
                todos?.map(todo => (
                    <li key={todo.todoId}>
                        <h4>제목 : {todo.title}</h4>
                        <pre>내용 : {todo.content}</pre>
                        <p>작성일 : {todo.todoDateTime}</p>                  
                        <p>중요도 : {todo.important}</p>
                        <p>급함 : {todo.busy}</p>
                        <p>status : {todo.status}</p>
                        <hr />
                    </li>
                ))
            }
        </ul>
    );
}

export default TodoInfo;