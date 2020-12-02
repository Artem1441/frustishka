var priceSet;

priceSet = function (data) {
    /*
     * В переменной price приводим получаемую переменную в нужный вид:
     * 1. принудительно приводим тип в число с плавающей точкой,
     *    учли результат 'NAN' то по умолчанию 0
     * 2. фиксируем, что после точки только в сотых долях
     */
    var price = Number.prototype.toFixed.call(parseFloat(data) || 0, 2),
        //заменяем точку на запятую
        price_sep = price.replace(/(\D)/g, ","),
        //добавляем пробел как разделитель в целых
        price_sep = price_sep.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");

    return price_sep;
};
data = {
    '1111': {
        'name': 'Яблоки Голден Азербайджан',
        'cost': 149.90,
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
        'image': 'img/apple.jpg',
        'weight': '1 кг',
        'proteins': '0,5 г',
        'fats': '0,2 г',
        'carbohydrates': '10,7 г',
        'calorie': '53 ккал',
        'time': '30 суток',
        'conditions': 'При температуре +3°C',
        'country': 'Азербайджан'
    },
    '1112': {
        'name': 'Груши Конференс',
        'cost': 239.90,
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
        'image': 'img/pear.jpg',
        'weight': '1 кг',
        'proteins': '0,5 г',
        'fats': '0,5 г',
        'carbohydrates': '12,5 г',
        'calorie': '48,43 ккал',
        'time': '14 суток',
        'conditions': 'При температуре от -1°С до +3°С',
        'country': '-'
    },
    '1113': {
        'name': 'Яблоки Симиренко Сербия',
        'cost': 149.90,
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
        'image': 'img/apple.jpg',
        'weight': '1 кг',
        'proteins': '0,4 г',
        'fats': '0,4 г',
        'carbohydrates': '9 г',
        'calorie': '37 ккал',
        'time': '30 суток',
        'conditions': 'При температуре от +2°С до +8°С',
        'country': 'Сербия'
    },
    '1114': {
        'name': 'Яблоки Симиренко Азербайджан',
        'cost': 119.90,
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
        'image': 'img/apple.jpg',
        'weight': '1 кг',
        'proteins': '0,3 г',
        'fats': '0,2 г',
        'carbohydrates': '14 г',
        'calorie': '52 ккал',
        'time': '30 суток',
        'conditions': 'При температуре от +2°С до +10°С',
        'country': 'Азербайджан'
    },
    '1115': {
        'name': 'Киви',
        'cost': 179.90,
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
        'image': 'img/apple.jpg',
        'weight': '1 кг',
        'proteins': '1 г',
        'fats': '0,6 г',
        'carbohydrates': '10,3 г',
        'calorie': '48 ккал',
        'time': 'до 6 недель',
        'conditions': 'При температуре от +8°С до +16°С в холодильнике',
        'country': 'Турция'
    },
    '1116': {
        'name': 'Груши Лукас',
        'cost': 224.90,
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
        'image': 'img/pear.jpg',
        'weight': '1 кг',
        'proteins': '0,3 г',
        'fats': '0,4 г',
        'carbohydrates': '10,7 г',
        'calorie': '43,6 ккал',
        'time': '15 суток',
        'conditions': 'При температуре от -1°С до +3°С',
        'country': 'Испания'
    },
    '1117': {
        'name': 'Мандарины ЮАР',
        'cost': 269.90,
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
        'image': 'img/pear.jpg',
        'weight': '1 кг',
        'proteins': '0,8 г',
        'fats': '0,2 г',
        'carbohydrates': '7,5 г',
        'calorie': '33 ккал',
        'time': '14 суток',
        'conditions': 'При температуре от +2°С до +5°С',
        'country': 'ЮАР'
    },
    '1116': {
        'name': 'Лимоны',
        'cost': 169.90,
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
        'image': 'img/pear.jpg',
        'weight': '1 кг',
        'proteins': '0,9 г',
        'fats': '0,1 г',
        'carbohydrates': '3 г',
        'calorie': '16 ккал',
        'time': '2 месяца',
        'conditions': 'При температуре меньше +14°С',
        'country': 'Турция'
    },
    '1118': {
        'name': 'Апельсины ЮАР',
        'cost': 169.90,
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
        'image': 'img/pear.jpg',
        'weight': '1 кг',
        'proteins': '0,9 г',
        'fats': '0,2 г',
        'carbohydrates': '8,2 г',
        'calorie': '36 ккал',
        'time': '2 месяца',
        'conditions': 'от +2 до +6 °С',
        'country': 'ЮАР'
    },
    '1119': {
        'name': 'Апельсины Турция',
        'cost': 169.90,
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
        'image': 'img/pear.jpg',
        'weight': '1 кг',
        'proteins': '0,9 г',
        'fats': '0,2 г',
        'carbohydrates': '8,1 г',
        'calorie': '38 ккал',
        'time': '2 месяца',
        'conditions': 'от +3 до +8 °С',
        'country': 'Турция'
    },
    '1120': {
        'name': 'Апельсины Испания',
        'cost': 169.90,
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
        'image': 'img/pear.jpg',
        'weight': '1 кг',
        'proteins': '0,9 г',
        'fats': '0,2 г',
        'carbohydrates': '8,1 г',
        'calorie': '43 ккал',
        'time': '2 месяца',
        'conditions': 'от +2 до +10 °С',
        'country': 'Испания'
    },
}
function checkCart() {
    //проверка на наличие данных в localStorage
    if (localStorage.getItem('cart') != null) {
        var cart = JSON.parse(localStorage.getItem('cart'))
    }
    if (localStorage.getItem('articuls') != null) {
        var articuls = JSON.parse(localStorage.getItem('articuls'))
    }
}

function showMiniCart() {
    // показ содержимого корзины
    var cost = 0
    var out = '';
    cart = JSON.parse(localStorage.getItem('cart'))
    articuls = JSON.parse(localStorage.getItem('articuls'))
    // out += '<button class="close-button"><img class="basket-no-img"src="img/basket-no.png" alt="">Закрыть корзину</button><br>'
    out+='<div class="goods-info">'
    for (var key in articuls) {
        out += '<div class="goods-cart">';
        out += "<div class='goods-name'>"+data[key].name+"</div>"
        out += '<div class="p-m-t"><div class="pl-min"><div class="plus" data-art="' + key + '" data-art1="' + data[key].name + '"></div>' + articuls[key];
        out += '<div class="minus" data-art="' + key + '"data-art1="' + data[key].name + '"></div></div>';
        // out += '<div class="delete" data-art="' + key + '" data-art1="' + data[key].name + '"><img src="img/trash.png" alt="">Удалить товар</div></div>';
        out += "<div class='price-for-one-goods'>" + priceSet(Math.round((articuls[key] * data[key].cost) * 100) / 100) + "₽</div>";
        cost += (Math.round((articuls[key] * data[key].cost) * 100) / 100);
        out += "</div></div>"
    }
    out += "</div><div class='summa'>Итого: " + priceSet(cost) + " рублей</div>";
    // out += '<button class="delete-everthing">Удалить всё</button>';
    // out += '<a href="delivery.html"><div class="show-bask">Заказать</div></a>';
    $('.basket-hidden').css('display', 'none');

    $('.front-bottom').on('click', function () {
        console.log('allwork')
        Open()
        Open()
    })
    $('.basket').html(out)
    $('.plus').on('click', Plus);
    $('.minus').on('click', Minus);
}
showMiniCart()

function Plus() {
    articul = $(this).attr('data-art1')
    cart[articul]++

    articul = $(this).attr('data-art')
    articuls[articul]++
    saveCartToLS()

}

function Minus() {
    articul = $(this).attr('data-art1')
    if (cart[articul] > 1) {
        cart[articul]--
    }
    else {
        delete cart[articul]
    }

    articul = $(this).attr('data-art')
    if (articuls[articul] > 1) {
        articuls[articul]--
    }
    else {
        delete articuls[articul]
    }
    saveCartToLS()
}
function saveCartToLS() {
    //сохранение корзины в localstorage

    localStorage.setItem('articuls', JSON.stringify(articuls))
    localStorage.setItem('cart', JSON.stringify(cart))
    showMiniCart()
}