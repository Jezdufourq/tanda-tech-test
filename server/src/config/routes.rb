Rails.application.routes.draw do
  root 'pages#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      post '/sign-in', to: 'auth#create'
      post '/sign-up', to: 'users#create'
      get '/current-user', to: 'auth#show'
      put '/reset-password', to: 'auth#update'
      delete '/logout', to: 'auth#destroy'

      # post org
      # put org
      # get org
      # del org
      resources :organisations

      # get shifts on org id
      # post shifts
      # put shifts
      # delete shifts
      resources :shifts

      resources :users
      namespace :user do
        # post org_users - joining an organisation
        # del org_users - removing yourself from organisation
        get '/organisation', to: 'organisation_user#index'
        post '/join-organisation', to: 'organisation_user#create'
        delete '/leave-organisation', to: 'organisation_user#destroy'
      end

    end
  end

  get '*path', to: 'pages#index', via: :all
end
