class RunSerializer < ActiveModel::Serializer
  attributes :id, :miles, :total_time, :date, :plan_id
  has_one :user
end
