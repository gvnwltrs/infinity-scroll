import { executionAsyncId } from 'async_hooks';
import {describe, it, expect, vi } from 'vitest'; 

//create virtual DOM
import fs from 'fs';
import path from 'path';
import { Window } from 'happy-dom'

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();


const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);
vi.stubGlobal('document', document);

import {test, apiUrl, count, apiKey, getPhotos, displayPhotos} from '../script.js';

describe("Infinity-scroll Tests", () => {

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

    // it("should have something to display all the photos", () => {
    //     expect(displayPhotos).toBeDefined(); 
    // });

});