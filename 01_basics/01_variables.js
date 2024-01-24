const accountId = 6164
let accountEmail="parth@google.com"
var accountPassword="parth"
accountCity="visnagar"
let accountStatus;

// accountId=61616131  // not allowed to change the const variable value

accountEmail="pc@pc.com"
accountPassword="12455122"
accountCity="mehsana"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountStatus])