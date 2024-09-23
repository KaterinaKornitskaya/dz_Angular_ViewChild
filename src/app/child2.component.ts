// Директива import импортирует функциональность модуля angular/core, 
// предоставляя доступ к функции декоратора @Component.
import { Component } from '@angular/core';

@Component({
    selector: 'child2_comp',
    standalone: true,
    templateUrl: './child2.component.html',
    styleUrls: ['./app.component.css']
})

export class ChildComponent2  {
    name = 'component2';
    title ='Bill Gates';
    paragraph1 = `Американский предприниматель, общественный деятель, филантроп, один из создателей компании Microsoft.`;
    paragraph2 = `Дата рождения: 28.10.1955.`;
    paragraph3 = `Родился в Сиэтле, штат Вашингтон в семье корпоративного адвоката Уильяма Генри Гейтса II и 
    члена совета директоров First Interstate Bank, Pacific Northwest Bell и национального совета USWest, United 
    Way Мэри Максвелл Гейтс.`;
    paragraph4 = `Билл Гейтс учился в муниципальной начальной школе, а затем - в частной школе Lakeside School. 
    В 1973 году он поступил в Гарвардский университет на факультет права, но был отчислен в 1975 году за 
    неуспеваемость и прогулы.`;
    paragraph5 = `В 1970 была создана первая компания Traf-O-Data в которой работал Билл Гейтс и его одноклассники 
    Пол Аллен и Пол Гилберт. Компания занималась разработкой программы для оптимизации уличного движения, это была 
    первая успешная программа проданная Биллом Гейтсом правительству за $20 тыс.`;
    paragraph6 = `В 1974 году компания MITS создала новый персональный компьютер - Аltair 8800 и Билл предлагает 
    для этого компьютера совершенно новый язык программирования, позже завоевавший весь мир - BASIC. Пробный пуск 
    нового языка прошел удачно и Гейтс получает в ней работу.`;
    paragraph7 = `В 1975 году Гейтс совместно с Алленом основали компанию Micro-Soft, позднее названую Microsoft Corporation.`;
    paragraph8 = `В 1993 году двадцать пять миллионов человек в мире пользуются Windows как зарегистрированные пользователи.`;
    paragraph9 = `14 декабря 2004 года Билл Гейтс вошёл в совет Berkshire Hathaway - конгломерат, который включает 
    в себя Geico (автомобильное страхование), Benjamin Moore (краски) и Fruit of the Loom (текстиль). Гейтс также 
    входит в состав совета Icos, биотехнологической компании Bothell.`;
    paragraph10 = `С 27 июня 2008 года Билл Гейтс передал свои полномочия Стиву Балмеру, генеральному директору Microsoft,
     но остался главой Совета директоров и крупнейшим держателем акций Microsoft – 8,7%.`;
    paragraph11 = `2 декабря 2015 года вместе с Цукербергом основал фонд Breakthrough Energy Coalition, призванного 
    привлекать частные инвестиции в поиск и разработку источников чистой и альтернативной энергии. Создал инициативу 
    Mission Innovation, объединяющую 20 стран, включая Великобританию, США, Бразилию, Индию, Китай и другие. Задача 
    инициативы заключается в двукратном увеличении уровня государственных инвестиций в разработку источников чистой 
    энергии в течение следующих пяти лет с $10 млрд до $20 млрд в год.`;
    paragraph12 = `В период с 1996 по 2007 год был самым богатым человеком планеты по версии журнала Forbes.`;
    paragraph13 = `9 декабря 2010 года Билл Гейтс, Мелинда Гейтс и инвестор Уоррен Баффетт подписали обязательство, 
    которое они назвали "Клятвой дарения", которое заключается в том, что все трое обязуются пожертвовать не менее 
    половины своего состояния на благотворительность.`;
    paragraph14 = `В 1999 году Билл Гейтс написал книгу "Бизнес со скоростью мысли" (англ. Business @ theSpeedofThought), 
    которая показывает, как информационные технологии могут решать бизнес-задачи в совершенно новом ключе.`;
  }