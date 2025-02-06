var complexType = { name: "myName", id:1 }; //type can't be changed, but value can be 
complexType = { id:2, name:"anotherName" };
complexType = { id:2 };
complexType = { name:"anotherName" };
complexType = { address: "abc" };

complexType = { id:4, name:"name" };

console.log(complexType);