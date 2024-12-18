const images = [ 
  {
    preview: 'IMAGES/1.png',
    original: 'IMAGES/1.png',
    description: 'Image 1',
  },
  {
    preview: 'IMAGES/2.png',
    original: 'IMAGES/2.png',
    description: 'Image 2',
  },
  {
    preview: 'IMAGES/3.png',
    original: 'IMAGES/3.png',
    description: 'Image 3',
  },
  {
    preview: 'IMAGES/4.png',
    original: 'IMAGES/4.png',
    description: 'Image 4',
  },
  {
    preview: 'IMAGES/5.png',
    original: 'IMAGES/5.png',
    description: 'Image 5',
  },
  {
    preview: 'IMAGES/6.png',
    original: 'IMAGES/6.png',
    description: 'Image 6',
  },
  {
    preview: 'IMAGES/7.png',
    original: 'IMAGES/7.png',
    description: 'Image 7',
  },
  {
    preview: 'IMAGES/8.png',
    original: 'IMAGES/8.png',
    description: 'Image 8',
  },
];

const galleryContainer = document.querySelector('.gallery');
// Розмітка для галереї на основі масиву images
const galleryMarkup = images
  .map( 
    ({ preview, original, description }) => `
  <li class="gallery__item">  
    <img 
      class="gallery__image" 
      src="${preview}" 
      data-source="${original}" 
      alt="${description}" 
    />
  </li>
`
  )
  .join(''); // Об'єднуємо всі елементи розмітки в один рядок

galleryContainer.innerHTML = galleryMarkup;

// Делегування подій
galleryContainer.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  const isImage = event.target.classList.contains('gallery__image');
  if (!isImage) return;

  const largeImageURL = event.target.dataset.source;

  // Використання basicLightbox
  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" alt="${event.target.alt}" />
  `);
  instance.show();
}





