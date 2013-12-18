json.array!(@applicants) do |applicant|
  json.extract! applicant, :id, :email, :name, :slug, :phone_number, :comment
  json.url applicant_url(applicant, format: :json)
end
