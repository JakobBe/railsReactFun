class Exercise < ApplicationRecord
  has_many :exercise_group_links
  has_many :exercise_groups, through: :exercise_group_links
end
