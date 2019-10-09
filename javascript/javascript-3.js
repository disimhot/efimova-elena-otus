/*
getPath - поиск уникального селектора
Написать алгоритм и функцию `getPath()`, находяющую уникальный css-селектор для элемента в документе.
Уникальный селектор может быть использован `document.querySelector()` и возвращать исходный элемент.
`document.querySelectorAll()`, вызванный с этим селектором, не должен находить никаких элементов, кроме исходного.

```javascript
$0 // HTMLElement
getPath($0) // => "..."
```
*/
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const html =
    `<!DOCTYPE html>
        <div class="bar foo">
        <div id="unique">
            <a href="#" class="href"></a>
        </div>
        <div>
            <a href="#" class="href"></a>
            <a href="#" class="href" id="test"></a>
        </div>
        </div>`;
global.document = new JSDOM(html).window.document;

let searchedElem = document.querySelector('#test')
function getPath(element) {
    let searchedSelector = element.tagName;

    console.log('searchedSelector', searchedSelector);

    // if (element.id) {
    //     searchedSelector += '#' + element.id;
    //     return searchedSelector;
    // } else 
    if(element.className) {
        let classElement = '.' + element.className.replace(/ /g,'.');
        searchedSelector += classElement;
        if (checkPath(searchedSelector)){
            console.log('to be continued');
            let index = [...searchedElem.parentNode.children].indexOf(searchedElem);
            console.log('index', index);
        } else return searchedSelector
    }
    // Иерархия
    //     element.parentElement.parentElement //до html
    // Уникальные атрибуты
    //     element.id
    //     element.classList
    //     element.attributes

    //     HIERARCHY = A stack of the element’s hierarchy, climbing up the DOM tree
    //     For each element in the HIERARCHY analyse the following in sequence:
    //     2.1 Check for an ID
    //     2.2 Check for unique Attributes
    //     2.3 Check Tags
    //     2.4 Check sibling relations
    //     3. Merge the resulting stack into a single CSS selector
    function checkPath(path) {
        return document.querySelectorAll(path).length > 1;
    }

}

console.log(getPath(searchedElem));