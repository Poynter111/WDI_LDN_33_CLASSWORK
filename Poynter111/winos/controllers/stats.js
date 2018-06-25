// const rp = require('request-promise');
//
// function stats(req, res, next){
//   //
//   rp({
//     method: 'GET',
//     url: 'https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/StealthPie',
//     qs: {
//       units: 'si'
//     },
//     json: true
//   })
//     .then(response => res.json(response.currently))
//     .catch(next);
// }
//
// module.exports = { stats };
