class Bird {
    name: string
    canFly: boolean

    constructor(name: string, can fly: boolan) {
        this.name = name
        this.canFly = canFly 

    }
flapwings () {
    if(this.canFly)
    console.log ('${this.name} flaps its wongs, and takes off into the blue!')
    else
    console.log (`${this.name} it tried so hard and got so far, and in the end it doesn't really matter`)
}

let birdss: Array<Birds> = [
    new Birds ("Toucan", true),
    new Birds ("Penguin", false),
    new Birds ("Pidgeon", true),
    new Birds ("Emu", false)
]

birdss.forEach((item: Birds) => {
        item.flapWings()
})

