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
        if (isNaN(Nm)) {
            this.name = Nm; 
        } else {
            throw Error('Must be alphabetical');
        }
    }

    setAge(howold) {
        if (Number.isInteger(howold)) {
            this.age = howold;
        }
        else {
            throw Error('Must be numbers');
        }
    }

    setDoB(date) {
        this.dob = date;
    }


    // I don't even know how, I don't even know why, but for some reason conditional if-else-if doesn't worked on me, it's likely that I overlooked some misscodes which IDK where those are 
    setGender(newGender) {  //I had to use Reno's linecode for this one, so credits to him for this one
        switch (newGender.toLowerCase()) {
            case "male":
              this.gender = newGender;
              break;
            case "female":
              this.gender = newGender;
              break;
            default:
              throw Error('Must be male or female');  //Addition of error throwing if it's neither male or female, by yours truly
        }
    }

    addHobby(hobby) {
        return this.hobbies.push(hobby);
    }

    removeHobby(hobby) {
        return this.hobbies.pop(hobby);
    }

    get GetData() {  //this was originally belonged to Reno but with my breakline alterations, once again props to Reno for his original linecode.
        return `
        ID: ${this.id} 
        Name: ${this.name}
        Birthdate:  ${this.dob} 
        Age: ${this.age}
        Gender: ${this.gender}
        Hobbies: ${this.hobbies}`;
    }

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

