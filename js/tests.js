describe('number', function() {

  it('can print single-digit numbers', function() {
    expect(cardinal.of(0)).toBe('zero');
    expect(cardinal.of(1)).toBe('one');
    expect(cardinal.of(2)).toBe('two');
    expect(cardinal.of(3)).toBe('three');
    expect(cardinal.of(4)).toBe('four');
    expect(cardinal.of(5)).toBe('five');
    expect(cardinal.of(6)).toBe('six');
    expect(cardinal.of(7)).toBe('seven');
    expect(cardinal.of(8)).toBe('eight');
    expect(cardinal.of(9)).toBe('nine');
  });
  
  it('can print cardinal.ofs between 10 and 20', function() {
    expect(cardinal.of(11)).toBe('eleven');
    expect(cardinal.of(12)).toBe('twelve');
    expect(cardinal.of(13)).toBe('thirteen');
    expect(cardinal.of(14)).toBe('fourteen');
    expect(cardinal.of(15)).toBe('fifteen');
    expect(cardinal.of(16)).toBe('sixteen');
    expect(cardinal.of(17)).toBe('seventeen');
    expect(cardinal.of(18)).toBe('eighteen');
    expect(cardinal.of(19)).toBe('nineteen'); 
  });
  
  it('can print two-digit cardinal.ofs multiples of ten', function() {
    expect(cardinal.of(10)).toBe('ten');
    expect(cardinal.of(20)).toBe('twenty');
    expect(cardinal.of(30)).toBe('thirty');
    expect(cardinal.of(40)).toBe('fourty');
    expect(cardinal.of(50)).toBe('fifty');
    expect(cardinal.of(60)).toBe('sixty');
    expect(cardinal.of(70)).toBe('seventy');
    expect(cardinal.of(80)).toBe('eighty');
    expect(cardinal.of(90)).toBe('ninety');
  });

  it('can print other two-digit cardinal.ofs', function() {
    expect(cardinal.of(23)).toBe('twenty-three');
    expect(cardinal.of(42)).toBe('fourty-two');
    expect(cardinal.of(78)).toBe('seventy-eight');
  });

  it('can print hundreds', function() {
    expect(cardinal.of(100)).toBe('one hundred');
    expect(cardinal.of(105)).toBe('one hundred and five');
    expect(cardinal.of(326)).toBe('three hundred and twenty-six');
    expect(cardinal.of(999)).toBe('nine hundred and ninety-nine');
  });

  it('can print thousands', function() {
    expect(cardinal.of(1000)).toBe('one thousand');
    expect(cardinal.of(1001)).toBe('one thousand one');
    expect(cardinal.of(1054)).toBe('one thousand fifty-four');
    expect(cardinal.of(4200)).toBe('four thousand two hundred');
    expect(cardinal.of(4760)).toBe('four thousand seven hundred and sixty');
    expect(cardinal.of(9999)).toBe('nine thousand nine hundred and ninety-nine');
  });

  it('can print tens of thousands', function() {
    expect(cardinal.of(10000)).toBe('ten thousand');
    expect(cardinal.of(15011)).toBe('fifteen thousand eleven');
    expect(cardinal.of(40605)).toBe('fourty thousand six hundred and five');
  });

  it('can print hundreds of thousands', function() {
    expect(cardinal.of(123456)).toBe('one hundred and twenty-three thousand four hundred and fifty-six');
  });

  it('can print millions up to hundreds of millions', function() {
    expect(cardinal.of(1000000)).toBe('one million');
    expect(cardinal.of(10060300)).toBe('ten million sixty thousand three hundred');
    expect(cardinal.of(999000000)).toBe('nine hundred and ninety-nine million');
    expect(cardinal.of(999999999)).toBe('nine hundred and ninety-nine million nine hundred and ninety-nine thousand nine hundred and ninety-nine');
  });

  it('can print trillions', function() {
    expect(cardinal.of(70005005203)).toBe('seventy trillion five million five thousand two hundred and three');
  });
    
});
