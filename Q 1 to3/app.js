//let person = "Eric"
//console.log ("Hello Eric, would you like to learn some python today?");
var personName = "Rafiha Siddiqui";
//console.log("lowercase:",personName.toLowerCase());
//console.log("uppercase:",personName.toUpperCase());
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
