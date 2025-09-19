import bcrypt from 'bcryptjs';

const plaintext = 'password';
const saltRounds = 12;

const hash = bcrypt.hashSync(plaintext, saltRounds);
console.log(hash);
