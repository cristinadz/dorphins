class PlanSerializer < ActiveModel::Serializer
  attributes :id, :name, :number_of_runs, :category, :description
end
