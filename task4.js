class student {
    constructor({name, id, gender, dob, age}) {
        this.name = name;
        this.id = id;
        this.gender = gender;
        this.dob = dob;
        this.age = age;
        this.hobbies = [];
        student._amount = student._amount || 0;
        student._amount++;
    }

    static get amount() {
        return student._amount;
    }

    setName(Nm) {
        this.name = Nm;
    }

    setAge(howold) {
        this.age = howold;
    }

    setDoB(date) {
        this.dob = date;
    }

    //need setGender function here; currently I have no I idea it's javascript implementation for the time being

    addHobby(hobby) {
        return this.hobbies.push(hobby);
    }

    removeHobby(hobby) {
        return this.hobbies.pop(hobby);
    }

    //need getData function here; I haven't been able to know how exactly this implementation works

}

// Run Sample 
const student1 = new student ({
    name: 'Satrio Kamaludin',
    id: '001',
    gender: 'male',
    dob: '6 September 1994',
    age: 26,
    hobbies: ['Building PC','Gaming','Watching VTuber']  //doesn't work, had to be done manually via student1.addHobby('blahblahblah')
});

const student2 = new student ({
    name: 'Edvia',
    id: '002',
    gender: 'female',
    dob: '8 Agustus 1995',
    age: 23,
    hobbies: ['Vtubing','Gaming','Watching Anime']  //same goddamn problem but instead it's student2   
});