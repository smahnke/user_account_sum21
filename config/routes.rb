Rails.application.routes.draw do
  namespace :api do
    resource: users
  end
end