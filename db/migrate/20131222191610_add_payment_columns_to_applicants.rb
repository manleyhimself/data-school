class AddPaymentColumnsToApplicants < ActiveRecord::Migration
  def change
    add_column :applicants, :r_class_payment, :integer
    add_column :applicants, :python_class_payment, :integer
    add_column :applicants, :r_session, :boolean
    add_column :applicants, :python_session, :boolean
    add_column :applicants, :total_paid, :integer
  end
end
