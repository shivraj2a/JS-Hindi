const accountId = 112233
let accountEmail = "shiv@gmail.com"
var accountPassword = "12345"
let accountState;
accountCity = "Thane"
accountEmail = "shiv123@gmail.com"
accountPassword = "121212"
accoontCity = "Mulund"
/* 
prefer not to use var 
because of issues in block scope and functional scope
 */
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
