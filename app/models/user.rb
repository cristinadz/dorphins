class User < ApplicationRecord
    has_many :runs
    has_many :registrations
    has_many :events, through: :registrations

    has_secure_password
    validates :username, presence: true, uniqueness: true
end
