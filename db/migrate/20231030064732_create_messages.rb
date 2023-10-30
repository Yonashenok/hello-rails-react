class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.string :greeting, :default => ''

      t.timestamps
    end
  end
end
