class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.string :link
      t.integer :view
      t.integer :like

      t.timestamps null: false
    end
  end
end
