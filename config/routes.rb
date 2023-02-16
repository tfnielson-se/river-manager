Rails.application.routes.draw do
  #user routes
  get '/users', to: 'user#index'
  get '/users/:id', to: 'user#show'
  get '/users/:id/total_earnings', to: 'user#total_earnings'
  patch '/users/:id', to: 'user#update'
  post '/users', to: 'user#create'
  delete '/users/:id', to: 'user#destroy'

  #job routes
  get '/jobs', to: 'job#index'
  get '/jobs/:id', to: 'job#show'
  patch '/jobs/:id', to: 'job#update'
  post '/jobs', to: 'job#create'
  delete '/jobs/:id', to: 'job#destroy'

# completedob routes
 get '/completed_jobs', to: 'completed_jobs#index'
 get '/completed_jobs/:id', to: 'completed_jobs#show'
 patch '/completed_jobs/:id', to: 'completed_jobs#update'
 post '/completed_jobs', to: 'completed_jobs#create'
 delete '/completed_jobs/:id', to: 'completed_jobs#destroy'
end
