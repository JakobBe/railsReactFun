import React from 'react';

const WorkoutSetCard = ({ workoutSet }) => {
  let picClass = '';
  if (workoutSet[0] === 'Upper Body') {
    picClass = 'upper';
  } else {
    picClass = workoutSet[0].toLowerCase();
  }

  return (
    <div class="workout__sets-set-card">
      <div class={`workout__sets-set-card__picture workout__sets-set-card__picture--${picClass}`}>
        &nbsp;
      </div>
      <h4 class="workout__sets-set-card__heading">
        <span class="workout__sets-set-card__heading-span workout__sets-set-card__heading-span--1">{workoutSet[0]}</span>
      </h4>
      <div class="workout__sets-set-card__details">
        {workoutSet[1].map(exercise => {
          return (
            <div class="workout__sets-set-card__details-text">
              {exercise}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkoutSetCard;