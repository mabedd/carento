import bcrypt from 'bcryptjs';
const companies = [{
    companyName:'Budjet',
    companyId: '219489241',
    email : 'budjet@gmail.com',
    password: bcrypt.hashSync('12345',10),
    phoneNumber : '0543443434',
},
{
    companyName:'theeb',
    companyId: '219889241',
    email : 'theeb@gmail.com',
    password: bcrypt.hashSync('12345',10),
    phoneNumber : '0543443436',
}]
export default companies ;