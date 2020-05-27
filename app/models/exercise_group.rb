class ExerciseGroup < ApplicationRecord
  has_many :exercise_group_links
  has_many :exercises, through: :exercise_group_links
end
