const app = new Vue (
    {
        el: '#root',
        data: {

            items : [
                {
                    url:'img/01.jpg',
                    name:'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    url:'img/02.jpg',
                    name:'Svizzera',
                    text:'Lorem ipsum'
                },
                {
                    url:'img/03.jpg',
                    name:'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    url:'img/04.jpg',
                    name:'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                },
                {
                    url:'img/05.jpg',
                    name:'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                }
            ],
            active: 0,
        },

        methods: {

            /* Funzione click per selezionare l'immagine precedente */
            imgPrec() {

                this.active--;

                if(this.active < 0){
                    this.active = this.items.length -1;
                }
            },

            /* Funzione click per selezionare l'immagine successiva */
            imgSucc() {

                this.active++;

                if(this.active == this.items.length){
                    this.active = 0;
                }
            },
            
        }

    }
);