const accountId = 12345
let accountName = "Lisma"
var accountEmail = "lisma@gmail.com"
accountPlace = "Chennai"
let accountNumber;

accountName = "Sakshi"
accountEmail = "sakshi@gmail.com"
accountPlace = "Bengalore"

// 01 - never use var for declaring variables.
// 02 - if you'll leave the variable without declaring or just defining the output will be 'undefined'

console.log(accountName);

console.table([accountId ,accountName, accountEmail, accountPlace, accountNumber]);