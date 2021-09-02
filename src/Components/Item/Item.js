import "./Item.scss";

function Item(props) {
    return (
        <li className="todo-list__item" key={props.value.id}>
            <div className="todo-list__item__content">
                <span className="text text--regular">{props.value.text}</span>
                <button className="button button--danger" onClick={() => props.deleteTask(props.value)}>Supprimer</button>
            </div>
        </li>
    )
}

export default Item;