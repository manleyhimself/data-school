class AddCommentToApplicants < ActiveRecord::Migration
  def change
    add_column :applicants, :comment, :text
  end
end
