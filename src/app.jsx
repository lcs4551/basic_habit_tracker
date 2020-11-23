import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      {id: 1, name: "Reading", count: 0},
      {id: 2, name: "Running", count: 0},
      {id: 3, name: "Coding", count: 0},
    ],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        return {...item, count: habit.count + 1}
      }
      return item
    })
    this.setState({habits: habits});
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        const count = habit.count - 1;
        return {...item, count: count < 0 ? 0 : habit.count - 1}
      }
      return item
    })
    this.setState({habits: habits});
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits});
  };

  handleAdd = name => {
    const habits = [...this.state.habits];
    const newHabit = {id: Date.now(), name, count: 0}
    habits.push(newHabit)
    this.setState({habits});
  }

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if(habit !== 0) {
        return {...habit, count: 0};
      } 
      return habit
    })
    this.setState({habits})
  }

  render() {
    return (
    <div>
      <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
      <Habits 
      habits={this.state.habits} 
      onIncreament={this.handleIncrement} 
      onDecreament={this.handleDecrement} 
      onDelete={this.handleDelete}
      onAdd={this.handleAdd}
      />
      <button className="habits-reset" onClick={this.handleReset}>Reaset All</button>
    </div>
    )
  }
}

export default App;
