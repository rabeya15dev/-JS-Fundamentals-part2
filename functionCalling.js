
function furitsProcessor(Apple, orange){
    const juice=`juice with ${Apple} apples and${orange} oranges`;
    return juice;
}

function cutFruitPieces(fruit){
    return fruit*4;

}
function fruitProcessor(apple,orange){
    const applePieces= cutFruitPieces(apple);
    const orangePieces= cutFruitPieces(orange);

    const juice=`Juice with ${applePieces} piece of apple and ${orangePieces}pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(3,4));