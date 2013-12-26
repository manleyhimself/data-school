class AddPaymentColumnsToApplicants < ActiveRecord::Migration
  def change
    add_column :applicants, :total_paid, :integer
  end
end
