class traveler {
    constructor(name) {
        this.name = name;
        this.food = 1;
        this._isHealthy = true;
    }

   hunt() {

       return this.food += 2
   }

   eat() {
       
    if (this.food >= 1){
        this.food -= 1
    } else if (this.food <= 1){
       return this._isHealthy = false
    }

   }
}

