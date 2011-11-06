// Algorithm: isolate the "head" and the "tail" of the number, and recurse on both
// Take 3728, biggest magnitude is thousands, so the head is 3. Process 3 and 728.
// Take  728, biggest magnitude is hundreds, so head is 7. Process 7 and 28
// Take   28, biggest magnitude is tens, so head is 20. Process 20 and 8
// We have words for 3, 7, 20 and 8 so the recursion ends here

var cardinal = (function() {
	
	var words = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'fourty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety' };
	
	var magnitudes = {
	  10:          { head: function(x) { return Math.floor(x/10) * 10;    }, suffix: '',          link: '-'     },
	  100:         { head: function(x) { return Math.floor(x/100);        }, suffix: ' hundred',  link: ' and ' },
	  1000:        { head: function(x) { return Math.floor(x/1000);       }, suffix: ' thousand', link: ' '     },
	  1000000:     { head: function(x) { return Math.floor(x/1000000);    }, suffix: ' million',  link: ' '     },
	  1000000000:  { head: function(x) { return Math.floor(x/1000000000); }, suffix: ' trillion', link: ' '     }
	};
	
	var reverseMagnitudes = Object.keys(magnitudes).reverse();
		
	function of(number) {
		
		function extractHeadAndRecurse() {
			var divider = biggestDivider(number);
			var magnitude = magnitudes[divider];
			var head = magnitude.head(number);
			var tail = number % divider;
			if (tail === 0) {
				return of(head) + magnitude.suffix;
			} else {
				return of(head) + magnitude.suffix + magnitude.link + of(tail);
			}
		}
	
		function biggestDivider() {
			var biggerThan = function(x) { return number >= x; };
			return reverseMagnitudes.filter(biggerThan)[0];
		}	

		return (number in words) ? words[number] : extractHeadAndRecurse();
				
	}
	
	return {
		of: of
	};
	
}());
