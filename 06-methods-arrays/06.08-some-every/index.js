const guests = [
  { name: 'Lucas', age: 18 },
  { name: 'Mario', age: 16 },
  { name: 'Jean', age: 20 },
  { name: 'Rogério', age: 15 },
  { name: 'Rafael', age: 21 }
]

// convidados de maior

const hasAdults = guests.some(guest => guest.age >= 18)
// some = algumas
// conseguem ver se tem alguém maior ou menor de idade na array

const guests2 = [
  { name: 'Lucas', age: 30 },
  { name: 'Mario', age: 18 },
  { name: 'Jean', age: 19 },
  { name: 'Rogério', age: 19 },
  { name: 'Rafael', age: 18 }
]

const everyAdults = guests2.every(guest => guest.age >= 18)
// every = todos
// conseguem ver se todos são de maior ou menor de idade na array
