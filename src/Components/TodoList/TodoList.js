import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import "./TodoList.scss";
import TodoListForm from "../TodoListForm/TodoListForm";
import Item from "../Item/Item";

function TodoList() {
    const [listItems, setListItems] = useState([
        { id: uuidv4(), text: "Promener le chien" },
        { id: uuidv4(), text: "Faire la vaisselle"},
        { id: uuidv4(), text: "Regarder les Medicis"}
    ]);

    const [stateInput, setStateInput] = useState();

    const addTask = (e) => {
        e.preventDefault();

        const newArr = [...listItems];
        newArr.push({ id: uuidv4(), text: stateInput });
        setListItems(newArr);
        setStateInput('');

    }

    const updateStateInput = (value) => {
        setStateInput(value);
    }

    const deleteTask = (task) => {
        const listUpdated = listItems.filter(item => item.id !== task.id);
        setListItems(listUpdated);
    }

    return (
        <div className="todo-list">
            <h1 className="title">Todo list</h1>

            <TodoListForm stateInput={stateInput} addTask={addTask} updateStateInput={updateStateInput}/>

            <p className="text todo-list__tasks-wording">Liste des choses à faire :</p>

            <ul className="todo-list__tasks">
                {
                    listItems.map((value) => {
                        return <Item key={value.id} value={value} deleteTask={deleteTask} />
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList;