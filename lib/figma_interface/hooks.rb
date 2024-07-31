module FigmaInterface
  class Hooks < Redmine::Hook::ViewListener
    render_on :view_issues_show_description_bottom, partial: 'hooks/form_builder'
  end
end
