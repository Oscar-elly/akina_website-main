import bcrypt from 'bcryptjs';

const plaintext = 'admin';
const saltRounds = 10;

const hash = bcrypt.hashSync(plaintext, saltRounds);
console.log(hash);
