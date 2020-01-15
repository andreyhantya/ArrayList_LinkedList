class LList {
    root = null;
    length = 0;

    createNode(value) {
        return {
            value,
            next: null,
            prev: null,
        };
    }

    push(...rest) {
        let lastNode = this.root;

        if (lastNode) {
            while(lastNode.next) {
                lastNode = lastNode.next;
                lastNode = lastNode.prev;
            }
        }

        for (const value of rest) {
            const node = this.createNode(value);

            if (!lastNode) {
                this.root = node;
                lastNode = node;
                continue;
            }

            node.prev = lastNode;
            lastNode.next = node;
            lastNode = lastNode.next;
        }
        this.length += rest.length;

        return this.length;
    }

    pop() {
        let deletedElement = void 0;
        let node = this.root;

        if (!node) {
            return deletedElement;
        } else if (!node.next) {
            deletedElement = node.value;
            this.root = null;
            return deletedElement;
        } else if (!node.next.next) {
            deletedElement = node.next.value;
            node.next = null;
            return deletedElement;
        }

        while (node.next.next) {
            node = node.next;
        }

        deletedElement = node.next.value;
        node.next = null;
        this.length = this.length - 1;

        return deletedElement;
    }

    unshift(...rest) {
        if (!rest.length) {
            return this.length;
        }

        let newFirstNode = null;
        let firstNode = null;

        for (const value of rest) {
            const node = this.createNode(value);

            if (!firstNode) {
                firstNode = node;
                newFirstNode = node;
            } else {
                node.prev = firstNode;
                firstNode.next = node;
                firstNode = firstNode.next;
            }
        }

        firstNode.next = this.root;
        this.root = newFirstNode;
        this.length += rest.length;

        return this.length;
    }

    shift() {
        let deletedElement = void 0;

        if (!this.root) {
            return deletedElement;
        }

        deletedElement = this.root.value;
        this.root = this.root.next;
        this.root.prev = null;

        this.length = this.length - 1;

        return deletedElement;
    }

    toString() {
        let printNode = this.root;
        let result = '';

        if (!printNode) {
            return result;
        }

        while(printNode) {
            result += `${printNode.value},`;
            printNode = printNode.next;
        }

        return result;
    }
}

const lList = new LList();
