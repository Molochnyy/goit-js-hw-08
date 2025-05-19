const images = [
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
        description: 'Hokkaido Flower',
        id: 1,
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
        id: 2,
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
        id: 3,
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
        id: 4,
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
        id: 5,
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
        id: 6,
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
        id: 7,
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
        id: 8,
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
        id: 9,
    },
];

//////////////////////////////MARCUP//////////////////////////////////////////////////////////////////
const ulElem = document.querySelector(".gallery");

function imageTemplate(img) {
    return `<li class="gallery-item">
    <a class="gallery-link" href=${img.original}>
        <img
            class="gallery-image"
            src= ${img.preview}
            data-source=${img.original}
            data-id = ${img.id}
            alt=${img.description}
        />
    </a>
</li>`;
};

function imagesTemplate(imgs) {
    return imgs.map(imageTemplate).join('\n');
};

const galleryMarkup = imagesTemplate(images);

ulElem.insertAdjacentHTML('beforeend', galleryMarkup);

//////////////////////MODAL///////////////////////////////////////////////////////////////////////////
let instance;

function openModal(img) {
    // img.preventDefault();
    instance = basicLightbox.create(`
        <div class="modal">
           <img src=${img.original} alt=${img.description} >
        </div>
    `);

    instance.show();

    document.addEventListener('keydown', handleCloseModal);
};

function closeModal() {
    instance.close();
    document.removeEventListener('keydown', handleCloseModal);
};

function handleCloseModal(e) {
    if (e.code === 'Escape') {
        closeModal();
    };
};

// const galleryItem = document.querySelector('.gallery-item');
ulElem.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
        return;
    };
    const elem = e.target.closest('li');
    const id = elem.dataset.id;
    const img = images.find(el => el.id === id);
    openModal(img);
    // console.log(elem);
});