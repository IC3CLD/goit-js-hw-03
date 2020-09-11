const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
console.log(user);


user.mood = `happy`;
user.hobby = `skydiving`;
user.premium = false;
console.log(user);

let keys = Object.keys(user);
console.log(Object.keys(user));

for (let key in user) {
  console.log(`${key}:${user[key]}`);
};