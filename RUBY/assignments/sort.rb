firstString = "Have a nice day."
secondString = "Fools fall for foolish follies."
thirdString = "Ruby is a fun language!"

def convertToArray(string)
  tempArray = []
  for i in 0..string.split.length-1 do
    if /\W+/.match(string.split[i])
      tempArray.append(string.split[i].gsub!(/\W+/i, ''))
    else
      tempArray.append(string.split[i])
    end
  end
  return tempArray
end

firstArray = convertToArray(firstString).sort_by(&:downcase)
secondArray = convertToArray(secondString).sort_by(&:downcase)
thirdArray = convertToArray(thirdString).sort_by(&:downcase)


print firstArray
puts ''
print secondArray
puts ''
print thirdArray
