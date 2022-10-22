const imageContainer = document.getElementById('image-container'); 
const loader = document.getElementById('loader');

let photosArray = []; 

// unsplash api
const count = 10;
const apiKey = 'y4Q_VuqSkl7ShYzHFATbTdp4RxEzdZlThPy_HZNEGG4';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// helper function to set attributes on DOM elements 
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]); 
    }
}

// create elements for links & photos, add to DOM
function displayPhotos() {
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
        // put <img> inside <a>, then put both inside imageContainer element
        item.appendChild(img); 
        imageContainer.appendChild(item); 
    }); 

    return true;
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

// test 
function test() {
    return 'hello';
}

// on load 
getPhotos();

export {test, apiUrl, count, apiKey, getPhotos, photosArray}; 