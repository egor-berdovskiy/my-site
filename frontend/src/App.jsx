import React from 'react';

// Styles
import './css/main.css';

// Components
import Header from './components/Header';
import Welcome from './components/Welcome';
import Works from './components/Works';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

import { Link } from './components/TextUtils';


class App extends React.Component {
  render() {
    const PROJECTS = [
      {category: 'Телеграм боты 🤖', projects: [{id: 0, name: 'Бот-магазин', description: 'Магазин внутри мессенджера telegram, с панелью администратора, которая предоставляет богатый функционал для анализа продаж, редактирования каталога магазина.', example: '@thebestbookshopbot', url: 'https://t.me/telegrambootshop_bot/'}, {id: 1, name: 'Бот два', description: 'Какое то описание для какого то бота под номером два в категории телеграм ботов.', example: '@robot_bot', url: 'https://t.me/robot_bot'}, {id: 2, name: 'Бот три', description: 'Очередное бессмысленное описание для третьего бота в категории названной в описании к боту два, этот текст не несет смысла, он преднозначен для заполнения пустоты и проверки работоспособности.', example: '@robot3_bot', url: 'https://t.me/robot3_bot'}]},
      {category: 'Веб-Сайты 💻', projects: [{id: 0, name: 'сайт 1', description: 'описание сайта 1', features: 'особенности сайта 1'}, {id: 1, name: 'сайт 2', description: 'описание сайта 2', features: 'особенности сайта 2'}, {id: 2, name: 'сайт 3', description: 'описание сайта 3', features: 'особенности сайта 3'}]},
      {category: 'Прочее 🐱‍👤', projects: [{id: 0, name: 'проект 1', description: 'описание проекта 1', features: 'особенности проекта 1'}, {id: 1, name: 'проект 2', description: 'описание проекта 2', features: 'особенности проекта 2'}, {id: 2, name: 'проект 3', description: 'описание проекта 3', features: 'особенности проекта 3'}]},
    ]

    return(
      <>
        <Header />
        <Welcome telegram='kap1bar1k' />
        <Works projects={PROJECTS} />
        <Contacts />
        <Footer />
      </>
    )
  };
};

export default App;
