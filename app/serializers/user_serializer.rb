class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :email, :profile_img, :password_digest, :newsletter, :total_miles, :experience, :bio, :plan_id
  has_many :runs
  has_many :registrations
end
