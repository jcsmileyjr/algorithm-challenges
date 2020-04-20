//Resources
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// https://www.w3schools.com/js/js_classes.asp

//Determine if a triangle is equilateral, isosceles, or scalene.
export class Triangle {

	constructor(side1, side2, side3) {
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
	}

	isEquilateral() {
		//Test if all three sides are equal and is not all 0's
		const isEqual = this.side1 === this.side2 && this.side1 === this.side3 && this.side1 !== 0 ? true : false;
		return isEqual;
	}

	//Test if at least 2 sides are equal and if the the sum of both sides is equal or greater to the third side
	isIsosceles(sides1, side2, side3) {
		let twoSidesEqual = false;
		if (this.side1 === this.side2 && (this.side1 + this.side2) >= this.side3) {
			twoSidesEqual = true;
		}

		if (this.side1 === this.side3 && (this.side1 + this.side3) >= this.side2) {
			twoSidesEqual = true;
		}

		if (this.side2 === this.side3 && (this.side2 + this.side3) >= this.side1) {
			twoSidesEqual = true;
		}
		return twoSidesEqual;
	}

	isScalene(sides1, side2, side3) {
		let noSidesEqual = true;
		if (this.side1 === this.side2) { noSidesEqual = false; }
		if (this.side2 === this.side3) { noSidesEqual = false; }
		if (this.side1 === this.side3) { noSidesEqual = false; }
		if ((this.side2 + this.side3) < this.side1) { noSidesEqual = false; }
		if ((this.side1 + this.side3) < this.side2) { noSidesEqual = false; }
		if ((this.side2 + this.side1) < this.side3) { noSidesEqual = false; }

		return noSidesEqual;
	}
}
