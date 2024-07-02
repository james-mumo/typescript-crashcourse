var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var User1 = /** @class */ (function () {
    function User1(lname, fname) {
        this.lname = lname;
        this.fname = fname;
    }
    User1.prototype.getFullName = function () {
        return this.lname + " " + this.fname;
    };
    return User1;
}());
var new_user = new User1("Monster", "The");
console.log(new_user);
console.log(new_user.fname);
var uId = function (obj) {
    var id_ = Math.random().toString(16);
    return __assign(__assign({}, obj), { id_: id_ });
};
var username1 = { name: "James" };
var res = uId(username1);
console.log(res);
