function createQueue() {
    const queue = []
    return {
        enqueue(item) {
            queue.unshift(item)
        },
        dequeue() {
            return queue.pop()
        },
        peek() {
            return queue[queue.length - 1]
        },
        get length() {
            return queue.length
        },
        isEmpty() {
            return queue.length === 0
        }
    }
}

const q = createQueue()
console.log(q.isEmpty())
q.enqueue('1 step')
q.enqueue('2 step')
q.enqueue('3 step')

q.dequeue()
console.log(q.peek())