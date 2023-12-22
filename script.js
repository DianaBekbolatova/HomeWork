let body = document.querySelector('body')

let list = document.createElement('ul')
for(let i = 1; i <= 10; i++){
    let li = document.createElement('li')
    li.textContent = i;

    if(i%2 == 0){
        li.style.color = 'blue'
    }else{
        li.style.color = 'red'
    }

    list.appendChild(li)
}

list.lastChild.style.fontStyle = 'italic'

let h1 = document.createElement('h1')
h1.textContent = 'homework'

let target = document.querySelector('.target')
target.prepend(h1)

body.appendChild(list)
