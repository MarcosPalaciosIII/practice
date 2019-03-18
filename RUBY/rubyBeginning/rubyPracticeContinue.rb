# Functions

def say_hello
  puts "Hello!"
end

# you can create a function with parameters as well

def sayHello(name)
  puts "Hello, #{name}"
end

sayHello("Marcos")
sayHello("Ana")

# you can also pass expressions as the parameter like so
sayHello("James" + "Bond")
# => "Hello, James Bond"


# Expressions are evaluated left to right, inner parentheses before outer parentheses, and with the operations following the normal rules of precedence

def add(a, b)
  puts a + b
end

add((5 * 5), (5 + 3))
# => 33
add((3 + 4) * 10, 8 - 4 / 2)
# => 76



# unless you use .call from inside the funtion, the block will not be called. You instead get a proc object
# the & allows for blocks to be passed as parameters
def execute(&block)
  # block
  block.call
end

execute { puts "Hello from inside the execute method!" }



# to create an array of letters you can use ('a'..'z').to_a for lowercase letter. You can do capital as well

# simple way to get a-z
# arr = ('a'..'z').to_a

# a bit more complex but good for doing print or puts
arr = ('a'..'Z').map do |letter|
  puts letter
end

# this method will return 1-9 and a-z
# arr = (0..36).map{|i| i.to_s 36}
print arr
