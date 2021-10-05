window.onload=init;

function init() {
    new Vue({
        data: {
            restaurants: [],
            nom: '',
            cuisine: '',
            nbRestaurantTotal:0,
            page:0,
            pagesize:10,
            nbpageTotal:0
        
        },
        mounted(){
            console.log("AVANT RENDU HTML");
            this.getRestaurantsFromServer();
        },
        methods: {
            pagePrecedente(){
                if(this.page === 0 ) return;
                this.page--;
                this.getRestaurantsFromServer();
            },
            pageSuivante(){
                if(this.page === this.dernierepage) return;
                this.page++;
                this.getRestaurantsFromServer();
            },
            getRestaurantsFromServer(){
                let url = "http://localhost:8080/api/restaurants?";
                url += "page=" + this.page;

                fetch(url)
                    .then((responseJson) => { // arrow functions conserve le bon this 
                        responseJson.json().then((resJS)=> {
                            //res est un obj JS
                            this.restaurants = resJS.data;
                            this.nbRestaurantTotal = resJS.count;
                            this.nbpageTotal = Math.round(this.nbRestaurantTotal.this.pagesize);

                        });
                    })
                    .catch(function(err){
                        console.log(err);
                    })

            },
            supprimerRestaurant(index) {
                this.restaurants.splice(index, 1);
            },
            ajouterRestaurant(event) {
                // eviter le comportement par defaut
                event.preventDefault();

                this.restaurants.push(
                    {
                        nom: this.nom,
                        cuisine: this.cuisine
                    }
                );
                this.nom = "";
                this.cuisine = "";
            },
            getColor(index) {
                return (index % 2) ? 'lightBlue' : 'pink';
            }
        }
    })
}
