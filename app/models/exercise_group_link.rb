class ExerciseGroupLink < ApplicationRecord
  belongs_to :exercise_group
  belongs_to :exercise
end
