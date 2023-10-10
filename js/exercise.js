// Завдання
// Зверстати макет. Підключити динамічні елементи (див. нижче)

// Технічні вимоги до верстки
// Потрібно зробити верстку тільки під широкоформатні монітори з шириною екрану 1200 пікселів
// або більше(тобто ширина контенту фіксована в пікселях).Максимальна ширина контейнера з
// контентом – 1160 пікселів(крім другого блоку з квадратами).
// Фонове зображення в шапці повинне займати всю доступну ширину екрана і не рухатися під час
// скролу вниз(ефект паралаксу).
// Адаптивна верстка під різні роздільні здатності екрана НЕ потрібна.
// Картки в секції Breaking news мають бути клікабельними посиланнями.
// Секція Gallery of best images не є обов'язковою для виконання.
// Верстка має бути виконана без використання CSS бібліотек типу Bootstrap або Materialize.

// Динамічні елементи на сторінці:
// Вкладки у секції Our services повинні перемикатися при натисканні мишею. Текст та картинки
// для інших вкладок додати будь - які.

// Кнопка Load more у секції Our amazing work імітує завантаження з сервера нових картинок.
// При її натисканні в секції знизу мають з'явитись ще 12 картинок (зображення можна взяти
// будь - які). Після цього кнопка зникає.
// Кнопки на вкладці Our amazing work є "фільтрами продукції". Попередньо кожній із картинок
// потрібно присвоїти одну з чотирьох категорій, на ваш розсуд(на макеті це Graphic design, Web
// design, Landing pages, Wordpress).При натисканні на кнопку категорії необхідно показати
// лише ті картинки, які належать до цієї категорії.All показує картинки з усіх категорій.
// Категорії можна перейменувати, картинки для категорій взяти будь - які.

// Карусель на вкладці What people say about theHam має бути робочою, по кліку як на іконку
// фотографії внизу, так і на стрілки вправо - вліво.У каруселі має змінюватися як картинка, і
// текст.Карусель обов'язково має бути з анімацією.
// Для підключення динамічних елементів можна використовувати будь-які бібліотеки – як
// jQuery / його плагіни, так і чистий Javascript код.

// Необов'язкові завдання підвищеної складності:
// Кнопку Load more у секції Our amazing work можна натиснути двічі, кожне натискання додає
// 12 картинок знизу.Тобто максимум у цій секції може бути 36 картинок.Після другого натискання
// кнопка зникає.
// Зверстати також секцію Gallery of best images, розташувати картинки всередині блоку за
// допомогою плагіну Masonry.
// Кнопка Load more у секції Gallery of best images також має бути робочою та додавати порцію
// нових картинок на сторінку.
// При натисканні на кожну з кнопок Load more імітувати завантаження картинок із сервера.
// Показувати замість кнопки або над нею дві секунди CSS анімацію завантаження(можна написати
// самому або взяти будь - який приклад з інтернету, наприклад тут або тут), і лише після
// цього додавати картинки на сторінку.
// Розмістити проект в інтернеті за допомогою Github pages або Gitlab pages (Не забудьте потім
// додати посилання на резюме).
// Для зручності всі картинки з макету розміщені в архіві.

// Успіху!



/* ------ Section Our-services ------ */

const activePage = document.querySelectorAll('.our-services-item');
const activeContent = document.querySelectorAll('.our-services-content');

activePage.forEach((page) => {

    page.onclick = function () {
        for (const navLink of activePage) {
        navLink.classList.remove("active");
        for (const navContent of activeContent) {
            navContent.classList.add("active-content");
        }
    }
        page.classList.add("active");
        const dataTab = page.getAttribute('data-tab');
        document.getElementById(dataTab).classList.remove("active-content");  
    }  
})


/* ------ Section Our-amazing-work ------ */

const loadBtn = document.querySelector('.load-more-button');
let loadPic= 12;

const activeCategory = document.querySelectorAll('.our-amazing-work-item');
const showPic = document.querySelectorAll('.our-amazing-work-overlay');

activeCategory.forEach((category) => {
  
    category.onclick = function () {

        for (const navCategory of activeCategory) {
            navCategory.classList.remove("active-category");
            for (const nav of showPic) {
                nav.classList.add("active-pic");
            }
        }
        category.classList.add("active-category");
        const dataCategory = category.getAttribute('data-category');

        if (dataCategory === 'all') {
            showPic.forEach((element) => {
                element.classList.remove("active-pic");
            })
        } else {
            const picId = document.querySelectorAll(`#${dataCategory}`);
            picId.forEach((element) => {
                element.classList.remove("active-pic");
            })
        }
    }
})

    
loadBtn.addEventListener('click', function () {
    
    const loadIp = document.querySelector('.load');  
        loadIp.classList.remove('none');
    setTimeout(function () {
        for (let i = loadPic; i < loadPic + 12; i++) {
    
            if (showPic[i]) {
                showPic[i].classList.remove('none');// Показываем следующие 12 картинок
                loadIp.classList.add('none');
            }
        }
        loadPic += 12;
        if (loadPic >= 36) {
            loadBtn.style.display = 'none';
        }
    }, 2000);
});


/* ------ Section People Say ------ */

let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const thumbnails = document.querySelectorAll(".people-thumbnail");

const activePeople = document.querySelectorAll('.active-people');
const activeText = document.querySelectorAll('.people-say-text');

function thumbnailSelection (selectedIndex) {
    thumbnails.forEach((thumbnail, index) => {
        if (index === selectedIndex) {
            thumbnail.classList.add('selectedy');
        } else {
            thumbnail.classList.remove('selectedy');
        }
    })

activeText.forEach((text, index) => {
    if (index === selectedIndex) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
});
}

// При нажатии на миниатюру 
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        offset = 167 * index;
        sliderLine.style.left = -offset + 'px';
        thumbnailSelection(index);
    });
});

// При нажатии на кнопки
document.querySelector('.nextBtn').addEventListener('click', function () {
    offset += 167;
    if (offset > 501) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
    const selectedIndex = offset / 167;
    thumbnailSelection(selectedIndex);
});

document.querySelector('.prevBtn').addEventListener('click', function () {
    offset -= 167;
    if (offset < 0) {
        offset = 501;
    }
    sliderLine.style.left = -offset + 'px';
    const selectedIndex = offset / 167;
    thumbnailSelection(selectedIndex);
});

thumbnailSelection(0);

/* ------ Section Gallery of best images ------ */

const elementsHov = document.querySelectorAll('.element-hover');
const elementsCover = document.querySelectorAll('.cover-item-elements-gride');

elementsHov.forEach((elem, index) => {
let elementCover = elementsCover[index];
    elem.addEventListener('mouseover', ()=> {
        elementCover.style.display = 'flex';
    });
    elem.addEventListener('mouseout', () => {
        elementCover.style.display='none';
    });
    }
)

const elementsHov2 = document.querySelectorAll('.element-item2');
const elementsCover2 = document.querySelectorAll('.cover-item-elements-gride2');

elementsHov2.forEach((elem, index) => {
let elementCover2 = elementsCover2[index];
    elem.addEventListener('mouseover', ()=> {
        elementCover2.style.display = 'flex';
    });
    elem.addEventListener('mouseout', () => {
        elementCover2.style.display='none';
    });
    }
)
const elementsHov3 = document.querySelectorAll('.element-item3');
const elementsCover3 = document.querySelectorAll('.cover-item-elements-gride3');

elementsHov3.forEach((elem, index) => {
let elementCover3 = elementsCover3[index];
    elem.addEventListener('mouseover', ()=> {
        elementCover3.style.display = 'flex';
    });
    elem.addEventListener('mouseout', () => {
        elementCover3.style.display = 'none';
    });
    }
)


let $grid = $('.elements-gride').imagesLoaded(function () {
    $grid.masonry({
        itemSelector: '.element-item',
        columnWidth: 378,
        gutter: 13
    });
});
let $grid2 = $('.elements-gride2').imagesLoaded(function () {
    $grid2.masonry({
        itemSelector: '.element-item2',
        columnWidth: 180,
        gutter: 2
    });
});
let $grid3 = $('.elements-gride3').imagesLoaded(function () {
    $grid3.masonry({
        itemSelector: '.element-item3',
        columnWidth: 120,
        gutter: 1
    });
});


const galleryBtn = document.getElementById('gallery-button');
// let loadGalleryItem = 8;    
// const showGalleryImage = document.querySelectorAll('.element-item');

// galleryBtn.addEventListener('click', function () {
    
//     const galleryLoadIp = document.querySelector('.gallery-load');  
//         galleryLoadIp.classList.remove('none');
//     setTimeout(function () {
//         for (let i = loadGalleryItem; i < loadGalleryItem + 8; i++) {
    
//             if (showGalleryImage[i]) {
//                 showGalleryImage[i].classList.remove('element-item-none');// Показываем следующие 12 картинок
//                 galleryLoadIp.classList.add('element-item-none');
//             }
//         }
//         loadGalleryItem += 8;
//         if (loadGalleryItem >= 16) {
//             galleryBtn.style.display = 'none';
//         }
//     }, 2000);
// });



galleryBtn.addEventListener('click', function () {
    
    const galleryLoadIp = document.querySelector('.gallery-load');  
        galleryLoadIp.classList.remove('none');
    setTimeout(function () {
                galleryLoadIp.classList.add('none');
            }
    , 100000);
});
