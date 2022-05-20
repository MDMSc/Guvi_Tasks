class Circle {
    get getRadius() {
        return this.radius;
    }
    set setRadius(radius) {
        if (!isNaN(radius)) {
            this.radius = Number(radius);
        }
    }
    get getColor() {
        return this.color;
    }
    set setColor(color) {
        this.color = color
    }
    toString() {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }
    get getArea() {
        return 3.14 * this.radius * this.radius;
    }
    get getCircumference() {
        return 2 * 3.14 * this.radius;
    }
}

const circle1 = new Circle();
circle1.setRadius = 2;
circle1.setColor = "green";
console.log(circle1.getRadius);
console.log(circle1.getColor);
console.log(circle1.getArea);
console.log(circle1.getCircumference);
console.log(circle1.toString());