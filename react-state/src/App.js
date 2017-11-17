import React, { Component } from 'react';

<<<<<<< HEAD
import 'whatwg-fetch'; //load polyfill
=======
import 'whatwg-fetch'; //load the polyfill
>>>>>>> 886fa5aba9446b25af39cb1acf599c6dabab03f8

const SAMPLE_TASKS = [
  { id: 1, description: 'Learn JSX', complete: true },
  { id: 2, description: 'Learn about React State', complete: false },
  { id: 3, description: 'Get some sleep', complete: false }
];


class App extends Component {

<<<<<<< HEAD
  constructor(props) {
    // set up
    super(props)

    // initial state values
    // state is always an object
    this.state = {
      currentTime: new Date(),
      incompleteCount: 'A lot',
      tasks: SAMPLE_TASKS
=======
  constructor(props){
    super(props) //hey dad, set up this.props

    //initial state values
    this.state = {
      currentTime: new Date(),
      incompleteCount: 'A lot',
      tasks: [] //initially empty      
>>>>>>> 886fa5aba9446b25af39cb1acf599c6dabab03f8
    };

    window.setInterval(() => {

<<<<<<< HEAD
      let updatedState = { currentTime: new Date() }
=======
      let updatedState = {currentTime: new Date()};
>>>>>>> 886fa5aba9446b25af39cb1acf599c6dabab03f8
      this.setState(updatedState);

    }, 1000);
  }

<<<<<<< HEAD
  componentDidMount() {
=======
  //lifecycle event!!
  componentDidMount() {
    //download the data
>>>>>>> 886fa5aba9446b25af39cb1acf599c6dabab03f8
    fetch('tasks.json')
      .then((response) => {
        return response.json();
      })
<<<<<<< HEAD
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
=======
      .then((data)=>{
        this.setState({tasks:data}); //set the loaded data to be the tasks
      });
  }


  //yoinked from TaskList
  toggleFinished(taskId){
    let updatedTasks = this.state.tasks.map((task) => {
      if(task.id === taskId){
        task.complete = !task.complete; //toggle
      }
      return task;
    })

    this.setState({tasks:updatedTasks});
  }

  addTask(description){
    let newTask = {
      id:this.state.tasks.length+1,
      description: description,
>>>>>>> 886fa5aba9446b25af39cb1acf599c6dabab03f8
      complete: false
    }

    let updatedTasks = this.state.tasks.concat(newTask);
    this.setState({tasks:updatedTasks});
  }

  render() {
    return (
      <div className="container">
        <Clock time={this.state.currentTime} />
<<<<<<< HEAD
        <p className="lead">Things I have to do (2+)</p>
        <TaskList />
        <AddTaskForm submitCallback = {(descr) => {this.AddTask(descr)}}/>
=======
        <p className="lead">Things I have to do ({this.state.incompleteCount})</p>
        <TaskList 
          tasks={this.state.tasks}
          toggleCallback={(taskId) => {this.toggleFinished(taskId)}}
          />
        <AddTaskForm submitCallback={(descr) => {this.addTask(descr)}} />
>>>>>>> 886fa5aba9446b25af39cb1acf599c6dabab03f8
      </div>
    );
  }
}

class Clock extends Component {
  render() {
    return (
<<<<<<< HEAD
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

=======
        <div className="font-italic">{this.props.time.toLocaleTimeString()}</div>
    );  
  }
}

class TaskList extends Component {  

  // constructor(props){
  //   super(props);

  //   //initial values
  //   this.state = {
  //     tasks: SAMPLE_TASKS    
  //   }
  // }

  render() { 
    
    //[{} {} {}] ==> [<Task> <Task> <Task>]
    let taskItemsArray = this.props.tasks.map((task) => {
      return <Task 
                key={task.id} 
                task={task} 
                toggleCallback={ this.props.toggleCallback }  
                />;
>>>>>>> 886fa5aba9446b25af39cb1acf599c6dabab03f8
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
<<<<<<< HEAD
    console.logo("You clicked on #", this.props.task.id);
=======
    console.log('You clicked on #', this.props.task.id);
>>>>>>> 886fa5aba9446b25af39cb1acf599c6dabab03f8
    this.props.toggleCallback(this.props.task.id);
  }

  render() {

    let className = this.props.task.complete ? 'font-strike' : '';

    return (
<<<<<<< HEAD
      <li className={className} onClick={() => { this.handleClick() }}>
=======
      <li className={className} onClick={() => {this.handleClick()} }>
>>>>>>> 886fa5aba9446b25af39cb1acf599c6dabab03f8
        {this.props.task.description}
      </li>
    );
  }
}

class AddTaskForm extends Component {
<<<<<<< HEAD

  constructor(props) {
    super(props);

    this.state = { value: '' }

  }

  handleChange(event) {
    this.setState({ value: event.target.value, () => {
      console.log(this.state.value);
    }})
=======
  constructor(props){
    super(props);

    //initial state
    this.state = {value: ''}

  }

  handleChange(event){
    this.setState({value: event.target.value}, () => {
      console.log(this.state.value); //do this when done setting state      
    });
  }

  handleClick(event){
    event.preventDefault();
    this.props.submitCallback(this.state.value);
    this.setState({value:''}); //reset once finished    
>>>>>>> 886fa5aba9446b25af39cb1acf599c6dabab03f8
  }

  render() {
    return (
      <form>
        <input
          className="form-control mb-3"
          placeholder="What else do you have to do?"
          value={this.state.value}
<<<<<<< HEAD
          onChange={(event) => { this.handleChange(event) }}
        />
        <button className="btn btn-primary" onClick= {(event) => {this.handleClick(event)}}
          >Add task to list</button>
=======
          onChange={(event) => {this.handleChange(event) } }
          />
        <button 
          className="btn btn-primary" 
          onClick={(event) => {this.handleClick(event)}}
          >
            Add task to list
        </button>
>>>>>>> 886fa5aba9446b25af39cb1acf599c6dabab03f8
      </form>
    );
  }
}

export default App;
