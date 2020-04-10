import {
    getUsefulContents
} from '/modules/file.js';

getUsefulContents('http://www.example.com',
    data => {
        doSomethingUseful(data);
    });