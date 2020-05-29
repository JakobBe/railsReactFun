import React from 'react';
import Header from './Header';
import SettingModal from './SettingModal';
import WorkoutSetCard from './WorkoutSetCard';
import { getWorkout } from '../helpers';

class Workout extends React.Component {
  state = {
    isWorkoutVisible: false,
    isSettingOpen: false,
    "Endurance": true,
    "Legs": true,
    "Upper Body": true,
    "Abs": true,
    "Core": true,
    "Arms": false,
    cyclePreSet: 0,
    cylceExerciseTime: 30,
    cycleSetExerciseCount: 4,
    cycleCount: 3
  }
  // componentDidMount() {
  //   ['Legs', 'Upper Body', 'Abs', 'Core', 'Arms', 'Endurance']
  // }

  onCheckboxChange = (name) => {
    this.setState({
      [name]: !this.state[name]
    });
  }

  onCycleSelectionChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  groupInfo = () => {
    return [
      { name: "Endurance", status: this.state["Endurance"], onChange: this.onCheckboxChange },
      { name: "Legs", status: this.state["Legs"], onChange: this.onCheckboxChange},
      { name: "Upper Body", status: this.state["Upper Body"], onChange: this.onCheckboxChange},
      { name: "Abs", status: this.state["Abs"], onChange: this.onCheckboxChange},
      { name: "Core", status: this.state["Core"], onChange: this.onCheckboxChange},
      { name: "Arms", status: this.state["Arms"], onChange: this.onCheckboxChange}
    ];
  }

  getCycleInfo = () => {
    return [
      { label: '', name: 'cyclePreSet', value: this.state.cyclePreSet, onChange: this.onCycleSelectionChange, options: [{ value: 0, text: 'One Set per Body-Section' }, { value: 1, text: 'Mixed Body-Sections in sets'}] },
      { label: 'Time per exercise', name: 'cylceExerciseTime', value: this.state.cylceExerciseTime, onChange: this.onCycleSelectionChange, options: [{ value: 30, text: '30s' }, { value: 45, text: '45s' }, { value: 60, text: '1min' }, { value: 90, text: '1:30min' }, { value: 120, text: '2min' }] },
      { label: 'Exercises per set', name: 'cycleSetExerciseCount', value: this.state.cycleSetExerciseCount, onChange: this.onCycleSelectionChange, options: [{ value: 2, text: '2' }, { value: 3, text: '3' }, { value: 4, text: '4' }, { value: 5, text: '5' }, { value: 6, text: '6' }, { value: 7, text: '7' }, { value: 8, text: '8' }] },
      { label: 'Number of cycles', name: 'cycleCount', value: this.state.cycleCount, onChange: this.onCycleSelectionChange, options: [{ value: 1, text: '1' },, { value: 2, text: '2' }, { value: 3, text: '3' }, { value: 4, text: '4' }, { value: 5, text: '5' }, { value: 6, text: '6' }, { value: 7, text: '7' }, { value: 8, text: '8' }] }
    ]
  }

  handleCycleChange = (event) => {
    this.setState({
      cycleValue: event.target.value
    })
  }

  onSettingClose = () => {
    this.setState({
      isSettingOpen: false
    });
  }

  onSettingClick = () => {
    this.setState({
      isSettingOpen: true
    });
  }

  getRandomWorkout = (exercises, exerciseGroups) => {
    const groups = exerciseGroups.map(group => {
      if (this.state[group.name]) {
        return group.name;
      };
    })

    const { cyclePreSet, cylceExerciseTime, cycleSetExerciseCount, cycleCount } = this.state;
    const workout = getWorkout({ exercises, settings: { cyclePreSet, cylceExerciseTime, cycleSetExerciseCount, groups, cycleCount} });
    const workoutArray = Object.entries(workout);
    const workoutTime = workoutArray.pop();

    return(
      <div className="workout">
        <div className="workout-time heading-tertiary">
          Workout time: {workoutTime[1] / 60}min
        </div>
        {workoutArray.map(workoutSet => {
          return (
            <WorkoutSetCard workoutSet={workoutSet}/>
          );
        })}
      </div>
    );
  }

  render() {
    const groupsInfo = this.groupInfo();
    const cycleInfo = this.getCycleInfo();
    const workout = this.state.isWorkoutVisible ? this.getRandomWorkout(this.props.exercises, this.props.exerciseGroups) : undefined;
    const buttons = this.state.isWorkoutVisible ? 
      <div>
        <div onClick={() => this.setState({ isWorkoutVisible: true })} className="btn btn--primary btn--animated u-margin-right-small">Start Workout</div>
        <div onClick={() => this.setState({ isWorkoutVisible: true })} className="btn btn--primary__inverse btn--animated u-margin-left-small">Reload Workout</div>
      </div> 
        : 
      <div onClick={() => this.setState({ isWorkoutVisible: true })} className="btn btn--primary btn--animated">Get random Workout</div>;

    return (
      <div className="banner">
        <Header
          onSettingClick={this.onSettingClick}
        />
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Tiger</span>
            <span className="heading-primary--sub"></span>
          </h1>
          {workout}
          {buttons}
        </div> 
        <SettingModal
          isOpen={this.state.isSettingOpen}
          onRequestClose={this.onSettingClose}
          exerciseGroups={this.props.exerciseGroups}
          groups={groupsInfo}
          cycleInfo={cycleInfo}
        />
      </div>
    )
  }
}

export default Workout;