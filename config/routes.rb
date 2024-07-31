RedmineApp::Application.routes.draw do
  resources :figma_interface, only: [:index, :show] do
    member do
      post 'create_module'
      post 'create_sub_module'
      post 'add_form'
    end
  end

  resources :forms, only: [:new, :create]
end
