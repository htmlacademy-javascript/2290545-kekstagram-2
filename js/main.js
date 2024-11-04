import { getPhotoArray } from './data.js';
import { renderThumbnails } from './thumbnails.js';

export const arr = getPhotoArray();
renderThumbnails(arr);


