"use strict";

class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class coloredRecrangleWithText extends Rectangle{
    constructor(height,width,text,bgColor){
        super(height,width); //вызывает конструктор родителя
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps(){
        console.log(`текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}
const div = new coloredRecrangleWithText(25,10, "hellow world" , "red");

div.showMyProps();
console.log(div.calcArea());

const square = new Rectangle(10,10);
const long = new Rectangle(20, 100);


console.log(square.calcArea());
console.log(long.calcArea());