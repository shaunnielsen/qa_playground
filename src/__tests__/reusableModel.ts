class Bird {
    name: string
    areTheyPretty: boolean = true
    canFly: boolean
    hasFeathers: boolean = true

    constructor(name: string, canFly: boolean) {
        this.name = name
        this.canFly = canFly
    }
}
let birds: Array<Bird> = [
    new Bird("Toucan", true),
    new Bird("Penguin", false),
    new Bird("Pidgeon", true),
    new Bird("Emu", false),
    new Bird("Seagull", true)
]
birds.forEach((item: Bird)=> {
    console.log(item)
})