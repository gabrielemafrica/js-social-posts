const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

//prendo container
const container = document.getElementById('container');

//ciclo gli elementi della pagina

posts.forEach(element => {
    //destutturazione
    const {id, content, media, author, likes, created} = element;
    console.log('scrivo id ', id);
    console.log('scrivo content ', content);
    console.log('scrivo media ', media);
    console.log('scrivo autore ', author);
    console.log('scrivo likes ', likes);
    console.log('scrivo created ', created);
    //destrutturazuone secondaria
    const {name, image} = author;
    console.log('scrivo nome ', name);
    console.log('scrivo image ', image);

    const post = 
    `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src=${element.author.image} alt=${element.author.name}>                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.author.name}</div>
                        <div class="post-meta__time">${element.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${element.content}</div>
            <div class="post__image">
                <img src=${element.media} alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes} </b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `;
container.innerHTML += post;
});

//bottone like
const arrayButtonLike = document.getElementsByClassName('like-button');
console.log(arrayButtonLike);

//prendo i counter per strada 2
const arrayCounter = document.querySelectorAll('.js-likes-counter');

const arrayPostLiked = [];

for (let i = 0; i < arrayButtonLike.length; i++) {
    const element = arrayButtonLike[i];
    console.log(element);

/*
    //strada 1
    element.addEventListener('click', (e) => {

        //prevengo compistamento di defoult
        e.preventDefault();

        //seleziono il conta like
        const id = i + 1;
        const idCounter = 'like-counter-' + id;
        const counterLike = document.getElementById(idCounter);
        const counterLikeValue = parseInt(counterLike.textContent);
        //potevo selezionarlo anche cosi
        //const counterLikeValue2 = parseInt(counterLike.innerHTML);

        if (element.classList.contains('like-button--liked')) {
            //tolgo classe liked
            element.classList.remove('like-button--liked');
            counterLike.textContent = counterLikeValue - 1;
            //tolgo al array
            arrayPostLiked.splice(arrayPostLiked.indexOf(id), 1);            

        }else{
            //aggiungo classe liked
            element.classList.add('like-button--liked');   
            counterLike.textContent = counterLikeValue + 1;
            //aggiungo al array
            arrayPostLiked.push(id);
        }

        console.log(arrayPostLiked); 
        }
    );
*/

    //strada 2

    element.addEventListener('click', (e) => {

        //prevengo compistamento di defoult
        e.preventDefault();

        //setto id
        const id = i + 1;

        //seleziono il conta like
        let contatoreElemento = arrayCounter[i];
        let contatore = parseInt(contatoreElemento.innerHTML);
      
        if (element.classList.contains('like-button--liked')) {

            //tolgo classe liked
            element.classList.remove('like-button--liked');

            //aggiorno il contatore
            contatore--;
            contatoreElemento.innerHTML = contatore;

            //tolgo al array
            arrayPostLiked.splice(arrayPostLiked.indexOf(id), 1);            

        }else{
            //aggiungo classe liked
            element.classList.add('like-button--liked');   
            
            //aggiorno il contatore
            contatore++;
            contatoreElemento.innerHTML = contatore;

            //aggiungo al array
            arrayPostLiked.push(id);
        }

        console.log(arrayPostLiked); 
        }
    );


}