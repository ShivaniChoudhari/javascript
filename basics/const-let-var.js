//Mostly use let and const
/*var is not preferred since it gives issues when it comes to block and conditional scopes that is
it cant be accessed outside of scope {} */

const accountId = 124;

let accountName = "Shivanee";

var accountCity = "Pune";

var accountState;

console.table([accountId, accountName, accountCity, accountState]);