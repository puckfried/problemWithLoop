// TIPP 1 besseren Loop wählen, damit du leichter an den Anfang zurückspringen kannst
// Bei einer Situation, die sich "solange wiederholen muss bis irgendetwas fertig ist" bietet sich ein while Loop an. Hier ein einfaches Beispiel für einen while Loop:

const meinArray = [1,2,3,4,5]

// Das i definierst du bei einem while Loop außerhalb des Loops
let i=0

// Die Schleife soll auch den Array bis zum Schluss durchlaufen
while (i< meinArray.length){
    
    // Irgendeine Bedingung bei der der Array wieder von vorne durchlaufen werden soll
    if (meinArray[i] === 2){
        
        // Irgendwas machen
        meinArray.splice(i,1)
        
        // i wieder auf 0 setzen, somit geht es wieder vorne im Array los 
        i=0
    } 
    else {
        i++
    } 
}



// Tipp 2 ein Wörterbuch (Objekt) nehmen um die vielen if - Verschachtelungen zu umgehen

const dictionary = {
    big: 'small',
    small: 'big',
    cold: 'hot',
    hot: 'cold'
}

const list = ['cold', 'big','hot','cold','small']

function tellMeNeighbours(array){
    for (let i=0; i<array.length; i++){
        // Das aktuelle Element
        const currentItem = array[i]

        // Das Gegenteil vom aktuellen Element findest du im Wörterbuch (Objekt)
        const opposite = dictionary[currentItem]

        // Wennn das Nachbarelement ein Gegenteil ist dann mach was
        if (array[i+1] === opposite){
            console.log(`Item at index ${i} has an opposite item as neighbour ${array[i]} --> ${array[i+1]}`)
        }
    }
}

tellMeNeighbours(list)