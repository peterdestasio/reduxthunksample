const people = [
  { name: 'Peter', age: 18 },
  { name: 'Miju', age: 24 },
  { name: 'Matthew', age: 24 }
]

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(people)
    }, 3000)
  })
}