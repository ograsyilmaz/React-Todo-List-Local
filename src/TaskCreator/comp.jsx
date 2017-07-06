import React, {Component} from 'react';
import'./comp.style.scss';
class TaskCreactor extends Component{
    render(){
        return(
<div className="task--creator">
   <label>New Task:</label>
   <input type="text" onKeyUp={this.props.onKeyUpHandler} placeholder="Görev Yazın Enter Basın" />


</div>

        );
    }

}

export default TaskCreactor;