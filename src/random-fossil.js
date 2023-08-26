import axios from 'axios';


let randomFossil = () => {
    
    axios.get('/random-fossil.json')
    .then(res =>{
        let fossilRan = res.data;
        console.log(res.data)
        document.querySelector('#random-fossil-name').innerText = fossilRan.name;
        document.querySelector('#random-fossil-image').src = fossilRan.img;
    })
    
    
}

const button = document.querySelector('#get-random-fossil');
button.addEventListener('click', randomFossil);