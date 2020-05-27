class CreateExerciseGroups < ActiveRecord::Migration[6.0]
  def change
    create_table :exercise_groups do |t|
      t.string :name

      t.timestamps
    end
  end
end
