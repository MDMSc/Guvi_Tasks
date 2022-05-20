class Person {
    constructor(firstName, lastName, dob, phone, city, profession) {
        this.fname = firstName,
        this.lname = lastName,
        this.dob = dob,
        this.phone = phone,
        this.city = city,
        this.profession = profession
    }

    get getName() {
        return `${this.fname} ${this.lname}`;
    }

    get getAge() {
        let today = new Date();
        let birthDate = new Date(String(this.dob));
        if (!isNaN(birthDate)) {
            let age = today.getFullYear() - birthDate.getFullYear();
            let month = today.getMonth() - birthDate.getMonth();

            if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        } else {
            alert("Format of DOB: YYYY-MM-DD");
        }

    }

    get getContactDetails() {
        return `City- ${this.phone}, Phone number- ${this.city}`;
    }

    get getProfession() {
        return this.profession;
    }
}

const person = new Person("ABC", "abc", "2001-01-01", 122344556, "sfdsdfd", "Web Developer");
console.log(person.getName);
console.log(person.getAge);
console.log(person.getContactDetails);
console.log(person.getProfession);
