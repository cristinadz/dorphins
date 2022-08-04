class RegistrationSerializer < ActiveModel::Serializer
  attributes :id, :paid_fee
  has_one :event
  has_one :user


end
