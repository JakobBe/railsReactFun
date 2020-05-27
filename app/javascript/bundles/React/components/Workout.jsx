import React from 'react';

class Workout extends React.Component {
  state = {
    isWorkoutVisible: false
  }
  componentDidMount() {

  }

  getRandomWorkout = (exercises) => {
    return(
      <ul>
        {exercises.map(exercise => {
          return (
            <li>
              {exercise.exercise.name}
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    console.log('this.state', this.state);
    const workout = this.state.isWorkoutVisible ? this.getRandomWorkout(this.props.exercises) : <div onClick={() => this.setState({ isWorkoutVisible: true })} className="btn btn--primary btn--animated">Get random Workout</div>;
    return (
      <div class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main">Tiger</span>
          <span class="heading-primary--sub"></span>
        </h1>
        {workout}
      </div> 
    )
  }
}

export default Workout;