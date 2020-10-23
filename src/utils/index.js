function getExpiresIn (expiresIn) {
  return (new Date().getTime()) + expiresIn * 1000
}
function capitalizeFirstLetter (string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
}

function normalizeErrors (errors) {
  let message = ''
  Object.keys(errors).forEach(key => {
    message += `<p>${capitalizeFirstLetter(key)}:</p><ul>`
    errors[key].forEach(item => {
      message += `<li>${item}</li>`
    })
    message += '</ul>'
  })
  return message
}

export {
  getExpiresIn, capitalizeFirstLetter, normalizeErrors
}
