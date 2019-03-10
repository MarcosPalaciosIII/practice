# to display something on the same line, use print.
print "Hello World!"

# if you want to start a new line, use puts
puts "Hello World!"

# if you place a puts after a print, it will add the puts on the same line as the print.
# also, adding a print after a puts will add to the same line

print "Hello!"
puts "Hello!"
puts "World!"
print "World!"
print "World!"
print "World!"
puts "World!"
puts "World!"
puts "World!"
puts "World!"
puts "World!"



# in order to get the length of something, use .length
puts "hello World!".length

# to have everything in cap, use .upcase
puts "hello World!".upcase

# to have everything in lowercase, use .downcase
puts "hello World!".downcase

# in order to see the input in reverse, use .reverse
puts "hello World!".reverse



 # to make a single line comment, use #.
 # to make a multiline comment, do this
=begin
this is for a
multiline comment
=end



# you can link methods together in one line like so
puts name = "Marcos".downcase.reverse.upcase



# if you need to get an input from the user, use gets.chomp
print "What's your first name? "
first_name = gets.chomp
# to capitalize the first letter of the string, use .capitalize!
# using .capitalize without the ! will only show the first letter capped if using in a print or put. To store the value of the cap first letter to a variable, you must use the !.
first_name.capitalize!

print "What's your last name? "
last_name = gets.chomp
last_name.capitalize!

print "What city are you from? "
city = gets.chomp
city.capitalize!

print "What state or province are you from? "
state = gets.chomp
state.upcase!

# you can concatenate variables into strings using #{var_name}
puts "Your name is #{first_name} #{last_name} and you're from #{city}, #{state}!"



# if elsif conditions

puts "What is your favorite animal?"
animal = gets.chomp
if animal == “Dog”
  print “You like dogs. Woof!”
elsif animal == “Cat”
  print “You like cats. Meow!”
else
  print "You don’t like cats or dogs? Okay.”
end



# for loops

numbers = [1,2,3]
for element in numbers
  puts "-> #{element}"
end

# ======================

x = gets.chomp.to_i

for i in 1..x do
  puts i
end

puts "Done!"

# =======================

x = [1, 2, 3, 4, 5]

for i in x do
  puts i
end

puts "Done!"



# while loops

string = ""

# While the string's length is less than 10
while string.length < 10
  # Add an 'a'
  string = string + 'a'
end

puts "The final string is #{string}"

# ========================

x = gets.chomp.to_i

while x >= 0
  puts x
  x = x - 1
end

puts "Done!"

# conditionals in while loops

x = 0

while x <= 10
  if x.odd?
    puts x
  end
  x += 1
end

# conditionals in while loop with next

x = 0

while x <= 10
  if x == 3
    x += 1
    next
  elsif x.odd?
    puts x
  end
  x += 1
end

# conditional while loop with break to display only odd numbers

x = 0

while x <= 10
  if x == 7
    break
  elsif x.odd?
    puts x
  end
  x += 1
end



# iterating through arrays with each loop
# an each loop will not modify the original array
# each is better used for iteration while maps are better used for transformations

numbers = ["one", 2, "three"]
numbers.each do |item|
  puts "--> #{item}"
end

# ===================

names = ['Bob', 'Joe', 'Steve', 'Janice', 'Susan', 'Helen']
x = 1

names.each do |name|
  puts "#{x}. #{name}"
  x += 1
end

print names

# =====================

a = [1, 2, 3]
a.each { |e| puts e + 2 }

# 3
# 4
# 5
# => [1, 2, 3]


# just like arrays, same can be done for a Hash

my_hash = {}
my_hash["AST"] = "Asturias"
my_hash["GAL"] = "Galicia"
my_hash["CAT"] = "Catalunya"

my_hash.each do |key,value|
  puts "#{key} stands for #{value}"
end



# loops do examples

i = 0
loop do
  i += 1
  puts i
  break         # this will cause execution to exit the loop
end



# loop do with conditional

i = 0
loop do
  i += 2
  puts i
  if i == 10
    break       # this will cause execution to exit the loop
  end
end


# loop do with next

i = 0
loop do
  i += 2
  if i == 4
    next        # skip rest of the code in this iteration
  end
  puts i
  if i == 10
    break
  end
end



# mapping through an array
# maps are better used for transformations while each is better used for iteration

a = [1, 2, 3]
a.map do |num|
  if num.even?
    'even'
  else
    num
  end
end
# console output
=> [1, "even", 3]



# using .select to iterate over an array (this method will not mutate the array)

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 # => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.select { |number| number > 4 }
 # => [5, 6, 7, 8, 9, 10]



 # to know if something is contained within an array, use .include?

a = [1, 2, 3, 4, 5]
# => [1, 2, 3, 4, 5]
a.include?(3)
# => true
a.include?(6)
# => false



# to convert an array to a string, us to_s. This is automatically done when doing interpolation

a = [1, 2, 3]
# => [1, 2, 3]
"It's as easy as #{a}"
# => "It's as easy as [1, 2, 3]"



# .flatten can be used to convert an array of arrays into a single array
a = [1, 2, [3, 4, 5], [6, 7]]
# => [1, 2, [3, 4, 5], [6, 7]]
a.flatten
# => [1, 2, 3, 4, 5, 6, 7]


# you can use each_index to find out the index of all elements within an array, this does not show you the elements

a = [1, 2, 3, 4, 5]
# => [1, 2, 3, 4, 5]
a.each_index { |i| puts "This is index #{i}" }
# This is index 0
# This is index 1
# This is index 2
# This is index 3
# This is index 4
# => [1, 2, 3, 4, 5]



# to manipulate both the value and the index of each element in an array, you can use each_with_index

a = [1, 2, 3, 4, 5]
# => [1, 2, 3, 4, 5]
a.each_with_index { |val, idx| puts "#{idx+1}. #{val}" }
# 1. 1
# 2. 2
# 3. 3
# 4. 4
# 5. 5
# => [1, 2, 3, 4, 5]



# .product can be used to combine two array by making an array of array using first element of first array and first element of second array and it makes 1 array. It repeats this process by iterating over the 2nd array using first array elements as index 0 until it reach final 2 elements

[1, 2, 3].product([4, 5])
# => [[1, 4], [1, 5], [2, 4], [2, 5], [3, 4], [3, 5]]



# simple recursion example to have number be greater than 10

def doubler(start)
  puts start
  if start < 10
    doubler(start * 2)
  end
end

puts doubler(2)



# fibonacci example

def fibonacci(number)
  if number < 2
    number
  else
    fibonacci(number - 1) + fibonacci(number - 2)
  end
end

puts fibonacci(6)



# FizzBuzz example

for i in 1..75 do
  if i % 3 == 0 && i % 5 ==0
    puts "FizzBuzz"
  elsif i % 3 == 0
    puts "Fizz"
  elsif i % 5 == 0
    puts "Buzz"
  else
    puts i
  end
end



# hashes are the same as objects in js

# this is the old syntax for hashes
old_syntax_hash = {:name => 'bob'}
# => {:name=>'bob'}

# this is the newer syntax when creating a hash
new_hash = {name: 'bob'}
# => {:name=>'bob'}

# like objects, hashes can have multiple key: value pairs
person = { height: '6 ft', weight: '160 lbs' }
# => {:height=>'6 ft', :weight=>'160 lbs'}

# if you would like to add to a hash, this is how you can do that
person[:hair] = 'brown'
# => "brown"
puts person
# => {:height=>'6 ft', :weight=>'160 lbs', :hair=>'brown'}

person[:age] = 62
# => 62
puts person
# => {:height=>'6 ft', :weight=>'160 lbs', :hair=>'brown', :age=>62}

# to delete an element from a hash use .delete()
person.delete(:age)
# => 62
person
# => {:height=>'6 ft', :weight=>'160 lbs', :hair=>'brown'}

# to print the value of a specified value
person[:weight]
# => "160 lbs"

# if you would like to merge another hash to the one you have use merge!
person.merge!(new_hash)
# => {:height=>'6 ft', :weight=>'160 lbs', :hair=>'brown', :name=>'bob'}



# iterating over hashes

person = {name: 'bob', height: '6 ft', weight: '160 lbs', hair: 'brown'}

person.each do |key, value|
  puts "Bob's #{key} is #{value}"
end



# optional parameters

def greeting(name, options = {})
  if options.empty?
    puts "Hi, my name is #{name}"
  else
    puts "Hi, my name is #{name} and I'm #{options[:age]}" +
         " years old and I live in #{options[:city]}."
  end
end

greeting("Bob")
greeting("Bob", {age: 62, city: "New York City"})

# when a hash is the last argument, the {} is not required

greeting("Bob", age: 62, city: "New York City")



# to see if a hash has a specific key, you can use has_key?

name_and_age = { "Bob" => 42, "Steve" => 31, "Joe" => 19}
# => {"Bob"=>42, "Steve"=>31, "Joe"=>19}
name_and_age.has_key?("Steve")
# => true
name_and_age.has_key?("Larry")
# => false


# select allows you to pass in a block to check if the condition is true and return the key: value pair

name_and_age.select { |k,v| k == "Bob" }
# => {"Bob"=>42}
name_and_age.select { |k,v| (k == "Bob") || (v == 19) }
# => {"Bob"=>42, "Joe"=>19}

# with fetch you can pass in a key and if it exists, it will return the value

name_and_age.fetch("Steve")
# => 31
name_and_age.fetch("Larry")
# => KeyError: key not found: "Larry"
name_and_age.fetch("Larry", "Larry isn't in this hash")
# => "Larry isn't in this hash"


# to_a is used to return an array version of your hash

name_and_age.to_a
# => [["Bob", 42], ["Steve", 31], ["Joe", 19]]
name_and_age
# => {"Bob"=>42, "Steve"=>31, "Joe"=>19}


# if you want to get only the keys or values of the array, use .key or .values

name_and_age.keys
# => ["Bob", "Steve", "Joe"]
name_and_age.values
# => [42, 31, 19]



# Ruby and RegEx

# when using regex within a conditional statement, you can use the =~ operator

"powerball" =~ /b/
# => 5

# since 5 is considered truthy, it can then be used as a boolean value like so

def has_a_b?(string)
  if string =~ /b/
    puts "We have a match!"
  else
    puts "No match here."
  end
end

has_a_b?("basketball")
# We have a match!
has_a_b?("football")
# We have a match!
has_a_b?("hockey")
# No match here.
has_a_b?("golf")
# No match here.


# there is also the match method which will return a MatchData object that describes the match or a nil if no match

/b/.match("powerball")
# => #<MatchData "b">

def has_a_b?(string)
  if /b/.match(string)
    puts "We have a match!"
  else
    puts "No match here."
  end
end

has_a_b?("basketball")
# We have a match!
has_a_b?("football")
# We have a match!
has_a_b?("hockey")
# No match here.
has_a_b?("golf")
# No match here.



# Ruby has many standard classes that can be used to accomplish things.
# one of these is the Math class


# Math.sqrt() gives you the square root of the given number
Math.sqrt(400)
# => 20.0


# Math::PI is a constant that comes with the Math class. Therefore we are using a :: syntax rather than a . syntax
Math::PI
# => 3.141592653589793


# there is also a Time class that can be used for things like finding out if July 4th lands on a Friday

t = Time.new(2008, 7, 4)
# => 2008-07-04 00:00:00 -0400
t.monday?
# => false
t.friday?
# => true



# when using variables, the = and << do different things
# the = sets a variable to be something else
# but the << mutates the original variable and add's to it
a = "hi there"
b = a
a << ", Bob"
# => "hi there, Bob"


# simple function example

def test(b)
  b.map {|letter| "I like the letter: #{letter}"}
end

a = ['a', 'b', 'c']
test(a)

# ["I like the letter: a", "I like the letter: b", "I like the letter: c"]



# passing block

def take_block(&block)
  block.call
end

take_block do
  puts "Block being called in the method!"
end

# the & infront of a parameter means it is a block. It can be named anything you want.
# The block must always be the last parameter in the method definition. When we're ready to use the method, we call it like any other method: take_block.
# The only difference is that because this method can accept a block, we can pass in a block of code using do/end.


def take_block(number, &block)
  block.call(number)
end

number = 42
take_block(number) do |num|
  puts "Block being called in the method! #{num}"
end



# Procs examples
# Procs are blocks that are wrapped in a proc object and stored in a variable to be passed around.

talk = Proc.new do
  puts "I am talking."
end

talk.call

# Procs can also take arguments if specified.

talk = Proc.new do |name|
  puts "I am talking to #{name}"
end

talk.call "Bob"


# Procs can even be passed into methods

def take_proc(proc)
  [1, 2, 3, 4, 5].each do |number|
    proc.call number
  end
end

proc = Proc.new do |number|
  puts "#{number}. Proc being called in the method!"
end

take_proc(proc)



# Exemption Handling
# Exception handling is a specific process that deals with errors in a manageable and predictable way
# It also has a syntactic structure using the reserved words begin, rescue, and end to signify exception handling.

begin
  # perform some dangerous operation
rescue
  # do this if operation fails
  # for example, log the error
end

#  =========================

names = ['bob', 'joe', 'steve', nil, 'frank']

names.each do |name|
  begin
    puts "#{name}'s name has #{name.length} letters in it."
  rescue
    puts "Something went wrong!"
  end
end


# inline exception using rescue

zero = 0
puts "Before each call"
zero.each { |element| puts element } rescue puts "Can't do that!"
puts "After each call"

# Before each call
# Can't do that!
# After each call

# without the rescue syntax, the code would have stopped if it recieved a value that it cannot process


def divide(number, divisor)
  begin
    answer = number / divisor
  rescue ZeroDivisionError => e
    puts "--error--", e.message, "-----------"
  end
end

puts divide(16, 4)
# => 4
puts divide(4, 0)
# => --error--
# => divided by 0
# => -----------
puts divide(14, 7)
# => 2
