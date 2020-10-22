function getExpiresIn (expiresIn) {
  return (new Date().getTime()) + expiresIn * 1000
}

export { getExpiresIn }
