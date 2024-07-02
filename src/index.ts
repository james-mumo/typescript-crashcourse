const a = 1;

console.log(a.toString());

const hello: string = "Helllooo";

console.log(hello); // Outputs: Helllooo

const getFullNname = (name: string, name2: string): string => {
  return name + " " + name2;
};

console.log(getFullNname("true", "james"));

function logMessage(message: string) {
  console.log(message);
}

console.log(logMessage);
