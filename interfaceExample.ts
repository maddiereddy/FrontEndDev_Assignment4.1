/**
 * Created by maddie on 12/4/16.
 */

/*
 2. Create Interfaces and Class for implement them.
 Interface: A simple interface that defines the interface for something that can drive.
 Class: An implementation of a car.
 interface Drivable {}, with start(), drive() and getPosition()
 class Car implements Drivable {}

 3. One more exercise for Interface and class as mentioned above:
 interface Flyable { ... }
 class Helicopter implements Flyable { ... }
 class FlyingCar implements Drivable, Flyable { ... }
 */

interface Drivable {
    start(): void; //start car
    drive(distance: number): boolean; //drive a given distance. returns true or false depending if distance was driven
    getPosition(): number; //total distance driven from start
}

interface Flyable {
    fly(distance: number): boolean;
}

class Car implements Drivable {
    private hasStarted: boolean;
    private distance: number;
    constructor() {
        this.hasStarted = false;
        this.distance = 0;
    }
    public start() {
        this.hasStarted = true;
    }
    public drive(distanceToDrive: number): boolean {
        if (this.hasStarted) {
            this.distance += distanceToDrive;
            return true;
        }
        return false;
    }
    public getPosition(): number {
        return this.distance;
    }
}

class Helicopter implements Flyable{
    private distance: number;
    constructor() {
        this.distance = 0;
    }
    public fly(distanceToDrive: number): boolean {
        this.distance += distanceToDrive;
        return true;
    }
}

class FlyingCar implements Drivable, Flyable {
    private hasStarted: boolean;
    private distance: number;
    constructor() {
        this.hasStarted = false;
        this.distance = 0;
    }
    public start() {
        this.hasStarted = true;
    }
    public drive(distanceToDrive: number): boolean {
        if (this.hasStarted) {
            this.distance += distanceToDrive;
            return true;
        }
        return false;
    }
    public getPosition(): number {
        return this.distance;
    }
    public fly(distanceToDrive: number): boolean {
        this.distance += distanceToDrive;
        return true;
    }

}