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

![Page_content](https://github.com/eugenezuban/strapi-cloud-template-blog-90625fdd1a/assets/106373921/73a9cbaf-8f6d-493d-ad6e-f50ce19291e5)

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

![Tutorial_item](https://github.com/eugenezuban/strapi-cloud-template-blog-90625fdd1a/assets/106373921/b481bd2e-0d5e-4a03-87c5-f2cb0305cb63)

### 4. Tutorial Item Data

Колекція, яка містить інформацію про певний туторіал.

| Поле | Опис |
|------|------|
| header | Заголовок на сторінці |
| mainImage | Головне (перше) зображення на сторінці |
| href | Шлях у браузері (можна змінювати) |
| metaTitle | Назва сторінки у браузері |
| metaDescription | Опис сторінки у браузері |

Поле **contentBlocks** містить наступні поля:
- **title** (заголовок блоку)
- **content** (список, зображення текст, інфо блок і так далі)

![Tutorial_item_data](https://github.com/eugenezuban/strapi-cloud-template-blog-90625fdd1a/assets/106373921/1a192792-ed0f-475a-b39f-27cf0e3ff2f9)

#### Content Blocks:
![Content_blocks](https://github.com/eugenezuban/strapi-cloud-template-blog-90625fdd1a/assets/106373921/9a707cb7-70d9-4340-9c18-8fc9be9c16ed)

#### Content Blocks fields:
![Content_blocks_fields](https://github.com/eugenezuban/strapi-cloud-template-blog-90625fdd1a/assets/106373921/b5be7abc-a38b-4ce4-8b59-842f8ba0e8ba)

#### The contents types:
- Numbered List: 
![Numbered_list](https://github.com/eugenezuban/strapi-cloud-template-blog-90625fdd1a/assets/106373921/8ff84c83-2256-4f38-bc4e-25d91828152b)
- Text, link, Image: 
![text_link_iamge](https://github.com/eugenezuban/strapi-cloud-template-blog-90625fdd1a/assets/106373921/f1c51873-8790-4e1b-8d1b-9f18c5007bd0)
- Bold text: 
![bold_text](https://github.com/eugenezuban/strapi-cloud-template-blog-90625fdd1a/assets/106373921/8019b85e-990d-4ab5-946d-927ccebccd0c)
- Info компонент: 
![info-component](https://github.com/eugenezuban/strapi-cloud-template-blog-90625fdd1a/assets/106373921/732d2334-cb57-437a-8d64-f865d804a5a8)
- Bulleted list: 
![bulleted_list](https://github.com/eugenezuban/strapi-cloud-template-blog-90625fdd1a/assets/106373921/68bbf341-9097-4fef-90bb-0fee2acbc254)

## Важлива примітка

При копіюванні та вставці контенту, наприклад, цілого нумерованого списку (Numbered list), дотримуйтесь наступного порядку дій:

1. У полі content (що знаходиться в contentBlocks) спочатку виберіть відповідний тип контенту (наприклад, Numbered list).
2. Тільки після цього вставляйте скопійований контент.

Це забезпечить правильне форматування та відображення вашого контенту в Strapi.
