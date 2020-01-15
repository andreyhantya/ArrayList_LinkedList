class AList {
    store = [];

    push(...rest) {
        this.store = [
            ...this.store,
            ...rest,
        ];

        return this.store.length;
    }

    pop() {
        const deletedElement = this.store[this.store.length - 1];
        this.store.length = !this.store.length
                            ? 0
                            : this.store.length - 1;

        return deletedElement;
    }

    unshift(...rest) {
        this.store = [
            ...rest,
            ...this.store,
        ];

        return this.store.length;
    }

    shift() {
        const [ deletedElement, ...rest ] = this.store;
        this.store = [ ...rest ];

        return deletedElement;
    }

    toString() {
        let result = '';

        for (const value of this.store) {
            result += `${value},`;
        }

        return result;
    }

    localSort(first, second) {
        if (String(first) > String(second)) {
            return 1;
        } else if (String(first) < String(second)){
            return -1;
        }

        return 0;
    }

    sort(callback) {
        const comparator = callback || this.localSort;

        for (let outerIndex = 0; outerIndex < this.store.length - 1; outerIndex++) {
            for (let innerIndex = outerIndex + 1; innerIndex < this.store.length; innerIndex++) {
                const compareResult = comparator(this.store[outerIndex], this.store[innerIndex]);

                if (compareResult > 0) {
                    const savedValue = this.store[outerIndex];
                    this.store[outerIndex] = this.store[innerIndex];
                    this.store[innerIndex] = savedValue;
                }
            }

        }
    }
}

const aList = new AList();