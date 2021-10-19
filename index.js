let Quarantine = true;
class Traveler {
    constructor(name, food) { //constructor(name, food)
        this.name = name;
        this.food = 1;
        this._isHealthy = true;
    }

   hunt() {

       return this.food += 2
   }

    eat() {
    if (this.food > 0){
        this.food -= 1
        this._isHealthy = true
        Quarantine = false;
        return ('Comeu e está bem.')
    } else if (this.food < 1) {
        this._isHealthy = false
        return 'Não está saudavel'
    }
    }

}



class Wagon extends Traveler {
    constructor(capacity, name) {
        super(name)
        this.capacity = capacity;
        this.passageiros = []
    }

    getAvailableSeatCount() {      
        //Retorna o número de assentos vazios, determinado pela capacidade que foi estipulada quando a carroça foi criada comparado com o número de passageiros a bordo no momento.
        if (this.passageiros.length < this.capacity){
            return this.capacity - this.passageiros.length 
        } else if (this.passageiros.length >= this.capacity){
            return 0
        }
    }
    


    join(x) {
        //Adicione um viajante à carroça se tiver espaço. Se a carroça já estiver cheia, não o adicione.
        if (this.getAvailableSeatCount() > 0){
            this.passageiros.push (x)
        } else {
            return 'Está cheio'
        }
    }

    
    shouldQuarantine(){
        
        for (let i = 0; i < this.passageiros.length; i++) {
            if (this.passageiros[i]._isHealthy === true){
                Quarantine = false
            } else {
                Quarantine = true
                break;
                }
        }
        return Quarantine
    }

    

    totalFood() {
        let foodTotal = 0;
        for (let i = 0; i < this.passageiros.length; i++) {
            foodTotal += this.passageiros[i].food
        }
        return foodTotal
    }

    //Retorna o número total de comida de todos os ocupantes da carroça.

    
}

// Uma Wagon (Carroça) também tem algumas propriedades: - uma capacity (capacidade) (número), 
// que deve ser fornecida como parâmetro para o construtor, determina a quantidade máxima de passageiros que cabe na carroça. - 
// uma lista de passageiros (array) que inicialmente está vazia.

let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);