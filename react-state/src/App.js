import React, { Component } from 'react';

import 'whatwg-fetch'; //load polyfill

const SAMPLE_TASKS = [
  { id: 1, description: 'Learn JSX', complete: true },
  { id: 2, description: 'Learn about React State', complete: false },
  { id: 3, description: 'Get some sleep', complete: false }
];


class App extends Component {

  constructor(props) {
    // set up
    super(props)

    // initial state values
    // state is always an object
    this.state = {
      currentTime: new Date(),
      incompleteCount: 'A lot',
      tasks: SAMPLE_TASKS
    };

    window.setInterval(() => {

      let updatedState = { currentTime: new Date() }
      this.setState(updatedState);

    }, 1000);
  }

  componentDidMount() {
    fetch('tasks.json')
      .then((response) => {
        return response.json();
      })
      .then((data) =>{
        this.setState({tasks.data})
      })
  }

  // toggleFinished(taskId) {
  //   let updatedTasks = this.state.tasks.map((task) => {
  //     if(task.id === task)
  //   })
  // }

  addTask(description) {
    let newTask = {
      id:this.state.tasks.length,
      description:description,
      complete: false
    }

    let updatedTasks = this.state.tasks.concat(newTask);
    this.setState({tasks:updatedTasks});
  }

  render() {
    return (
      <div className="container">
        <Clock time={this.state.currentTime} />
        <p className="lead">Things I have to do (2+)</p>
        <TaskList />
        <AddTaskForm submitCallback = {(descr) => {this.AddTask(descr)}}/>
      </div>
    );
  }
}

class Clock extends Component {
  render() {
    return (
      <div className="font-italic">{"demo o'clock"}</div>
    );
  }
}

class TaskList extends Component {
  constructor(props) {
    super(props);

    //initial values 
    this.state = {
      tasks: SAMPLE_TASKS
    }
  }

  toggleFinished(taskId) {
    let updatedTasks = this.props.tasks.map((task) => {
      if (task.id === taskId) {
        task.complete = !task.complete; //toggle
      }
      return task;
    })

    this.setState({ tasks: updatedTasks });
  }

  render() {
    // [{}, {}, {}] => [<Task> <Task> <Task]

    let taskItemsArray = this.state.tasks.map((task) => {
      return <Task
        key={task.id}
        task={task}
        toggleCallback={() => { this.toggleFinished(taskId) }}
      />;

    })

    return (
      <ol>
        {taskItemsArray}
      </ol>
    );
  }
}

class Task extends Component {

  handleClick() {
    console.logo("You clicked on #", this.props.task.id);
    this.props.toggleCallback(this.props.task.id);
  }

  render() {

    let className = this.props.task.complete ? 'font-strike' : '';

    return (
      <li className={className} onClick={() => { this.handleClick() }}>
        {this.props.task.description}
      </li>
    );
  }
}

class AddTaskForm extends Component {

  constructor(props) {
    super(props);

    this.state = { value: '' }

  }

  handleChange(event) {
    this.setState({ value: event.target.value, () => {
      console.log(this.state.value);
    }})
  }

  render() {
    return (
      <form>
        <input
          className="form-control mb-3"
          placeholder="What else do you have to do?"
          value={this.state.value}
          onChange={(event) => { this.handleChange(event) }}
        />
        <button className="btn btn-primary" onClick= {(event) => {this.handleClick(event)}}
          >Add task to list</button>
      </form>
    );
  }
}

export default App;
