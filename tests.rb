require 'test/unit'
require 'numbers'

class Tests < Test::Unit::TestCase

  def test_single_digits
    assert_equal('zero',  as_word(0))
    assert_equal('one',   as_word(1))
    assert_equal('two',   as_word(2))
    assert_equal('three', as_word(3))
    assert_equal('four',  as_word(4))
    assert_equal('five',  as_word(5))
    assert_equal('six',   as_word(6))
    assert_equal('seven', as_word(7))
    assert_equal('eight', as_word(8))
    assert_equal('nine',  as_word(9))
  end
  
  def test_two_digits_multiples_of_ten
    assert_equal('ten',     as_word(10))
    assert_equal('twenty',  as_word(20))
    assert_equal('thirty',  as_word(30))
    assert_equal('fourty',  as_word(40))
    assert_equal('fifty',   as_word(50))
    assert_equal('sixty',   as_word(60))
    assert_equal('seventy', as_word(70))
    assert_equal('eighty',  as_word(80))
    assert_equal('ninety',  as_word(90))  
  end

  def test_two_digits_non_multiples_of_ten
    assert_equal('twenty-three',  as_word(23))
    assert_equal('fourty-two',    as_word(42))
    assert_equal('seventy-eight', as_word(78))  
  end
  
  def test_exceptions_between_ten_and_twenty
    assert_equal('eleven',    as_word(11))
    assert_equal('twelve',    as_word(12))
    assert_equal('thirteen',  as_word(13))
    assert_equal('fourteen',  as_word(14))
    assert_equal('fifteen',   as_word(15))
    assert_equal('sixteen',   as_word(16))
    assert_equal('seventeen', as_word(17))
    assert_equal('eighteen',  as_word(18))
    assert_equal('nineteen',  as_word(19)) 
  end

  def test_hundreds
    assert_equal('one hundred',                  as_word(100))
    assert_equal('one hundred and five',         as_word(105))
    assert_equal('three hundred and twenty-six', as_word(326))  
    assert_equal('nine hundred and ninety-nine', as_word(999))  
  end

  def test_thousands
    assert_equal('one thousand',                               as_word(1000))
    assert_equal('one thousand one',                           as_word(1001))
    assert_equal('one thousand fifty-four',                    as_word(1054))
    assert_equal('four thousand two hundred',                  as_word(4200))  
    assert_equal('four thousand seven hundred and sixty',      as_word(4760))  
    assert_equal('nine thousand nine hundred and ninety-nine', as_word(9999))  
  end

  def test_tens_of_thousands
    assert_equal('ten thousand',                         as_word(10000))
    assert_equal('fifteen thousand eleven',              as_word(15011))
    assert_equal('fourty thousand six hundred and five', as_word(40605))  
  end

  def test_hundreds_of_thousands
    assert_equal('one hundred and twenty-three thousand four hundred and fifty-six', as_word(123456))
  end

  def test_millions_up_to_hundreds_of_millions
    assert_equal('one million', as_word(1000000))
    assert_equal('ten million sixty thousand three hundred', as_word(10060300))
    assert_equal('nine hundred and ninety-nine million', as_word(999000000))
    assert_equal('nine hundred and ninety-nine million nine hundred and ninety-nine thousand nine hundred and ninety-nine', as_word(999999999))
  end

  def test_trillions
    assert_equal('seventy trillion five million five thousand two hundred and three', as_word(70005005203))
  end
    
end
