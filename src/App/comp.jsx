import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './comp.style.scss';
import TaskCreator from '../TaskCreator/comp.jsx'
import TaskList from '../TaskList/comp.jsx'
import Task from '../Task/comp.jsx'

class App extends Component {

constructor(props){
super(props);
this.state={
    tasks:[{taskName:"Task1"},
           {taskName:"Task2"},
           {taskName:"Task3"}
           ]
        }
}
removeTask(index){ 

const tasks =this.state.tasks.slice(0);
tasks.splice(index,1);
this.setState({tasks:tasks});


}

createTask(e){
if(e.which!==13)
return;

const tasks=this.state.tasks.slice(0);
tasks.push({taskName: e.target.value});
this.setState({tasks:tasks});
}

    render() {
        return (
            <div className="App">
          <h1>Görev Listem</h1>
              <TaskCreator   onKeyUpHandler={this.createTask.bind((this))}/>
        <TaskList>
            {this.state.tasks.map((task,i) => <Task onClickHandler={this.removeTask.bind(this,i)} taskName={task.taskName} key={i} />)}
        </TaskList>
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));