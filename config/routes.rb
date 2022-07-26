Rails.application.routes.draw do
  resources :plans, only: [:show, :index]
  resources :registrations, only: [:create, :index]
  resources :runs
  resources :events
  resources :users, only: [:create, :show, :update]
 
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }

end
 