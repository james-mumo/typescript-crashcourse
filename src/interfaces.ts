// normal obj

const user1: { name_: string; age: number } = {
  name_: "James",
  age: 99,
};

const user2: { name_: string; age?: number } = {
  name_: "James",
};

// with an interface
interface User {
  name: string;
  age?: number;
  getMessage(): string;
}

const user3: User = {
  name: "James",
  age: 99,
  getMessage() {
    return "Hello " + name;
  },
};

const user4: User = {
  name: "James",
  getMessage() {
    return "Hello " + name;
  },
  //   age: 99,
};
