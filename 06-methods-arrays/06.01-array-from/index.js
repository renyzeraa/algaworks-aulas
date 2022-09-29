function greet() {
  const args = Array.from(arguments)
  args.forEach(argument => {
    console.log(`Hello ${argument}`)
  })
}
