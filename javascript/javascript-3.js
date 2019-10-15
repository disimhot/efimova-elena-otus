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
            <div class="one">
                <a href="asdf" class="href"></a>
            </div>
            <div class="one">
                <div class="one"></div>
                <div class="one">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>`;

const anotherHTML = 
                    `
                    <body>
                        <section class="dsf">
                            <p id="unique">Little</p>
                            <p>Piggy</p>   
                        </section>
                        <section class="dsf">
                            <p id="unique">Little</p>
                            <p>Piggy</p>   
                        </section>
                    </body>
                    `;
global.document = new JSDOM(html).window.document;

let searchedElem = document.querySelector('DIV.one > DIV.one:nth-child(2) > DIV:nth-child(2)');
function getPath(element, selector) {
    let searchedSelector = element.tagName,
        fullPath = getFullPath(searchedSelector, selector);

    checkPath(fullPath) ? getAllAttributes(element) : getResult(fullPath);

    function getAllAttributes(element) {
        let attribute_nodes = element.attributes,
        attributes = Array.prototype.slice.call(attribute_nodes,0);
            attributes.forEach(item => {
                if(item.name === 'class') {
                    searchedSelector += '.' + item.value.replace(/ /g,'.');
                } else {
                    searchedSelector +=`[${item.name}=${item.value}]`;
                }
            })
        fullPath = getFullPath(searchedSelector, selector);
        checkPath(fullPath) ? getParent(element) : getResult(fullPath);
    }
    function getParent(element) {
        let index = [...element.parentNode.children].indexOf(element);
        searchedSelector = `${searchedSelector}:nth-child(${index + 1})`; 
        fullPath = getFullPath(searchedSelector, selector);

        checkPath(fullPath) ? getPath(element.parentElement, fullPath) : getResult(fullPath);
    }

    function getFullPath(searchedElement, previousSelector) {
        return previousSelector ? (`${searchedElement} > ${previousSelector}`) : searchedElement;
    }

    function getResult(path) {
        console.log('path', path);
        return path;
    }
    function checkPath(path) {
        return document.querySelectorAll(path).length > 1;
    }
}

getPath(searchedElem);