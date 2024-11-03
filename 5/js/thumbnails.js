const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.picture');

mockedPhotos.forEach((photo) => {
  const thubanail = template.cloneNode(true);

  const image = document.querySelector('.picture__img');
  image.src = photo.url;
  image.alt = photo.description;

  template.querySelector('.picture__comments').textContent = photo.comments.length;
  template.querySelector('.picture__likes').textContent = photo.likes;

  container.appendChild(template);

});

