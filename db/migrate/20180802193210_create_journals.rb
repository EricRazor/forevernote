class CreateJournals < ActiveRecord::Migration[5.0]
  def change
    create_table :journals do |t|
      t.text :body
    end
  end
end
