class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :fee, :category
end
