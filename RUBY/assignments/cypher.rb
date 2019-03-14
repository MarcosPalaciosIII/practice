# this is practice cipher that is 1 letter of from the input
def solve_cipher(input)
  letterArray = ('a'..'z').to_a
  tempArray = []
  input.split('').each do |chr|
    tempArray.append(letterArray[letterArray.index(chr) - 1])
  end
  return tempArray.join('')
end

solve_cipher("ifmmp")
# should return "hello"



# this is the Ceaser Cipher which is 3 letters off (used in Roman times / white spaces included)
def solveCipher(input)
  letterArray = ('a'..'z').to_a
  tempArray = []
  input.split('').each do |chr|
    if chr === ' '
      tempArray.append(' ')
    else
      tempArray.append(letterArray[letterArray.index(chr) - 3])
    end
  end
  return tempArray.join('')
end

solveCipher("khoor wkhuh")


# this will create a Ceaser Cipher to be used (white spaces included)
def createCipher(input)
  letterArray = ('a'..'z').to_a
  tempArray = []
  input.split('').each do |chr|
    if chr === ' '
      tempArray.append(' ')
    else
      tempArray.append(letterArray[letterArray.index(chr) + 3])
    end
  end
  return tempArray.join('')
end

createCipher("hello there")


# cipher for the user to decide whether to have negative or positive cipher coding (can be used to code and decode)
def userCipher(input, cipher)
  letterArray = ('a'..'z').to_a
  tempArray = []

  input.split('').each do |chr|
    if chr === ' '
      tempArray.append(' ')
    else
      if cipher <= 0
        if letterArray.index(chr) - cipher.to_s.split('')[1].to_i

          theIndex = 26 - letterArray.index(chr) - cipher.to_s.split('')[1].to_i
          
          tempArray.append(letterArray[theIndex])
        else
          tempArray.append(letterArray[letterArray.index(chr) - cipher.to_s.split('')[1].to_i])
        end
      else
        if letterArray.index(chr) + cipher > 26
          puts "the index after 26", letterArray.index(chr) + cipher

          theIndex = letterArray.index(chr) + cipher - 26

          tempArray.append(letterArray[theIndex])
        else
          tempArray.append(letterArray[letterArray.index(chr) + cipher])
        end
      end
    end
  end
  return tempArray.join('')
end

userCipher("hello there z", 3)
