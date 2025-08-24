// 26, 26, 102

let heights = [];

let sortOption;

const sorts = document.querySelectorAll('.option');
const options = ['bubble', 'selection', 'merge', 'insertion', 'quick'];

// Incase another option is selected, we need to unselect it
function unselect(index) {
    for(let i = 0; i < sorts.length; i++){
        if(i == index)
            continue;
        sorts[i].style.backgroundColor = 'white';
    }
}

// on clicking on of the sort options
document.querySelectorAll('.option').forEach((button, index) => {
    button.addEventListener('click', () => {
        button.style.backgroundColor = 'lavender';
        sortOption = options[index];
        unselect(index);
    })
})

// generate button element
const generateButton = document.querySelector('.generate-button');

// on clicking the generate button, generateBars() function will be called
generateButton.addEventListener('click', () => {
    generateBars(20);
});

// sort button element
const sortButton = document.querySelector('.sort-button');

// on clicking sort button bubbleSort() function will be called
sortButton.addEventListener('click', () => {
    if(sortOption === 'bubble')
        bubbleSort(20);
    else if(sortOption === 'selection')
        selectionSort(20);
});


// to generate bars of random sizes
function generateBars(n) {
    const flexContainer = document.querySelector('.flex-container');
    flexContainer.innerHTML = "";

    for(let i = 0; i < n; i++) {
        heights[i] = Math.random() * 30 + 1;

        let bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = (heights[i] * 10) + 'px';

        flexContainer.appendChild(bar);
    }
}

// for swapping the array(heights[]) values
function swapArrayValues(h1, h2) {
    let temp = heights[h1];
    heights[h1] = heights[h2];
    heights[h2] = temp;
}

// for swapping the height attribute of .bar DOM elements
function swapHeights(h1, h2) {
    temp = h1.style.height;
    h1.style.height = h2.style.height;
    h2.style.height = temp;
}


// helper function for creating delay 
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// bubble sort
async function bubbleSort(n) {
    const bars = document.querySelectorAll('.bar');
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n - 1; j++) {
            // creates delay before each comparison
            await delay(150);
            if(heights[j] > heights[j + 1]){
                swapArrayValues(j + 1, j);
                swapHeights(bars[j + 1], bars[j]);
            }
        }
    }
}

// selection sort
async function selectionSort(n) {
    const bars = document.querySelectorAll('.bar');
    for(let i = 0; i < n; i++) {
        for(let j = i; j < n; j++) {
            // creates delay before each comparison
            await delay(150);
            if(heights[j] < heights[i]){
                swapArrayValues(i, j);
                swapHeights(bars[i], bars[j]);
            }
        }
    }
}
