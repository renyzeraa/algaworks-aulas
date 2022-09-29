const ingredients = ['ovo', 'presunto']
const spices = ['sal', 'pimenta']

// metodo com apply
// ingredients.push.apply(ingredients, spices)
ingredients.push(...spices)
