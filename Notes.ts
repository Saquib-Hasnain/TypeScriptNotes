var a:number;
a=5
console.log(a)
//: this is Known as type Annotations

function sum(num1:number,num2:number):number{
    return num1+num2
}
console.log(sum(2,3))
//A type alias is exactly that - a name for any type. The syntax for a type alias is:

type Point = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });

//Readonly features

type User={
    readonly _id:string // if we assign User._id= to something its gave error that _id have readonly properties
    name:string
    email:string
    isActive:boolean
    cardDetails?:number//? -if user have not card then no issue 
}
let myUser:User={
    _id:"1234",
    name:"h",
    email:"hh@.com",
    isActive:false
}
type UUser={
    a:number;
    b:string
 
 }

//Array in TS
const superHeros:string[]=[]

superHeros.push("ss")
console.log(superHeros)

const arr:Array<number>=[]

const heroPower:UUser[]=[]
heroPower.push({a:4,b:"hh"})
console.log(heroPower)

//Union 
let score: number | string =33

score=44
score="55"

type newUser={
    name:string
    id:number
}
type Admin={
    username:string
    id:number
}
let saquib : newUser | Admin={name:"saquib",id:555}

saquib={username:"sh",id:33}


/*function getDbId(id:number | string){
console.log(`DB id is:${id}`)

}*/
getDbId(3)
getDbId("33")
function getDbId(id:number | string){
    if(typeof id ==="string"){
        id.toLowerCase()
    }
}

// Array 

const data:number[]=[1,2,3]
const data2:string[]=["1","2","3"]
const data3: string[] | number[]=[1,2] // only have simliar datatypes either string or number not both
const data4:(string | number | boolean)[]=["1",2,3,true] // assign any value


//Tuple

let user:[string,number,boolean]=["hc",1,true] // 

let rgp:[number,number,number]=[255,123,112]//assigning value in serires of declaration

type tuple=[number,string]
const newTuple:tuple=[112,"g@gmail.com"]


//enumerable or enum

const enum seatChoise{
    aisle, // 10,asile
    middle,// 22
    window,
    fourth // point is assign the value you want but due to enum next one in incremented form
}
const shSeat=seatChoise.aisle




//interfaces

interface muser{
    email:string,
    userId:number,
    googleId?:string,
    //startTrail:()=>string,
    start():string
    getCoupon(couponname:string,value:number):number
}

interface muser {
    githubToken: string
}
interface admin extends muser{     // all the features of muser came in admin interface
    role:"admin" | "ta" | "learner"

}
const sh:admin={email:"h@gmail.com",userId:22,start:()=>{
    return "trail started"
    },
    role:"admin",
    githubToken:"github",
    getCoupon:(name:"sh",off:10) =>{
        return 10
    }
}

//class

class Classuser{
    email:string
    name:string
    private readonly city : string="Delhi"
    constructor(email:string,name:string){
        this.email=email
        this.name=name
    }
}

const ssh=new Classuser("hh@h.on","saq")
console.log(ssh)





//lot of people method 

class detail{
    readonly city : string="jaipur"
    constructor(
        public email:string,
        public name: string
    ){}
    get getAppleEmail():string{
        return `apple${this.email}`
    }
   
    
}
const neww= new detail("h@hg.vi","ssh")

console.log(neww)


// Getters and setters

// just like in a js ,In TS getters and setters are same funtionality 

//protected
//when ever you marks any value to protected it accessable within that class and its inhertit class like in extends just change private to protected


//implements


interface TakePhoto{
    cameraMode:string
    filter:string
    burst:number
}
interface story{
    createStory():void
}

class Instagram implements TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst :number
    ){}
}

class Youtube implements TakePhoto,story{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst :number,
        public short : string // we can use extra features but not less after implementing any interface
    ){}createStory():void{
        console.log("Story was created")
    }


}



//An abstract method or abstract field is one that hasn’t had an implementation provided. These members must exist inside an abstract class, which cannot be directly instantiated.

//We can’t instantiate Base with new because it’s abstract. Instead, we need to make a derived class and implement the abstract members:

abstract class Base {
  abstract getName(): string;
 
  printName() {
    console.log("Hello, " + this.getName());
  }
}


class Derived extends Base {
  getName() {
    return "world";
  }
}
 
const d = new Derived();
d.printName();

// Generics

const scre:Array<number> =[]

function identityOne (val:boolean | number):boolean | number {
    return val
}

function identityTwo(val:any):any{
    return val
}
function identityThree<Type>(val:Type):Type{
    return val
}

interface Bottle{
    brand:string,
    type:number

}
function logAndReturn<T>(value:T):T{
    return value
}
const numberResult :number=logAndReturn<number>(42);



// Narrowing

function printAll(strs: string | string[] | null) {
    
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }

  //The in operator narrowing

    type Fish = { swim: () => void };
    type Bird = { fly: () => void };
    
    function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        return animal.swim();
    }
    
    return animal.fly();
    }

    
//instanceof

function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
    } else {
      console.log(x.toUpperCase());
    }
  }

  // type predicts
  type Fiish={swim:()=> void}
type Biird ={fly:()=> void}


function isFish(pet:Fish | Bird): pet is Fish{
    return (pet as Fish).swim !==undefined
}

//kind

interface Circle{
    kind:'circle',
    radius : number
}
interface Square{
    kind:'square',
    side : number
}

interface Rectangle{
    kind:'rectangle',
    length:number,
    width:number
}

type Shape= Circle | Square

function getTrueShape(shape:Shape){
    if(shape.kind==="circle"){
        return Math.PI * shape.radius**2
    }
    return shape.side * shape.side
}

//never
function getArea(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "square":
        return shape.side ** 2;
      default:
        const _exhaustiveCheck: never = shape;
        return _exhaustiveCheck;
    }
  }
