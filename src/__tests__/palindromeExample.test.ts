function getPalindrome(word: string) {
    return word.split("").reverse().join("")

}

let palindromes: Array<string> = [
    "racecar",
    "madam",
    "kayak",
    "damit im mad",
    "yay",
    "tacocat",
    "level"
]

let notPalindromes: Array<string> = [
    "Palindrome",
    "Chat",
    "View Everyone",
    "Coding",
    "Baking Pancakes"
]

palindromes.forEach((word) => { 
    test('looking to see if "${word}" is a palindrome' , () => {
        expect(getPalindrome(word)).toEqual(word)

    })
})

