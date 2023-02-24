/* Opgave 1*/


// din kode her


/* Opgave 1*/


// din kode her



/* Opgave 3 - skriv videre på koden her: */
const myDataFileUrl = '../../opgavefiler/data/story.json';

const myStoryElement = document.getElementById('theStory');
let myStorydata = null;




fetch(myDataFileUrl)
    .then((response) => {

        return response.json();

    })
    .then((data) => {
        myStorydata = data;
        setUpStory('DK');
    })
    .catch((error) => {
        console.error(error);
    });



function setUpStory(myLanguage) {
    let myStory = null;

    switch (myLanguage) {
        case 'DK':
            myStory = myStorydata.DK;
            break;

        case 'FI':
            myStory = myStorydata.FI;
            break;

        case 'SE':
            myStory = myStorydata.SE;
            break;

        case 'UK':
            myStory = myStorydata.UK;
            break;

        default:
            myStory = myStorydata.DK;
            break;
    }
    createStory(myStory);
}

function createStory(myStory) {
    myStoryElement.innerHTML = ''
    createButtons();

    let myHeadline = document.createElement('h2');
    myHeadline.innerText = myStory.headline;
    let myImage = document.createElement('img');
    myImage.src = '../../opgavefiler/img/felix.jpg';
    let myParagraf = document.createElement('p');
    myParagraf.innerHTML = myStory.text;


    myStoryElement.appendChild(myHeadline);
    myStoryElement.appendChild(myImage);
    myStoryElement.appendChild(myParagraf);

}

function createButtons() {
    let myDkbutton = document.createElement('button');
    myDkbutton.innerText = 'Dansk';
    myDkbutton.addEventListener('click', (e) => {
        setUpStory("DK");
    });

    let mySebutton = document.createElement('button');
    mySebutton.innerText = 'Svenska';
    mySebutton.addEventListener('click', (e) => {
        setUpStory("SE");
    });

    let myFibutton = document.createElement('button');
    myFibutton.innerText = 'Finsk';
    myFibutton.addEventListener('click', (e) => {
        setUpStory("FI");
    });

    let myUkbutton = document.createElement('button');
    myUkbutton.innerText = 'English';
    myUkbutton.addEventListener('click', (e) => {
        setUpStory("UK");
    });

    myStoryElement.appendChild(myDkbutton);
    myStoryElement.appendChild(mySebutton);
    myStoryElement.appendChild(myFibutton);
    myStoryElement.appendChild(myUkbutton);
}