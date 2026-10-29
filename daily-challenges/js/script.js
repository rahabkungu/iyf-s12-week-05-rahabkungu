//Day 1: color changer

const colorBtn = document.getElementById('colorBtn');

colorBtn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    const heading = document.querySelectorAll('h1, h2, h3');

    heading.forEach(heading => {
        heading.style.color = randomColor
    });
});

// Day 2: Dynamic Element Creator

const addParaBtn = document.getElementById('addParaBtn');
const container = document.getElementById('container');
let counter = 0;

addParaBtn.addEventListener('click', () => {
    counter++;
    const p = document.createElement('p');
    p.textContent = `paragraph number ${counter}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent ='Delete';
    deleteBtn.addEventListener('click', () => {
        p.remove();
    });
    p.appendChild(deleteBtn);
    container.appendChild(p);
})

// Day 3: Image Remover (Hide/show Toggle)

const toggleImgBtn = document.getElementById('toggleImgBtn');
let isHidden = false;

toggleImgBtn.addEventListener('click', () => {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.style.display = isHidden ? 'block' : 'none';
    });

    isHidden =!isHidden
    toggleImgBtn.textContent = isHidden ? 'show Images' : 'Hide Images';
})

//Day 4 : content copier

const copyBtn = document.getElementById('copyBtn');
const source = document.getElementById('source');
const target = document.getElementById('target');

copyBtn.addEventListener('click', () => {
    target.innerHTML = source.innerHTML;
});

//Day 5: Dark Mode Toggle

const darkModeBtn = document.getElementById('darkModeBtn');
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
    body.classicList.add('dark-mode');
}

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')){
        localStorage.setItem('darkMode', 'enabled');
    } else{
        localStorage.setItem('darkMode', 'disabled');
    }
});