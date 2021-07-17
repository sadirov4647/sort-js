const list = document.querySelector('.list');
const sort_name_btn = document.querySelector('.sort-options .sort-name');
const sort_meta_btn = document.querySelector('.sort-options .sort-meta');
const sort_age_btn = document.querySelector('.sort-options .sort-age');


let list_items = [
    {
        name: 'Batman',
        meta: 'Black',
        age: '57'
    },
    {
        name: 'Superman',
        meta: 'Red vs Blue',
        age: '32'
    },
    {
        name: 'Wonder Woman',
        meta: 'Gold vs Red',
        age: '34'
    },
    {
        name: 'The Flash',
        meta: 'Red vs Yellow',
        age: '24'
    },
    {
        name: 'Cyborg',
        meta: 'Silver',
        age: '28'
    },
    {
        name: 'Green Arrow',
        meta: 'Green',
        age: '38'
    },
    {
        name: 'Nightwing',
        meta: 'Blue vs Black',
        age: '30'
    },
]

let desc = false;
sort_name_btn.addEventListener('click', () => {
    let array = sort_array_by(list_items, 'name', desc);
    displayList(array);
    desc = !desc;
});
sort_meta_btn.addEventListener('click', () => {
    let array = sort_array_by(list_items, 'meta', desc);
    displayList(array);
    desc = !desc;
});
sort_age_btn.addEventListener('click', () => {
    let array = sort_array_by(list_items, 'age', desc);
    displayList(array);
    desc = !desc;
});



function sort_array_by(array, sort, desc){
    array.sort(function(a,b){
        if(a[sort] < b[sort]) return -1;
        if(a[sort] > b[sort]) return 1;
        return 0;
    });
    
    if(desc) array.reverse();
    return array;
}

function displayList(array = []){
    list.innerHTML = "";
    
    for(let i = 0; i < array.length; i++){
        let item = array[i];
        
        let item_element = document.createElement('div');
        item_element.classList.add('list-item');
        
        let title = document.createElement('div');
        title.classList.add('item-title');
        title.innerText = item.name;
        
        item_element.appendChild(title);
        
        
        let meta = document.createElement('div');
        meta.classList.add('item-meta');
        meta.innerText = item.meta;
        item_element.appendChild(meta);
        
        let age = document.createElement('div');
        age.classList.add('item-age');
        age.innerText = item.age;
        item_element.appendChild(age);
        
        list.appendChild(item_element)
    }
}
displayList(list_items);