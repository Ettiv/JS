function button(){
    return button;
}

class Slider {
    constructor(width, height , count){
        this.width = width;
        this.height = height;
        this.count = count;
    }
    nextSlide(){
        console.log("move forward");
    }

    prevSlide(){
        console.log("moving back");
    }

    whoAmI() {
        console.log(this.width , this.height , this.count);
    }

    
}

const slider = new Slider(600,400,5),
      someSlider = new Slider(3445 , 3535, 5235);
slider.whoAmI();
someSlider.whoAmI();

class AutoSlider extends Slider{
    constructor(width , height , count , auto){
        super(width , height , count);
        this.auto = auto;
    }

    play() {
        console.log(this.auto);
    }
}

const Slider1 = new AutoSlider(500, 500 , 4 , true);

Slider1.whoAmI();
Slider1.play();

export {button as btn };
export default Slider;