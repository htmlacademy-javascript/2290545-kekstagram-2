import {photoArr} from './data.js';
import {renderThumbnails} from './thumbnails.js';
import {initGallery} from './gallery.js';
import {initUploadModal} from './uploadForm.js';
import {initScale} from './scale.js';

renderThumbnails(photoArr);
initGallery();
initUploadModal();
initScale();


