const combinations = (alphabet, length) => {
    let combs = alphabet.split('')
    for(let i = 1; i < length; i++) {
        const new_combs = []
        for(let c = 0; c < combs.length; c++) {
            for(let a = 0; a < alphabet.length; a++) {
                new_combs.push(combs[c] + alphabet[a])
            }
        }
        combs = new_combs
    }
    return combs
}

const genRollingCode = (alphabet, length) => {
    const combs = combinations(alphabet, length)
    const paths = [alphabet[0].repeat(length)]
    while(true) {
        const path = paths.pop()
        for(let a = 0; a < alphabet.length; a++) {
            const p = path + alphabet[a]
            if(combs.every(c => p.includes(c))) {
                return p
            } else if(!path.includes(p.slice(p.length - length))) {
                paths.push(p)
            }
        }
    }
}

(() => {
    const alphabet = process.argv[2]
    const length = +process.argv[3]
    const rc = genRollingCode(alphabet, length)
    console.log(rc)
//    console.log(alphabet, length, rc.length)
//    console.log(rc.length, Math.pow(alpha.length, length) + length - 1)
})()
