function generateCode() {
    // 6 digits code

    let code: string = ''

    for (let i = 1; i <= 6; i++) {
        code += Math.floor(Math.random() * 10).toString()
    }

    return code
}

export { generateCode }