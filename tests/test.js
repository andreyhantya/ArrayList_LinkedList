describe("Alist", function () {
    describe("push", function () {
        it("Проверка на несколько положительных чисел", function () {
            const aList = new AList();

            let actual = aList.push(4, 5);

            let expected = 2;
            assert.deepEqual(actual, expected);
        });

        it("Проверка на одно число", function () {
            const aList = new AList();

            let actual = aList.push(1);

            let expected = 1;
            assert.deepEqual(actual, expected);
        });

        it("Проверка на отрицательные числа и ноль", function () {
            const aList = new AList();

            let actual = aList.push(-5, -6, 0);

            let expected = 3;
            assert.deepEqual(actual, expected);
        });
    });

    describe("pop", function () {
        it("Проверка на возврат значения", function () {
            const aList = new AList();

            let actual = aList.pop();

            let expected = undefined;
            assert.deepEqual(actual, expected);
        });

        it("Проверка на изменение массива", function () {
            const aList = new AList();
            aList.push(1, 2, 3);
            aList.pop();

            let actual = aList.store;

            let expected = [1, 2];
            assert.deepEqual(actual, expected);
        });

        it("Проверка на возвращение Undefined", function () {
            const aList = new AList();


            let actual = aList.pop();

            let expected = undefined;
            assert.deepEqual(actual, expected);
        });

    });

    describe("shift", function () {
        it("Проверка на возвращаемый елемент", function () {
            const aList = new AList();
            aList.push(1, 2, 3);

            let actual = aList.shift();

            let expected = 1;
            assert.deepEqual(actual, expected);
        });

        it("Проверка на изменение массива", function () {
            const aList = new AList();
            aList.push(1, 2, 3);
            aList.shift();

            let actual = aList.store;

            let expected = [2, 3];
            assert.deepEqual(actual, expected);
        });

        it("Проверка на возвращение строкового елемента", function () {
            const aList = new AList();
            aList.push("Привет", 2, 3);

            let actual = aList.shift();

            let expected = "Привет";
            assert.deepEqual(actual, expected);
        });

        it("Проверка удаление строкового елемента из массива", function () {
            const aList = new AList();
            aList.push(1, 2, 3);
            aList.shift();

            let actual = aList.store;

            let expected = [2, 3];
            assert.deepEqual(actual, expected);
        });

    });

    describe("unshift", function () {
        it("Проверка на возврат значения", function () {
            const aList = new AList();
            aList.push(1, 2, 3);


            let actual = aList.unshift(2);

            let expected = 4;
            assert.deepEqual(actual, expected);
        });

        it("Проверка содержимого массива после добавления", function () {
            const aList = new AList();
            aList.push(2, 3);
            aList.unshift("Привет");

            let actual = aList.store;

            let expected = ["Привет", 2, 3];
            assert.deepEqual(actual, expected);
        });

        it("Проверка на возврат значения после добавления нескольких елементов", function () {
            const aList = new AList();
            aList.push(1, 2, 3);

            let actual = aList.unshift("Привет", 23, -5);

            let expected = 6;
            assert.deepEqual(actual, expected);
        });

        it("Проверка на изменение содержимого массива при добавлении нескольких елементов", function () {
            const aList = new AList();
            aList.push(1, 2, 3);
            aList.unshift("Привет", 2, 5);

            let actual = aList.store;

            let expected = ["Привет", 2, 5, 1, 2, 3];
            assert.deepEqual(actual, expected);
        });
    });

    describe("sort", function () {
        it("Сортировка положительных чисел", function () {
            const aList = new AList();
            aList.push(6, 3, 4);
            aList.sort();

            let actual = aList.store;

            let expected = [3, 4, 6];
            assert.deepEqual(actual, expected);
        });


        it("Сортировка положительных чисел", function () {
            const aList = new AList();
            aList.push(-47, 1, 18);
            aList.sort();

            let actual = aList.store;

            let expected = [-47, 1, 18];
            assert.deepEqual(actual, expected);
        });

    });

    describe("toString", function () {

        it("Перевод массива в строку с строковыми елементами и отрицательными числами", function () {
            const aList = new AList();
            aList.push(1, 2, 3);

            let actual = aList.toString();

            let expected = "1,2,3,";
            assert.deepEqual(actual, expected);
        });


    });
});

describe("LList", function () {
    describe("push", function () {
        it("Проверка на добавление 5ти елементов", function () {

            const lList = new LList();
            lList.push(1, 2, 3, 4, 5);

            let actual = lList.toString();

            let expected = "1,2,3,4,5,";
            assert.deepEqual(actual, expected);
        });

        it("Проверка на возыращаемое значение функции", function () {

            const lList = new LList();

            let actual = lList.push(1, 2, 3, 4, 5);

            let expected = 5;
            assert.deepEqual(actual, expected);
        });

        it("Проверка на добавление одного елемента", function () {
            const lList = new LList();
            lList.push(5);

            let actual = lList.toString();

            let expected = "5,";
            assert.deepEqual(actual, expected);
        })
    });

    describe("pop", function () {
        it("Проверка удаление елемента", function () {

            const lList = new LList();
            lList.push(1, 2, 34, 4);
            lList.pop();

            let actual = lList.toString();

            let expected = "1,2,34,";
            assert.deepEqual(actual, expected);
        });

        it("Проверка на возвращаемое значение функции", function () {

            const lList = new LList();
            lList.push(1, 2, 34, 4);


            let actual = lList.pop();

            let expected = 4;
            assert.deepEqual(actual, expected);
        });

        it("Проверка на undefined", function () {

            const lList = new LList();

            let actual = lList.pop();

            let expected = undefined;
            assert.deepEqual(actual, expected);
        })
    });

    describe("shift", function () {
        it("Удаление елемента", function () {
            const lList = new LList();
            lList.push(2, 4, 6);
            lList.shift();

            let actual = lList.toString();

            let expected = "4,6,";
            assert.deepEqual(actual, expected);
        });

        it("Проверка на undefined", function () {
            const lList = new LList();

            let actual = lList.shift();

            let expected = undefined;
            assert.deepEqual(actual, expected);
        });


    });

    describe("unshift", function () {
        it("Проверка добавление двух елементов", function () {
            const lList = new LList();
            lList.push(1, 2, 3);
            lList.unshift(2, 4);

            let actual = lList.toString();

            let expected = "2,4,1,2,3,";
            assert.deepEqual(actual, expected);
        });

        it("Проверка на возвращаемое значение", function () {
            const lList = new LList();
            lList.push(1, 2, 3);

            let actual = lList.unshift(1, 2, 3);

            let expected = 6;
            assert.deepEqual(actual, expected);
        });

        it("Проверка на вызов без аргументов", function () {
            const lList = new LList();
            lList.push(1, 2, 3);

            let actual = lList.unshift();

            let expected = 3;
            assert.deepEqual(actual, expected);
        });
    });
});
