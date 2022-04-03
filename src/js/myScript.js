"use strict"

    let a = prompt("Какой сайт вы хотите заказать?\n1 - Визитка(100$)\n2 - Корпоративный(+5000$)\n3 - Просто изумительный(+100000$)");
    let b = prompt("А какой бы вы хотели дизайн?\n1 - Невероятный(+500$)\n2 - Прикольный(+250$)\n3 - На ваш выбор(+respect & +200$)");
    let c = prompt("А версточка какого типа вам по душе?\n1 - Адаптивная(+1000$)\n2 - Если честно мне все равно(krasava(+200$))\n3 - Вы о чем?(+200$)");
    let money = [
        [100, 5100, 100100],
        [500, 250, 200],
        [1000, 200, 200],
    ];
    let swag = ["10 дней", "30 дней", "60 дней"];
    let Calculator = {
        price: 0,
        time: 0,
        calculate() {
            this.price = money[0][a - 1] + money[1][b - 1] + money[2][c - 1];
            this.time = swag[a - 1];
            return "Цена: " + this.price + "$ Сроки: " + this.time + ".";
        }
    };
    alert(Calculator.calculate());
    console.log(a, b, c);


