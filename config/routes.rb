Rails.application.routes.draw do
  root 'pages#home'

  get '/projets', to: 'pages#projects', as: 'projects'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
