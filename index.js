/* global Dropzone */

/**
 * @see http://www.dropzonejs.com/#configuration
 */
const option = {
  url: '/',
  method: 'post',
  maxFiles: 1,
  parallelUploads: 1,
  clickable: true,
  ignoreHiddenFiles: true,
  acceptedFiles: 'image/*',
  autoProcessQueue: false,
  autoQueue: true,
  addRemoveLinks: false,
  previewsContainer: '#preview',
  hiddenInputContainer: '#demo',
  previewTemplate: `<div><img data-dz-thumbnail /></div>`
};

Dropzone.autoDiscover = false;
const dz = new Dropzone('#demo', option);

// disable to select over maxfiles
dz.on('maxfilesreached', file => {
  document.getElementById('demo').classList.add('d-n');
  document.getElementById('confirm').classList.remove('d-n');
});

dz.on('maxfilesexceeded', file => {
  dz.remove(file);
});

dz.on('removedfile', () => {
  document.getElementById('demo').classList.remove('d-n');
  document.getElementById('confirm').classList.add('d-n');
});

document.getElementById('removeButton').addEventListener('click', () => {
  dz.removeAllFiles(true);
});
