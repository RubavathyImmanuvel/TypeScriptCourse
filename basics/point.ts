export class PointClass5 {
    constructor(private x:number, public y:number, public z:number) { //x ?: --> x is nullable
        this.x = x;
        this.y = y;
        this.z = z;
    }

    get X() {
        return this.x;
    }

    set X(value){
        this.x = value;
    }

    public draw = ():any => {
        console.log('x:' + this.x + ' y:' + this.y + " z:" + this.z)
    }
}