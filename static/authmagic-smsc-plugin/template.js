module.exports = function({ekey, redirectUrl}) {
  return `Authorization link: ${redirectUrl}?ekey=${encodeURIComponent(ekey)}`;
};