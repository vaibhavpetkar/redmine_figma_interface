require 'redmine'
require 'figma_interface/hooks'

Redmine::Plugin.register :redmine_figma_interface do
  name 'Redmine Figma Interface Plugin'
  author 'Vaibhav Petkar'
  description 'This is a plugin for Redmine that provides a Figma-like form builder interface.'
  version '0.1.0'
  url 'https://github.com/vaibhavpetkar/redmine_figma_interface'
  author_url 'https://github.com/vaibhavpetkar/redmine_figma_interface'

  menu :project_menu, :figma_interface, { controller: 'figma_interface', action: 'index' }, caption: 'Form Builder', after: :activity, param: :project_id
end
