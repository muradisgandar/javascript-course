// Static Methods
class Mathematic{

    sqrt(x){
        console.log(x*x);
    }
    static cube(x){
        console.log(x*x*x);
    }
}
const m = new Mathematic();

Mathematic.cube(3);    // static method can be called only by class

m.sqrt(2); // non static method can be called only by object

