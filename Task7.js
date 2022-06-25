// 1.Ans

// class movie{
//     constructor(title,studio,rating){
//         this.title=title;
//         this.studio=studio;
//         // this.rating=rating;
//         if(rating==null){
//             return this.rating="PG"
//         }
//         else{
//             return this.rating=rating;
//         }
//     }

//      getPG(array){
//         var result=array.filter((element)=>element.rating=="PG")
//         return result;
//     }

// }
// let movie1=new movie("Casino Royal","Eon Production","PG­13");
// let movie2=new movie("Wanted"," PVR","PG12")
// let movie3=new movie("Avengers","Yash studio","PG14")
// let movie4=new movie("DDLJ","Cinemax")

// const array=[movie1,movie2,movie3,movie4];

// console.log(movie2.getPG(array));

// let movie5=new movie("Casino Royal","Eon Production","PG­13");
// console.log(movie5);


// ----------------------------------------------------------------------------

// 2.Ans--
// class Circle{
//     constructor(radius,color){
//         this.radius=radius;
//         this.color=color;

//     }

//     getRadius(){
//         return this.radius;
//     }

//     setRadius(r){
//         this.radius=r;

//     }



//     getColor(){
//         return this.color;
//     }


//     setColor(c){
//         this.color=c;
//     }

//     toString(){
//         return `Circle[radius=${this.radius}, color=${this.color}]`
//     }


//     getArea(){
//         return Math.PI*this.radius*this.radius;
//     }

//     getCircumference(){
//         return 2*Math.PI*this.radius;
//     }
// }

// let circle1=new Circle()
// circle1.setRadius(4);
// circle1.setColor("red")
// console.log(circle1.toString());
// console.log(circle1.getArea());
// console.log(circle1.getCircumference());

// let circle2=new Circle(5)
// console.log(circle2.toString());
// console.log(circle2.getArea());
// console.log(circle2.getCircumference());


// let circle3=new Circle(5,"orange")
// console.log(circle3.toString());
// console.log(circle3.getArea());
// console.log(circle3.getCircumference());


// -----------------------------------------------------------------------------




// 3.Write a “person” class to hold all the details.\

// Ans:
// class person{
//     constructor(name,age,birthdate,education,address){
//         this.name=name;
//         this.age=age;
//         this.birthdate=birthdate;
//         this.education=education;
//         this.address=address;
//     }


//     getDetails(){
//         console.log(`person details are:
// Name:${this.name}
// Age:${this.age}
// Birthdate:${this.birthdate}
// Education:${this.education}
// Address:${this.address}
// `)
//     }

// }
// let a=new person("sachin",25,"24/06/1999","B.tech","Gujarat")
// a.getDetails();



// ----------------------------------------------------------------------------------


// 4. write a class to calculate uber price.

// Ans:

// class uber{
//     constructor(km){
//         this.km=km;
//         this.price=this.km*4
//     }

//     getPrice(){
//         console.log(`Price of ride is ${this.price}`)

//     }
//     discountPrice(){
//         var discount=(25/100)*this.price;
//         var finalAmount=this.price-discount;
//         console.log(`Final amout to be paid is ${finalAmount}`);
//     }
// }
// let a=new uber(25);
// a.getPrice();
// a.discountPrice()



