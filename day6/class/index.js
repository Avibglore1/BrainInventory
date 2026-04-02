// class Person{
// constructor(name){
//     this.name = name
// }
// greet(){
//     console.log("Hello " + this.name)
// }
// }

// class Student extends Person{
//     constructor(name,grade){
//         super(name);
//         this.grade = grade;
//     }
//     info(){
//         console.log(this.name, this.grade)
//     }
// }
// const p = new Person("Avi");
// p.greet()

// const s = new Student("Vinayak","A");
// s.info();

class Car{
    constructor(speed){
        this.speed = speed;
    }
    start(){
        console.log("Car started at speed:", this.speed);
    }
}

class ElectricCar extends Car{
    constructor(speed,battery){
        super(speed);
        this.battery = battery;
    }

    start(){
        console.log("Electric car silently starts ⚡ at speed:", this.speed)
    }

    static compareCars(car1,car2){
        return car1.speed>car2.speed ? "Car1 is faster" : "Car 2 is faster";
    }
}

const e  = new ElectricCar(120, 3500);
e.start()

const c = new Car(50);

console.log(ElectricCar.compareCars(e,c));



