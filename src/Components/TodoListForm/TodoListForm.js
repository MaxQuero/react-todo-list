function TodoListForm(props) {
    return (
        <form className="todo-list-form" onSubmit={e => props.addTask(e)}>
        <div className="todo-list-form__add-task">
            <label htmlFor="todo-list-task">Choses à faire : </label>
            <input className="input" value={ props.stateInput } onInput={e => props.updateStateInput(e.target.value)}/>
            <button className="button button--primary" type="submit">Ajouter</button>
        </div>
    </form>
    );
}

export default TodoListForm;