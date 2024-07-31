class FigmaSubModule < ActiveRecord::Base
  belongs_to :figma_module
  has_many :figma_forms
end
