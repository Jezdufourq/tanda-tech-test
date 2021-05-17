class CreateOrganisations < ActiveRecord::Migration[6.1]
  def change
    create_table :organisations do |t|
      t.string :name
      t.integer :hourly_rate

      t.timestamps
    end
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :password_reset_answer

      t.timestamps
    end
    create_table :shifts do |t|
      t.datetime :start_time
      t.datetime :end_time
      t.integer :break_length
      t.belongs_to :user, foreign_key: true
      t.belongs_to :organisation, foreign_key: true
      t.timestamps
    end
    create_table :organisation_users do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :organisation, foreign_key: true

      t.timestamps
    end
  end
end
