// https://medium.freecodecamp.org/pipe-and-compose-in-javascript-5b04004ac937
export default (...fns) => x => fns.reduce((v, f) => f(v), x)
