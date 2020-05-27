class CreateExerciseGroupLinks < ActiveRecord::Migration[6.0]
  def change
    create_table :exercise_group_links do |t|
      t.references :exercise_group, null: false, foreign_key: true
      t.references :exercise, null: false, foreign_key: true

      t.timestamps
    end
  end
end
