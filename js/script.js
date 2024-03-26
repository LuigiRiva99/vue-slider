const { createApp } = Vue

createApp({
    data() {
      return {
        currentSlideIndex: 0,
          slides : [
             {
                 image: 'img/01.webp',
                 title: 'Marvel\'s Spiderman Miles Morale',
                 text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
             }, 
             {
                 image: 'img/02.webp',
                 title: 'Ratchet & Clank: Rift Apart',
                 text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
             }, 
             {
                 image: 'img/03.webp',
                 title: 'Fortnite',
                 text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
             }, 
             {
                 image: 'img/04.webp',
                 title: 'Stray',
                 text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
             }, 
             {
                 image: 'img/05.webp',
                 title: "Marvel's Avengers",
                 text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
             }
          ]
      }
    },

    methods : {
        //funzione per selezionare la precedente immagine 
        loopPrev: function(){
            if (this.currentSlideIndex === 0) {
                this.currentSlideIndex = 4
            } else {
                this.currentSlideIndex--
            }
        },
        //funzione per selezionare la prossiva immagine 
        loopNext: function() {
            if (this.currentSlideIndex === 4) {
                this.currentSlideIndex = 0
            } else {
                this.currentSlideIndex++
            }
        },
    },
    
    mounted() {

        //autoplay
        let timer = setInterval(this.loopNext, 3000);

        //blocco autoplay quando sono over con il mouse
        const sliderContainer = document.querySelector('.slider-wrapper');
        sliderContainer.addEventListener('mouseover', function() {
            clearInterval(timer)
        });

        //riprendo autoplay quando tolgo il mouse
        sliderContainer.addEventListener('mouseleave', function() {
            timer = setInterval(this.loopNext, 3000);
        })
    }
}).mount('#app')


