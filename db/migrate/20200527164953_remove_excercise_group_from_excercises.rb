class RemoveExcerciseGroupFromExcercises < ActiveRecord::Migration[6.0]
  def change
    remove_reference :exercises, :exercise_group, null: false, foreign_key: true
  end
end
