
const div = document.createElement('div');

const container = document.querySelector('#container');

container.classList.toggle('gridStyle');
let size = 16;
console.log(container);
console.log("hello world");


function grid(size){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let div = document.createElement('div');
            div.classList.toggle('gridStyle');
            div.addEventListener('mouseenter', function(e){
                div.classList.add('gridStyleBlack');
            })
            container.appendChild(div);
        } 
    }
}


function removeAllChilds(parent) {
    let count = parent.childElementCount;
    console.log(count);
    for(let i = 0; i < count; i++){
        parent.removeChild(parent.firstChild);
    }
}



const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function(e){
    const clear =  document.querySelectorAll('div');
    clear.forEach(element => {
        if(element.classList.contains('gridStyleBlack') === true){
            element.classList.toggle('gridStyleBlack');
        }

    });
    removeAllChilds(container);
    setGridSize();
    grid(size);
    container.style = `display: grid; grid-template-columns: repeat(${size}, 1fr);`;


});

function setGridSize(){
    size = prompt("Enter a grid grid size between 1 to 100");

    if(size > 100 || size <= 0){
        setGridSize();
    } else{
        return
    }
}

container.style = `display: grid; grid-template-columns: repeat(${size}, 1fr);`;

grid(size);


/**
 * 2 dimisnion for loop to create sized grid
 * add an event listner for hover in each iteration
 * 
 */