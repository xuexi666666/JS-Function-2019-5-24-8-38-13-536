function alphabetSort(message){
  // wirte your code here
  return message.toLowerCase().split("").sort(function(f,l){
				if(f < l){
					return -1;
				}else if(f > l){
					return 1;
				}else{
					return 0;
				}
			}).join("");
}
alphabetSort('hello'); // should return 'ehllo'

