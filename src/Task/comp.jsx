import React, {Component} from 'react';
import './comp.style.scss';

class Task extends Component {
    render() {
        return (
            <li className="task" onClick={this.props.onClickHandler} title="Silmek için üzerine Tıklayın" >
                {this.props.taskName}

            </li>
        );
    }
}

export default Task;