import  { HelloWorld, GetPoem}  from "@repo/api"
// console.log(repo.HelloWorld("Earth"));
// console.log(__esModule.HelloWorld("Earth"));
console.log(HelloWorld('Earth'));
console.log(HelloWorld(process.env.TEST_VARIABLE ?? ''))
console.log(GetPoem())