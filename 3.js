// 3. Please write a function that shows the usage of closures

const enemiesCounter = ()=>{

    let currentEnemies = 0

    return{
        spawn(){
            currentEnemies++;
        },
        kill(){
            if(currentEnemies>0)
                currentEnemies--;
        },
        count(){
            console.log(`There are ${currentEnemies} enemies on map`)
        }
    }

}

const enemies = enemiesCounter();

enemies.spawn() 
enemies.spawn() 
enemies.count() //2
enemies.kill() 
enemies.count() //1 

