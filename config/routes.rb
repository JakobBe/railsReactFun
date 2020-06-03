Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  devise_for :users
  root to: 'pages#home'
  resources :products
  get 'workout', to: 'pages#workout'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
