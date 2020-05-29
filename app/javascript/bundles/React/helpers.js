const times = x => f => {
  if (x > 0) {
    f()
    times(x - 1)(f)
  }
}

const getWorkout = ({ exercises, settings }) => {
  const { cyclePreSet, cylceExerciseTime, cycleSetExerciseCount, groups, cycleCount } = settings;
  const workout = {};
  let i = 1;

  if (cyclePreSet === 0) {
    groups.map(group => {
      workout[group] = [];
      let helperArr = [];
      exercises.map(exercise => {
        if (exercise.exerciseGroups.find(exerciseGroup => exerciseGroup.name === group) !== undefined) {
          helperArr.push(exercise.exercise.name);
        }
      });
      times(cycleSetExerciseCount) (() => {
        workout[group].push(helperArr[Math.floor(Math.random() * helperArr.length)])
      });
      i += 1;
    });
  }

  const workoutTimeInSec = groups.length * cycleSetExerciseCount * cylceExerciseTime * cycleCount + groups.length * 60;
  workout['workoutTime'] = workoutTimeInSec;

  return workout;
}

export { getWorkout };