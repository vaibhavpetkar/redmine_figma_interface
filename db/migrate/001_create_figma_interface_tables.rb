class CreateFigmaInterfaceTables < ActiveRecord::Migration[6.0]
  def change
    create_table :figma_modules do |t|
      t.string :name
      t.timestamps
    end

    create_table :figma_sub_modules do |t|
      t.string :name
      t.references :figma_module, foreign_key: true
      t.timestamps
    end

    create_table :figma_forms do |t|
      t.json :form_structure
      t.references :figma_sub_module, foreign_key: true
      t.timestamps
    end
  end
end
