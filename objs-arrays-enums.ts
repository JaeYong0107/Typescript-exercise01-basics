enum Role {ADMIN,READ_ONLY, AUTHOR};

const person = {
    name:'JaeYong',
    age:25,
    hobbies: ['Sports','Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports']

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if(person.role === Role.ADMIN) {
    console.log('is admin')
}