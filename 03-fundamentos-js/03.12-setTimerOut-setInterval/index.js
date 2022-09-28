setTimeout(() => {
  console.log('timeout')
  clearInterval(interval)
}, 10000)

const interval = setInterval(() => {
  console.log('timeout 1')
}, 2000)
