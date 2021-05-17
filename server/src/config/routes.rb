Rails.application.routes.draw do
  root 'pages#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users
      resources :shifts
      post '/login', to: 'auth#create'
      get '/current_user', to: 'auth#show'
      post '/sign_up', to: 'users#create'
      put '/reset_password', to: 'auth#update'

      # /log_out log out auth route

      # post org
      # put org
      # get org
      # del org
      resources :organisations

      # post org_users
      # del org_users

      # get shifts on org id
      # post shifts
      # put shifts
      # delete shifts


    end
  end

  get '*path', to: 'pages#index', via: :all
end
