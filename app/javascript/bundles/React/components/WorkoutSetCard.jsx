import React from 'react';

const WorkoutSetCard = ({ workoutSet }) => {
  let picClass = '';
  if (workoutSet[0] === 'Upper Body') {
    picClass = 'upper';
  } else {
    picClass = workoutSet[0].toLowerCase();
  }

  return (
    <div class="workout-set-card">
      <div class="workout-set-card__side workout-set-card__side--front">
        <div class={`workout-set-card__picture workout-set-card__picture--${picClass}`}>
          &nbsp;
              </div>
        <h4 class="workout-set-card__heading">
          <span class="workout-set-card__heading-span workout-set-card__heading-span--1">{workoutSet[0]}</span>
        </h4>
        <div class="workout-set-card__details">
          {workoutSet[1].map(exercise => {
            return (
              <div class="workout-set-card__details-text">
                {exercise}
              </div>
            );
          })}
        </div>
      </div>
      <div class="workout-set-card__side workout-set-card__side--back workout-set-card__side--back-1">
        <div class="workout-set-card__cta">
          Sign up in order to customize your workout and add new exersies.
          <a href={`#`} class="btn btn--sing-up">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default WorkoutSetCard;