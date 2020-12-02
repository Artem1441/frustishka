function discharge() {
    $('.bask-on').css('animation', 'none')

}

function closeGoods(key) {
    var classNameFront = 'front ' + key
    var classNameBack = 'back ' + key
    $(document.getElementsByClassName(classNameFront)).css('transform', 'rotateY(0)')
    $(document.getElementsByClassName(classNameBack)).css('transform', 'rotateY(180deg)')
}
function openGoods(key) {
    var classNameFront = 'front ' + key
    var classNameBack = 'back ' + key
    $(document.getElementsByClassName(classNameFront)).css('transform', 'rotateY(180deg)')
    $(document.getElementsByClassName(classNameBack)).css('font-weigh', '500')
    $(document.getElementsByClassName(classNameBack)).css('text-align', 'justify')
    $(document.getElementsByClassName(classNameBack)).css('transform', 'rotateY(360deg)')

}
(function (w, d) {
    w.onload = function () {
        var wp = d.querySelector('.header'),
            colors = ['img/slide1.jpg', 'img/slide3.jpg', 'img/slide4.jpg'],
            ln = colors.length;

        var changeColor = function (i) {
            if (i < ln) {
                setTimeout(function () {
                    if ($(window).width() <= 1280) {
                        wp.style.cssText = "background-image: url(" + colors[i] + "); background-repeat: no-repeat;  background-size: contain contain";

                        $('.header').css('min-height', $(window).width() / 1.77)
                    }
                    else {
                        wp.style.cssText = "background-image: url(" + colors[i] + "); background-repeat: no-repeat;  background-size: cover;";
                    }
                    i++;
                    changeColor(i);
                }, 6000);
            } else {
                changeColor(0);
            }
        };

        changeColor(0);
    };
}(window, document));
$(function () {
    if ($(window).width() <= 1280) {
        $('.next').css('height', 450 / $(window).width() * 450)
        $('.header').css('min-height', $(window).width() / 1.77)
        $('.our-activity-block-img img').css('width', $(window).width() / 2 + 20)
        $('.our-activity-block-img img').css('height', $(window).width() / 2 + 20)

    }
    if ($(window).width() <= 590) {
        $('.our-activity-block-img img').css('width', $(window).width() / 2 + 50)
        $('.our-activity-block-img img').css('height', $(window).width() / 2 + 50)
    }
    if ($(window).width() <= 734) {
        $('.our-activity-text').css('width', $(window).width() - 120)
    }

    if ($(window).width() <= 900) {
        $('.menu-list').css('display', 'none')

    }
    else {
        $('.menu-list').css('display', 'flex')
    }
});
$('.open-menu').on('click', function () {
    // $('.menu-list-ul').css('height','auto');
    $('.menu-list-ul').slideToggle()
})



$(document).scroll(function () {
    if ($(window).scrollTop() > 900) {
        if ($(window).scrollTop() > 300 * $(window).width() / 1800) {
            $('.header-top').css({ "background": "#d58300", 'transition': '1s' })
            $('.menu-list-ul').css({ "background": "#d58300" })

        }
        else {
            $('.header-top').css({ "background": "rgba(255,255,255,0.1)", })
            // $('.menu-list-ul').css({ "background": "rgba(255,255,255,0.1)", })

        }
    }
});
$(document).scroll(function () {
    if ($(window).scrollTop() > 220 * $(window).width() / 1800) {
        $('.slider-main-text').css({ "visibility": "hidden", });
    }
    else {
        $('.slider-main-text').css({ "visibility": "visible" });
    }
});
$(document).scroll(function () {
    if ($(window).scrollTop() > 250 * $(window).width() / 1800) {
        $('.slider-comain-text').css({ "visibility": "hidden" });
    }
    else {
        $('.slider-comain-text').css({ "visibility": "visible" });
    }
});
$(document).scroll(function () {
    if ($(window).scrollTop() > 260 * $(window).width() / 1800) {
        $('.slider-cocomain-text').css({ "visibility": "hidden" });
    }
    else {
        $('.slider-cocomain-text').css({ "visibility": "visible" });
    }
});
$(document).scroll(function () {
    if ($(window).scrollTop() > 320 * $(window).width() / 1800) {
        $('.slider-btn').css({ "visibility": "hidden" });
    }
    else {
        $('.slider-btn').css({ "visibility": "visible" });
    }
});

$('.slider-btn').on('click', function () {
    window.scrollBy(0, $('.goods-items').offset().top-50)
})




//Вывод товаров

var cart = {};
var articuls = {};
//корзина
$('document').ready(function () {
    loadGoods();
    checkCart();
    showMiniCart();
});
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

function loadGoods() {
    var out = '';
    for (var key in data) {
        out += "<div class='goods-items-block wow flipInX'><div class='goods-item '>"
        out += "<div class='front " + key + "'><div class='foto' style='background-image:url(" + data[key]['image'] + ")'></div>";
        out += "<div class='low-front'><div class='price-front'>" + priceSet(data[key]['cost']) + "₽</div><div class='front-name'>" + data[key]['name'] + '</div>';
        if ($(window).width() > 475) {
            out += "<br><div class='front-weight'>" + data[key]['weight'] + "</div><div class='info-check ' onclick='openGoods(" + key + ")'><img src='img/info.png'></div></div></div>"
        }
        else {
            out += "<br><div class='front-weight'>" + data[key]['weight'] + "</div><div class='info-check ' onclick='openGoods(" + key + ")'><img src='img/info.png'></div><div class='front-bottom ' data-art='" + key + "' data-art1='" + data[key]['name'] + "'>Добавить в корзину</div></div></div>"
        }

        out += "<div class='back " + key + "'><div class='back-name'>" + data[key]['name'] + '</div><a class="close-goods" onclick="closeGoods(' + key + ')"></a><div class="back-desc">'
        out += "<p>Описание: </p>" + data[key]['description'] + " </div>"
        out += "<div class='back-info'><p>Общая информация: </p>"
        out += "<div class='back-block country'><span>Срок храниения: </span>" + data[key]['time'] + "</div>"
        out += "<div class='back-block'><span>Условия хранения: </span>" + data[key]['conditions'] + "</div>"
        out += "<div class='back-block country'><span>Страна: </span>" + data[key]['country'] + "</div></div>"
        out += "<div class='foods-power'><p>Пищевая ценность на 100 г: </p>"
        out += "<div class='back-block'><span>Белки:</span>" + data[key]['proteins'] + "</div>"
        out += "<div class='back-block'><span>Жиры:</span>" + data[key]['fats'] + "</div>"
        out += "<div class='back-block'><span>Углеводы:</span>" + data[key]['carbohydrates'] + "</div>"
        out += '<div class="back-block"><span>Калорийность:</span>' + data[key]['calorie'] + '</div></div>'
        if ($(window).width() > 475) {
            out += "</div></div><div class='front-bottom ' data-art='" + key + "' data-art1='" + data[key]['name'] + "'>Добавить в корзину</div></div>"
        }
        else {
            out += "</div></div></div>"
        }



    }

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
            'conditions': ' +3°C',
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
            'conditions': 'от -1°С до +3°С',
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
            'conditions': 'от +2°С до +8°С',
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
            'conditions': 'от +2°С до +10°С',
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
            'conditions': 'от +8°С до +16°С в холодильнике',
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
            'conditions': 'от -1°С до +3°С',
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
            'conditions': 'от +2°С до +5°С',
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
            'conditions': 'меньше +14°С',
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
        '1121': {
            'name': 'Хурма королёк',
            'cost': 119.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image': 'img/pear.jpg',
            'weight': '1 кг',
            'proteins': '0,72 г',
            'fats': '0,26 г',
            'carbohydrates': '24,37 г',
            'calorie': '92 ккал',
            'time': '14 суток',
            'conditions': 'от +3 до +7 °С',
            'country': '-'
        },
        '1121': {
            'name': 'Хурма Азербайджан',
            'cost': 219.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image': 'img/pear.jpg',
            'weight': '1 кг',
            'proteins': '0,5 г',
            'fats': '0,3 г',
            'carbohydrates': '15,3 г',
            'calorie': '66 ккал',
            'time': '14 суток',
            'conditions': 'от +5 до +8 °С',
            'country': 'Азербайджан'
        },
        '1122': {
            'name': 'Виноград Кишмиш Турция',
            'cost': 219.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image': 'img/pear.jpg',
            'weight': '1 кг',
            'proteins': '0,6 г',
            'fats': '0,2 г',
            'carbohydrates': '16,8 г',
            'calorie': '65 ккал',
            'time': '10 суток',
            'conditions': 'от +2°C до +6°C',
            'country': 'Турция'
        },
        '1123': {
            'name': 'Виноград Кишмиш Узбекистан',
            'cost': 219.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image': 'img/pear.jpg',
            'weight': '1 кг',
            'proteins': '0,6 г',
            'fats': '0,21 г',
            'carbohydrates': '16,4 г',
            'calorie': '66 ккал',
            'time': '14 суток',
            'conditions': 'от +2°C до +6°C',
            'country': 'Узбекистан'
        },
        '1124': {
            'name': 'Виноград Лидия',
            'cost': 169.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image': 'img/pear.jpg',
            'weight': '1 кг',
            'proteins': '0,6 г',
            'fats': '0,25 г',
            'carbohydrates': '19 г',
            'calorie': '75 ккал',
            'time': '2 месяца',
            'conditions': 'от 0 до +3°C',
            'country': 'Сербия'
        },
        '1125': {
            'name': 'Виноград Дамские Пальчики',
            'cost': 179.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image': 'img/pear.jpg',
            'weight': '1 кг',
            'proteins': '0,54 г',
            'fats': '0,08  г',
            'carbohydrates': '14,93 г',
            'calorie': '60 ккал',
            'time': '10 суток',
            'conditions': 'от 0 до +2°C',
            'country': 'Узбекистан'
        },
        '1126': {
            'name': 'Сливы',
            'cost': 149.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image': 'img/pear.jpg',
            'weight': '1 кг',
            'proteins': '0,8 г',
            'fats': '0,3  г',
            'carbohydrates': '9,6 г',
            'calorie': '42 ккал',
            'time': '14 суток',
            'conditions': 'от +8°C до + 12°C',
            'country': 'Сербия'
        },
        '1127': {
            'name': 'Гранат',
            'cost': 189.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image': 'img/pear.jpg',
            'weight': '1 кг',
            'proteins': '0,7 г',
            'fats': '0,6  г',
            'carbohydrates': '14,5 г',
            'calorie': '72 ккал',
            'time': '2 месяца',
            'conditions': 'от +4°C до + 6°C',
            'country': 'Азербайджан'
        },
        '1128': {
            'name': 'Айва',
            'cost': 199.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image': 'img/pear.jpg',
            'weight': '1 кг',
            'proteins': '0,6 г',
            'fats': '0,5  г',
            'carbohydrates': '9,8 г',
            'calorie': '38 ккал',
            'time': '1,5 месяца',
            'conditions': 'от +7°С до +10°С',
            'country': 'Узбекистан'
        },
        '1129': {
            'name': 'Груши Азербайджан',
            'cost': 179.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image': 'img/pear.jpg',
            'weight': '1 кг',
            'proteins': '0,68 г',
            'fats': '0,17  г',
            'carbohydrates': '10,81 г',
            'calorie': '42,96 ккал',
            'time': '21 суток',
            'conditions': 'от +2°C до +6°C',
            'country': 'Азербайджан'
        },
        '1129': {
            'name': 'Яблоко Венгерка',
            'cost': 119.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image': 'img/pear.jpg',
            'weight': '1 кг',
            'proteins': '0,4 г',
            'fats': '0,32  г',
            'carbohydrates': '9,7 г',
            'calorie': '42 ккал',
            'time': '2,5 месяца',
            'conditions': 'от +2°C до +4°C',
            'country': 'Азербайджан'
        },
        '1129': {
            'name': 'Бананы',
            'cost': 119.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image': 'img/pear.jpg',
            'weight': '1 кг',
            'proteins': '1,5 г',
            'fats': '0,2  г',
            'carbohydrates': '21,8 г',
            'calorie': '95 ккал',
            'time': '6 суток',
            'conditions': '+14°С отдельно от всех продуктов',
            'country': 'Эквадор'
        },
        '1130': {
            'name': 'Манго',
            'cost': 359.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image': 'img/pear.jpg',
            'weight': '1 шт',
            'proteins': '0,5 г',
            'fats': '0,3  г',
            'carbohydrates': '11,5 г',
            'calorie': '67 ккал',
            'time': '9 суток',
            'conditions': 'от +8°C до + 12°C',
            'country': 'Тайланд'
        },
        '1131': {
            'name': 'Лайм',
            'cost': 59.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image': 'img/pear.jpg',
            'weight': '1 шт',
            'proteins': '0,9 г',
            'fats': '0,1  г',
            'carbohydrates': '3 г',
            'calorie': '16 ккал',
            'time': '20 суток',
            'conditions': 'от +8°C до + 12°C',
            'country': 'Мексика'
        },
        '1132': {
            'name': 'Кокос',
            'cost': 169.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image': 'img/pear.jpg',
            'weight': '1 шт',
            'proteins': '3,4 г',
            'fats': '33,6  г',
            'carbohydrates': '6,2 г',
            'calorie': '354 ккал',
            'time': '25 суток',
            'conditions': 'от +2°С до +10°С',
            'country': 'Африка'
        },
        '1133': {
            'name': 'Ананас',
            'cost': 389.90,
            'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eaque cumque fugiat id hic consectetur sint repellendus ex vitae ab nesciunt',
            'image': 'img/pear.jpg',
            'weight': '1 шт',
            'proteins': '0,4 г',
            'fats': '0,2 г',
            'carbohydrates': '10,6 г',
            'calorie': '49 ккал',
            'time': '20 суток',
            'conditions': 'от +2°С до +10°С',
            'country': 'Эквадор'
        },
    }

    $('.goods-items').html(out);
    $('.front-bottom').on('click', AddToCart);
}
$(function () {
    if ($(window).width() <= 1030) {
        $('.goods-item').css('width', ($(window).width() - 30) / 3)

    }
    if ($(window).width() <= 710) {
        $('.goods-item').css('width', ($(window).width() - 30) / 2)
    }
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        $('.info-check').css('display', 'block')
        $('.close-goods').css('display', 'block')
        $('.header-top').css('top', '0')
    }
    else {
        var out = '<style> .goods-item:hover .front {transform: rotateY(180deg);} .goods-item:hover .back {transform: rotateY(360deg);}'
        $('.style').html(out)

    }
    if ($(window).width() <= 475) {
        $('.front-bottom').css('position', 'absolute')
        $('.front-bottom').css('bottom', '0')
        $('.front-bottom').css('left', '0')
        $('.front-bottom').css('width', ($(window).width() - 34) / 2)
        $('.info-check').css('bottom', '45px')
        $('.front-weight').css('bottom', '55px')


    }
});
function AddToCart() {
    //добавление товара в корзину

    var articul = $(this).attr('data-art1');
    if (cart[articul] > 0) {
        cart[articul]++
    }
    else {
        cart[articul] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart))

    var articul = $(this).attr('data-art');
    if (articuls[articul] > 0) {
        articuls[articul]++
    }
    else {
        articuls[articul] = 1;
    }
    localStorage.setItem('articuls', JSON.stringify(articuls))
    // showMiniCart()
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        $('.bask-on').css('animation', 'green-btn 1s linear')
        showMiniCart()
    }
    else {
        showMiniCart()
        Open()
    }
}
function checkCart() {
    //проверка на наличие данных в localStorage
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'))
    }
    if (localStorage.getItem('articuls') != null) {
        articuls = JSON.parse(localStorage.getItem('articuls'))
    }
}
function showMiniCart() {
    // показ содержимого корзины
    var cost = 0
    var out = '';
    if (localStorage.getItem('articuls') != null && localStorage.getItem('articuls') != '{}') {
        cart = JSON.parse(localStorage.getItem('cart'))
        out += '<button class="close-button"><img class="basket-no-img"src="img/basket-no.png" alt="">Закрыть корзину</button>'
        for (var key in articuls) {
            out += '<div class="goods-info"><img src="' + data[key].image + '" width="48" >';
            out += data[key].name
            out += '<br><div class="p-m-t"><div class="pl-min"><div class="plus" data-art="' + key + '" data-art1="' + data[key].name + '"></div>' + articuls[key];
            out += '<div class="minus" data-art="' + key + '"data-art1="' + data[key].name + '"></div></div>';
            out += '<div class="delete" data-art="' + key + '" data-art1="' + data[key].name + '"><img src="img/trash.png" alt="">Удалить товар</div></div>';
            out += "<div class='price-for-one-goods'>" + priceSet(Math.round((articuls[key] * data[key].cost) * 100) / 100) + "₽</div>";
            cost += (Math.round((articuls[key] * data[key].cost) * 100) / 100);
            out += "</div>"
        }
        out += "<div class='summa'>Всего: " + priceSet(cost) + " рублей</div>";
        out += '<button class="delete-everthing">Удалить всё</button>';
        out += '<a href="delivery.html"><div class="show-bask">Заказать</div></a>';
        $('.basket-hidden').css('display', 'none');

    }
    else {
        out += '<button class="close-button"><img class="basket-no-img"src="img/basket-no.png" alt="">Закрыть корзину</button>Коризина пуста';
        $('.basket-hidden').css('display', 'none');
        $('.all-hd').css('opacity', '1');

    }
    $('.front-bottom').on('click', function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            $('.bask-on').css('animation', 'green-btn 0.2s linear')
            setTimeout(discharge, 200);
        }
        else {
            Open()
        }
        // Open()
    })
    $('.basket').html(out)
    $('.plus').on('click', Plus);
    $('.minus').on('click', Minus);
    $('.delete').on('click', DeleteElem);
    $('button.delete-everthing').on('click', DeleteEverthing);

    $('.close-button').on('click', Close);

}
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    // $('.bask-on').on('click', OpenPhone);
    $('.bask-on').on('click', function () {
        $('.basket').slideToggle()
        $('.basket-hidden').slideToggle()
        $('.close-button').css('display','none')
        $('.basket-hidden').css('overflow', 'auto');
        $('.basket-hidden').css('width', screen.width);
        $('.basket-hidden').css('border-left', 'none');

    })

}
else {
    $('.bask-on').on('click', Open);
}
function checkOpacity() {
    if (basketHid == 'block') {
        $('.all-hd').css('opacity', '1');
    }
}

function Close() {
    $('.basket').css('display', 'none');
    $('.basket-hidden').css('display', 'none');
    $('.all-hd').css('max-width', '100%');
    $('.all-hd').css('opacity', '1');
    $('.header-top').css('right', '0');
    $('.bask-on').css('display', 'flex');
    $('.header-top').css('width', '100%');


}
function Open() {
    $(document).ready(function () {
        // Координаты курсора относительно всего документа
        $(document).click(function (event) {
            var x = event.pageX;
            var y = event.pageY;
            if (x < screen.width - 230 && $('.basket-hidden').css('display') == 'block') {
                $('.all-hd').css('opacity', '1')
            }
        });
    });
    $('.basket').css('display', 'block');
    $('.basket-hidden').css('display', 'block');
    $('.basket-hidden').css('overflow', 'auto');
    $('.header-top').css('right', '230px');
    $('.header-top').css('width', (screen.width - 230));
    $('.bask-on').css('display', 'none');
    $('.header-menu').css('height', '61.5px')
    $('.all-hd').css('max-width', (screen.width - 230));
    $('.all-hd').css('opacity', '0.65');


    if ($('.menu-list-ul').css('display') != 'none') {
        $('.menu-list-ul').slideToggle();
    }

    // $('.close-button').css('height', $('.header-menu').css('height'))

}
function OpenPhone() {
    $('.basket').css('display', 'block');
    $('.basket-hidden').css('display', 'block');
    $('.close-button').css('display','none')

    $('.basket-hidden').css('overflow', 'auto');
    $('.basket-hidden').css('width', screen.width);
    $('.basket-hidden').css('border-left', 'none');


}
function Plus() {
    articul = $(this).attr('data-art1')
    cart[articul]++

    articul = $(this).attr('data-art')
    articuls[articul]++
    saveCartToLS()
    // Open()
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        OpenPhone()
    }
    else {
        Open()
    }

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
    // Open()
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        OpenPhone()
    }
    else {
        Open()
    }
}
function DeleteElem() {
    articul = $(this).attr('data-art1')
    delete cart[articul]
    articul = $(this).attr('data-art')
    delete articuls[articul]
    saveCartToLS()
    // Open()
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        OpenPhone()
    }
    else {
        Open()
    }
}
function DeleteEverthing() {
    if (localStorage.getItem('articuls') != null) {
        cart = JSON.parse(localStorage.getItem('cart'))
        for (var key in articuls) {
            delete cart[data[key]['name']]
            delete articuls[key]
        }
    }
    saveCartToLS()
    $('.basket-hidden').css('display', 'none');
    Close()
    showMiniCart()

}
function saveCartToLS() {
    //сохранение корзины в localstorage

    localStorage.setItem('articuls', JSON.stringify(articuls))
    localStorage.setItem('cart', JSON.stringify(cart))
    showMiniCart()
}

