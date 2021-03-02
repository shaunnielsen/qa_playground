function getUser(id: number, callback) {
    let user = {id:2, subscriber: true}
    callback(user)

}
function handleDeliveryFee(user): number {
    let fee: number = user.subscriber ? 0 : 3
    console.log (`Returning a $${fee} fee,`)
    return user.subscriber ? : 3

}
getUser(1, handleDeliveryFee)
getUser(1, (user) => {
    console.log(user)

})