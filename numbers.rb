# Algorithm: isolate the "head" and the "tail" of the number, and recurse on both
# Take 3728, biggest magnitude is thousands, so the head is 3. Process 3 and 728.
# Take  728, biggest magnitude is hundreds, so head is 7. Process 7 and 28
# Take   28, biggest magnitude is tens, so head is 20. Process 20 and 8
# We have words for 3, 7, 20 and 8 so the recursion ends here

$words = {
  0 => 'zero', 1 => 'one', 2 => 'two', 3 => 'three', 4 => 'four', 5 => 'five', 6 => 'six', 7 => 'seven', 8 => 'eight', 9 => 'nine',
  10 => 'ten', 11 => 'eleven', 12 => 'twelve', 13 => 'thirteen', 14 => 'fourteen', 15 => 'fifteen', 16 => 'sixteen', 17 => 'seventeen', 18 => 'eighteen', 19 => 'nineteen',
  20 => 'twenty', 30 => 'thirty', 40 => 'fourty', 50 => 'fifty', 60 => 'sixty', 70 => 'seventy', 80 => 'eighty', 90 => 'ninety'
}

$magnitudes = {
  10     => { :head => lambda { |x| (x.div 10) * 10    }, :word => '',          :link => '-'     },
  100    => { :head => lambda { |x| (x.div 100)        }, :word => ' hundred',  :link => ' and ' },
  1000   => { :head => lambda { |x| (x.div 1000)       }, :word => ' thousand', :link => ' '     },
  10**6  => { :head => lambda { |x| (x.div 10**6)      }, :word => ' million',  :link => ' '     },
  10**9  => { :head => lambda { |x| (x.div 10**9)      }, :word => ' trillion', :link => ' ',    }
}

def as_word(number)
  return $words[number] if $words.key?(number)
  return extract_head_and_recurse(number)
end

def extract_head_and_recurse(number)
  divider = biggest_divider(number)
  magnitude = $magnitudes[divider]
  head = magnitude[:head].call(number)
  tail = number.modulo(divider)
  return as_word(head) + magnitude[:word] if tail == 0
  return as_word(head) + magnitude[:word] + magnitude[:link] + as_word(tail)
end

def biggest_divider(number)
  $magnitudes.keys.sort.reverse.find { |x| number >= x }
end
