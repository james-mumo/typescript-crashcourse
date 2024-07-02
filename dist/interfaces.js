// normal obj
var user1 = {
    name_: "James",
    age: 99,
};
var user2 = {
    name_: "James",
};
var user3 = {
    name: "James",
    age: 99,
    getMessage: function () {
        return "Hello " + name;
    },
};
var user4 = {
    name: "James",
    getMessage: function () {
        return "Hello " + name;
    },
    //   age: 99,
};
