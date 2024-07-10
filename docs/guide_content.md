# Гайд з додавання контенту на Strapi

## Collection Types

### 1. Page Content

Колекція, яка містить метадані та іншу інформацію сторінок.

| Поле | Опис |
|------|------|
| metaTitle | Назва сторінки у браузері |
| metaDescription | Опис сторінки у браузері |
| header | Заголовок на сторінці |
| position | Номер на навігаційній панелі (для brushes, fonts, textures, 3d models) |
| contentfulContentType | ContentType у Contentful (brush, fonts, texture, threedmodels, palettes) |
| href | Для сторінок tutorials та support (не змінювати) |
| icon | У форматі SVG, розмір 24х24 (розмір самого вектора 20х20) |

**Примітка:** Для сторінок tutorials та support не потрібно вказувати position.

### 2. Site Configuration

Загальні налаштування вебсайту.

| Поле | Опис |
|------|------|
| appStoreURL | Посилання на мобільний застосунок в App Store |
| shareUsURL | Посилання при натисканні на панелі задач на "Share our app!" |
| supportFormURL | Посилання на гугл форму на сторінці Support (формат: https://docs.google.com/forms/d/e/ХХХХХХХХХХХХХХХХ/viewform?embedded=true) |

### 3. Tutorial Item

Містить дані на сторінці туторіалів.

| Поле | Опис |
|------|------|
| title | Короткий опис ("How to install 3D Models" і так далі) |
| position | Порядок розташування на сторінці |
| href | Посилання на деталі туторіала (Спочатку потрібно створити Tutorial Item Data, а далі вибрати у href створений екземпляр) |

### 4. Tutorial Item Data

Колекція, яка містить інформацію про певний туторіал.

| Поле | Опис |
|------|------|
| header | Заголовок на сторінці |
| mainImage | Головне (перше) зображення на сторінці |
| href | Шлях у браузері (можна змінювати) |
| metaTitle | Назва сторінки у браузері |
| metaDescription | Опис сторінки у браузері |
Поле **contentBlocks** містить наступні поля: ***title*** (заголовок блоку) та ***content*** (список, зображення текст, інфо блок і так далі)
