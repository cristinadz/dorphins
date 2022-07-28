puts "planting some events..."

e1 = Event.create( name: "Pacific Beach Half Marathon", date: DateTime.new(2022, 10, 1), fee: 115, category: "half marathon" )
e2 = Event.create( name: "San Diego Santa Run", date: DateTime.new(2022, 12, 10), fee: 50, category: "5K" )
e3 = Event.create( name: "Resolution Run", date: DateTime.new(2023, 1, 14), fee: 30, category: "10K" )
e4 = Event.create( name: "Hidden World 5K", date:DateTime.new(2022, 10, 23), fee: 60, category: "5K" )
e5 = Event.create( name: "Pasadena Trail", date: DateTime.new(2022, 10, 16) , fee: 75, category: "half marathon" )
e6 = Event.create( name: "Long Beach Marathon", date: DateTime.new(2022, 10, 9), fee: 130, category: "marathon" )
e7 = Event.create( name: "Beach Fiesta", date: DateTime.new(2022, 11, 5), fee: 130, category: "half marathon" )
e8 = Event.create( name: "Silicon Valley Turkey Trot", date: DateTime.new(2022, 11, 24), fee: 40, category: "10K" )

puts "writing plans..."

p1 = Plan.create( name: "5K Training Plan", number_of_runs: 18, category: "5K", description: "", weeks: 6)
p2 = Plan.create( name: "Marathon Training Plan", number_of_runs: 70, category: "marathon", description: "This training plan is built to help the best version of you reach the starting line of your Marathon. The program is a maximum of 18 weeks long and we recommend that you begin this program no less than 12 weeks before your race date.", weeks: 18)
p3 = Plan.create( name: "Half Marathon", number_of_runs: 56, category: "half marathon", description: "This training plan is built to help the best version of you reach the starting line of your Half Marathon. The program is a maximum of 14 weeks long and we recommend that runners do at least 3 runs per week.", weeks: 14)

puts "done <3"