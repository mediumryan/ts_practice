import { ChangeEvent, FormEvent, useState } from 'react';
import { styled } from 'styled-components';

const ToDoWrapper = styled.div``;

const ToDoForm = styled.form``;

const ToDoList = styled.ul``;

export default function ToDo() {
    const [todo, setTodo] = useState<string[]>([]);
    const [text, setText] = useState('');

    const getText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const addTodo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTodo = [...todo];
        newTodo.push(text);
        setTodo(newTodo);
        setText('');
    };

    return (
        <ToDoWrapper>
            <ToDoForm onSubmit={addTodo}>
                <input type="text" value={text} onChange={getText} />
                <button>Submit</button>
            </ToDoForm>
            <ToDoList>
                {todo.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ToDoList>
        </ToDoWrapper>
    );
}
