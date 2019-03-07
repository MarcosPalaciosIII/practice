print "Please enter your statement: "
user_input = gets.chomp
user_input.downcase!

if user_input.include? "s"
  user_input.gsub!(/s/, "th")
  puts user_input
  else
  puts "you do not have the magic letter in your statement!"
end

# need to utilize rails in order to get code to start working !!!
