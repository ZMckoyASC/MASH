//Version 1:
function mash() {
    return ("You will live in " + getHome() + " and you will have " + getChildrenCount() + " kids!")
}
console.log(mash())
//Version 1

//Version 2:
function getHome() {
    function hello(name) {
        return (name)
    }
    const homes = ["Daybreak Town", "Traverse Town", "Twilight Town", "Halloween Town", hello("Teriyaki Land")];
    console.log(bob([homes.length, hello("Midgar")]))
    return homes[bob(homes.length, hello("Midgar"))]
}


function bob(Integer) {
    const random = Math.random();
    const random0to100 = random * Integer;
    const randomIntegerNumber = Math.floor(random0to100);
    return (randomIntegerNumber)
}

//Version 3:
function getChildrenCount(Integer) {
    const random1 = Math.random();
    const random0to100 = random1 * 100;
    const randomNumber = Math.floor(random0to100);
    return (randomNumber);
}
console.log(getChildrenCount());