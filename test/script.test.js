//create virtual DOM
import {beforeEach, describe, it, expect, vi } from 'vitest'; 
import fs from 'fs';
import path from 'path';
import { Window } from 'happy-dom'
const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();
const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);
vi.stubGlobal('document', document);

import { executionAsyncId } from 'async_hooks';
import {test, apiUrl, count, apiKey, getPhotos, displayPhotos} from '../script.js';

// const _script = require("../script.js");
// const chai = chai.assert;

describe("Infinity-scroll Tests", () => {
    beforeEach( async () => {
      
    });

    it("should return hello after test function call", () => {
        let output = test();
        expect(output).toEqual('hello');
    });

    it("should have api url content", () => {
        expect(apiUrl).toBeDefined();
    });

    it("should have a count set for 10 photos", () => {
        expect(count).toBe(10); 
    });

    it("should have a valid unsplash api key set", () => {
        expect(apiKey).not.toEqual(''); 
    });

    it("should have function to get random photos", () => {
        expect(getPhotos).toBeDefined();
    }); 

    it("should have something to display all the photos", () => {
        expect(displayPhotos).toBeDefined(); 
    });

    it("should have images loaded", () => {
        const imageContainer = document.getElementById('image-container');
        const photos = imageContainer.childElementCount;
        console.log(photos); 

        expect(photos).not.toBeNull();
    });
});

// mocha.run();