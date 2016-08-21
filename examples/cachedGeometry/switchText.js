var strings = [
  'Bacon ipsum dolor amet picanha prosciutto cow, andouille doner ribeye shankle jowl tri-tip cupim alcatra frankfurter kevin venison landjaeger. Meatloaf pork loin pig tongue, hamburger pastrami pork sirloin filet mignon. Shankle shank rump doner bacon salami meatball hamburger tail chicken swine. Chicken tongue picanha venison jowl. Shankle tail hamburger ribeye, filet mignon fatback pork chop.',
  'Pork salami tri-tip andouille, shankle meatball ham shank kevin tail prosciutto turkey. Ham chuck strip steak, alcatra prosciutto beef biltong. Pig pork kielbasa strip steak frankfurter bresaola kevin ribeye ham hamburger. Picanha capicola fatback chicken meatball. Tenderloin shankle beef ribs pancetta tail, turducken venison meatball short ribs jerky doner.',
  'Chuck corned beef frankfurter pork loin, tenderloin shank filet mignon salami tail jerky pancetta sausage jowl. Porchetta flank meatball bresaola, salami fatback pork belly beef ribs short ribs boudin filet mignon chicken. Andouille chuck beef tenderloin, leberkas ham frankfurter turkey short loin short ribs venison cow. Ribeye pork chop drumstick kielbasa spare ribs. Cupim meatball pork belly bresaola prosciutto. Shoulder pancetta turducken hamburger, pork salami pork chop beef biltong beef ribs ground round.',
  'Boudin alcatra shankle ball tip tenderloin cupim venison kevin. Salami biltong pork chop ham hock ball tip, prosciutto sausage hamburger pastrami chicken pork loin pig drumstick. Pork belly shankle hamburger, turducken alcatra jerky venison sirloin swine strip steak drumstick short loin pancetta filet mignon chuck. Corned beef pastrami salami, strip steak shank prosciutto meatloaf kevin bacon fatback chuck ball tip filet mignon. Pastrami leberkas frankfurter short ribs, ham hock salami capicola bresaola sirloin pork kielbasa pork loin ground round strip steak. Turkey alcatra pastrami, strip steak ball tip andouille doner shoulder salami.',
  'all strings are now cached. The delay shall go away'
];

var i = 0;

function switchText () {
  var el = document.getElementById('textObj');
  if(el) {
    el.setAttribute('text', 'text: ' + strings[i++ % strings.length])
  }
}

setInterval(switchText, 500);
