import React from "react";
import classes from './Paginator.module.css';

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    // pagesCount заменил на 5
    for (let i = 1; i <= 5; i++) {
        // масив pages заполним .push значениями i
        pages.push(i);
    }
// по pages можем пробежаться .map. внутри map приходит страничка
// если currentPage равна текущей странице p, то добавляется класс selectedPage
    return <div>
        {pages.map(p => {
            return <span className={currentPage === p && classes.selectedPage}
                // хотим засетать CurrentPage. Итерируемся по p и она будет текущей страничкой
                // при нажатии на кнопку нужно поменять CurrentPage
                // обработчик событий аномимная функция. Кнопка вызовет функцию и передаст е
                // мы внутри обработчика вызовем наш метод this.onPageChanged(p) и передадим p
                // наш метод не вызовется, пока не вызовется анонимная функция. Анонимная функция вызовется при клике на span

                         onClick={(е) => {
                             onPageChanged(p);
                         }}>{p}</span>
        })}
    </div>
}

export default Paginator;