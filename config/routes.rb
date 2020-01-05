Rails.application.routes.draw do
  root 'pages#home'

  get '/projets', to: 'pages#projects', as: 'projects'
  get '/services', to: 'pages#services', as: 'services'
  get '/equipe', to: 'pages#team', as: 'team'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
