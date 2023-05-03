//? stack = an array that you can only push and pop to

class Stack {
    constructor() {
        this.arr = []
    }

    // peek, push, pop, length

    peek = () => {
        if (this.arr.length == 0) {
            return null;
        }
        return this.arr[this.arr.length - 1];
    }

    push = (input) => {
        this.arr.push(input);
    }

    pop = () => {
        return this.arr.pop();
    }

    length = () => {
        return this.arr.length;
    }

}

module.exports = Stack