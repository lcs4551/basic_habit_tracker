import React, { Component } from 'react';
import Habit from './habit';
import Input from './input';

class Habits extends Component {
  render() {
    return (
      <div>
        <Input onAdd={this.props.onAdd}/>
        <ul>
          {this.props.habits.map(habit => (
              <Habit 
                key={habit.id} 
                habit={habit} 
                onIncreament={this.props.onIncreament} 
                onDecreament={this.props.onDecreament}
                onDelete={this.props.onDelete}
                onAdd={this.handleAdd}
              />
          ))}
        </ul>
      </div>
    );
  };
}

export default Habits;