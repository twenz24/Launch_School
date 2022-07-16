class CircularQueue {
  constructor(length) {
    this.queueLength = length;
    this.queue = Array(this.queueLength).fill(null);
    this.currentIndex = 0;
    this.oldestPosition = null;
  }

  updateOldestPostition(position) {
    if (this.queue.every(obj => obj === null)) {
      this.oldestPosition = position;
    } else {
      this.oldestPosition = position + 1;
    }
  }

  incrementIndex() {
    if (this.currentIndex === this.queueLength - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex += 1;
    }
  }

  isQueueFull() {
    return this.queue.every(obj => obj !== null);
  }

  enqueue(object) {
    if (this.isQueueFull()) {
      this.queue[this.currentIndex] = object;
      this.updateOldestPostition(this.currentIndex);
      this.incrementIndex();
    } else {
      this.queue[this.currentIndex] = object;
      this.incrementIndex();
    }
  }

  dequeue() {
    let deletedObj = this.queue.splice(this.oldestPosition, 1, null);
    this.updateOldestPostition(this.oldestPosition);
    return deletedObj[0];
  }
}

let queue = new CircularQueue(3);
console.log(queue.queue);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.queue);
console.log(queue.olde);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);
/*
let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1);
anotherQueue.enqueue(2);
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3);
anotherQueue.enqueue(4);
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5);
anotherQueue.enqueue(6);
anotherQueue.enqueue(7);
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null); */