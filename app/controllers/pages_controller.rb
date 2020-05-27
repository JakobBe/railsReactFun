class PagesController < ApplicationController
  def home
    @products = {products: Product.all}
    exercises = Exercise.all
    exercises_with_groups = exercises.map do |exercise|
      { exercise: exercise, exerciseGroups: exercise.exercise_groups}
    end
    @props = { exercises: exercises_with_groups }
  end
end
