function logMethod(target:any, propertykey:string, descriptor:PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args:any[]) {
        console.log(`Calling ${propertykey} method with arguments ${args.join(',')}`);
        const result = originalMethod.apply(this, args);
        console.log(`result: ${result}`);
        return result;
    }
}


class Calculator1 {
    @logMethod //tsc <file> -experimentalDecorators --target es5
    add(a:number, b:number) {
        const result = a + b;
        return result;
    }

    @logMethod //method decorator
    subtract(a:number, b:number) {
        const result = a - b;
        return result;
    }
}

const calculator1 = new Calculator1();
calculator1.add(2, 3);
calculator1.subtract(5, 3);