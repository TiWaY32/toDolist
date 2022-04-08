let items = {
    item1: "Test 1",
    item2: "Test 2",
    item3: "Test 3",
    item4: "Test 4",
    item5: "Test 5",
    item6: "Test 6",
}
let ul = document.querySelector('ul');
let textarea = document.querySelector('textarea');
let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    addItem('item' + Math.ceil(Math.random()*1000), textarea.value)
});

for(let key in items){
    addItem(key, items[key])
}
function addItem(key, text) {
    let li = document.createElement('li')
    li.innerText = text;
    li.id = key;
    ul.appendChild(li)
    let button = document.createElement('button')
    button.innerText = 'X'
    button.addEventListener('click', function(){
        ul.removeChild(li)
    })
    li.appendChild(button)
}