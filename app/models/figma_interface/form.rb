class FigmaForm < ActiveRecord::Base
  belongs_to :figma_sub_module
  serialize :form_structure, JSON
end
