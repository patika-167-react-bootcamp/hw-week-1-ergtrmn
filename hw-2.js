const list = ["Alex","Mercedes","Rose","ETHan","JOrDaN",]


Array.prototype.includeCi = function(typo) {
            
    return list.some(x => x.toLowerCase() == typo.toLowerCase())
}


console.log(list.includes("alex"))
console.log(list.includeCi("Alex"))
console.log(list.includeCi("31231"))
console.log(list.includeCi("ETHAN"))
