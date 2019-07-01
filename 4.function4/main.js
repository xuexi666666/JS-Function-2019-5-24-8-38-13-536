function countWords(message){
  // wirte your code here
  let reg = /[\W_]/g; // \w 匹配所有字母和数字以及下划线； \W与之相反； [\W_] 表示匹配下划线或者所有非字母非数字中的任意一个；/g全局匹配
    let newStr = message.replace(reg, ',');
    let reverseStr = newStr.split(',')
    var count = 0;  
    for (var i = 0; i < reverseStr.length; i++) {
    	if(reverseStr[i]!=""){
    		count++;
    	}
    }
    return count;
}
countWords('Good morning, I love JavaScript.'); // should return 5

