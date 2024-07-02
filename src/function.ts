class User1 {
  lname: string;
  fname: string;

  constructor(lname: string, fname: string) {
    this.lname = lname;
    this.fname = fname;
  }

  getFullName(): string {
    return this.lname + " " + this.fname;
  }
}

const new_user = new User1("Monster", "The");

console.log(new_user);

console.log(new_user.fname);

const uId = (obj) => {
  let id_ = Math.random().toString(16);

  return {
    ...obj,
    id_,
  };
};

const username1 = { name: "James" };

const res = uId(username1);

console.log(res);
