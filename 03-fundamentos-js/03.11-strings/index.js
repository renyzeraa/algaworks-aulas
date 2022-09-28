const name = 'Julio'
const age = 32

const sentence = 'olá, meu nome é ' + name + ' e eu tenho ' + age + ' anos.'

console.log(sentence)

const sentence2 = `Olá, meu nome é ${name} e eu tenho ${age} anos`
// template strings
console.log(sentence2)

const html = `
<ul>
  <li>
    ${name}
  </li>
  <li>
    ${age}
  </li>
</ul>
`

console.log(html)
