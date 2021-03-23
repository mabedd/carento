import bcrypt from 'bcryptjs';
const renters = [ {
    username:'salim',
    nationalId: '22212121221',
    password: bcrypt.hashSync('abc123',10),
    age: 17,
    rating: 4.3,
    phoneNumber :'059212212',
    isBlackListed : false,
    email : 'abc@gmail.com',
   
}, {
    username:'ahmed',
    nationalId: '2212121221',
    password: bcrypt.hashSync('abc123',10),
    age: 17,
    rating: 4.3,
    phoneNumber :'059212012',
    isBlackListed : false,
    email : 'abcd@gmail.com',
   
}]
export default renters ;