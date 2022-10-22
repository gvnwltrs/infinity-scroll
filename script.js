const imageContainer = document.getElementById('image-container'); 
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0; 
let totalImages = 0; 
let photosArray = []; 

// unsplash api
const count = 30;
const apiKey = 'y4Q_VuqSkl7ShYzHFATbTdp4RxEzdZlThPy_HZNEGG4';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// check if all images were loaded
function imageLoaded() {
    imagesLoaded++;
    console.log(imagesLoaded); 
    if (imagesLoaded === totalImages) {
        ready = true; 
        loader.hidden = true;
        console.log('ready =', ready); 
    }
}

// helper function to set attributes on DOM elements 
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]); 
    }
}

// create elements for links & photos, add to DOM
function displayPhotos() {
    imagesLoaded = 0; 
    totalImages = photosArray.length;
    console.log('total images', totalImages); 
    // run function for each object in photosArray
    photosArray.forEach((photo) => {
        // create <a> to link to unsplash
        const item = document.createElement('a'); 
        // create <img> for photo 
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        }); 
        const img = document.createElement('img'); 
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        // event listener, check when each is finished loading
        img.addEventListener('load', imageLoaded); 
        // put <img> inside <a>, then put both inside imageContainer element
        item.appendChild(img); 
        imageContainer.appendChild(item); 
    }); 
}

// get photos from unsplash api
async function getPhotos() {

    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos(); 
    } catch (error) {

    }
}

// check to see if scrolling near bottom of page, load more photos 
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhotos();
    }
}); 

// test 
function test() {
    return 'hello';
}

// on load 
getPhotos();

export {test, apiUrl, count, apiKey, getPhotos, photosArray, displayPhotos}; 
// module.exports = {test, apiUrl, count, apiKey, getPhotos, photosArray, displayPhotos}; 