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

function getPath(element) {
    let tagName = element.tagName

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

}