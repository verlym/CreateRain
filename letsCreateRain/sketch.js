let bubbles = [];
let rectangle = [];

function setup() {
	createCanvas(400, 400);


	for (let index = 0; index < 100; index++) {
		bubbles.push(new Bubble(random(0,400),random(0,400),50,5))
		
	}

	// bubble = new Bubble(0,100,10,5);
	// rectangle = new Rectangle(400,230,10,6,5)
	for (let index = 0; index < 100; index++) {
		rectangle.push(new Rectangle(random(0,400),random(0,400),1.5,10,5))
		
	}
}

function draw() {
	background(0, 0, 0)

	for (const r of rectangle) {
		r.show()
		r.move()
		r.playback()
	}

	// rectangle.show()
	// rectangle.move()
}

class Bubble{
	constructor(x,y,r,s) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.speed = s
	}

	//tampil
	show(){
		fill(100,255,125)
		ellipse(this.x,this.y,this.r)
	}


	// changeColor(color){
	// 	fill(0,color,0)
	// }

	// bergerak
	move(){
		this.y = this.y + this.speed
	}

	playback(){
		if(this.y>= 400){
			this.y = 0
		}
	}
}

class Rectangle{
	constructor(x,y,p,l,s) {
		this.x = x;
		this.y = y;
		this.p = p;
		this.l = l;
		this.speed = s
	}

	//tampil
	show(){
		fill(220,20,60)
		rect(this.x,this.y,this.p,this.l)
	}

	// bergerak
	move(){
		this.y = this.y + this.speed
	}

	playback(){
		if(this.y>= 400){
			this.y = 0
		}
	}

}