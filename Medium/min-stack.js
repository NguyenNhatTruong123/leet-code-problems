
var MinStack = function () {
    this.stack = []
    this.minStack = []
}


MinStack.prototype.push = function (val) {
    this.stack.push(val);
    if (val < this.getMin()) {
        this.minStack.push(val)
    }
}

MinStack.prototype.pop() = function () {
    const poppedElement = this.stack.pop();

    if (poppedElement === this.getMin()) {
        this.minStack.pop();
    }
}

MinStack.prototype.top() = function () {
    return this.stack[this.stack.length - 1];
}

MinStack.prototype.getMin() = function () {
    return this.minStack[this.minStack.length - 1];
}
