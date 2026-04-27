const { faker } = require('@faker-js/faker');
const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database : 'delta_app',
    password : 'sangamisthebest22xyz'
});
let getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    
  };
};


let q ="INSERT INTO user(id,username,email,password)VALUES(?,?,?,?)";

let data = [];
for(let i=1 ; i<=100 ; i++){
  console.log(getRandomUser ());
}

// let user = ["123","123_newuser", "abc@gmail.com", "abc"];
// // try{

// connection.query("SHOW TABLES", (q,user),( err,result)=>{
//     if (err) throw err;
//     console.log(result); 

// })
// }catch(err){
//     console.log(err);
// }

   // ← function ends here

