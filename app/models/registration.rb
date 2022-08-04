class Registration < ApplicationRecord
  belongs_to :event
  belongs_to :user

  validates :event_id, presence: true, uniqueness: true

end
