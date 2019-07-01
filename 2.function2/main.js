function palindrome(message){
   let reg = /[\W_]/g; // \w 匹配所有字母和数字以及下划线； \W与之相反； [\W_] 表示匹配下划线或者所有非字母非数字中的任意一个；/g全局匹配
    let newStr = str.replace(reg, '').toLowerCase();
    let reverseStr = newStr.split('').reverse().join('')
    return reverseStr === newStr; // 与 newStr 对比
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true

