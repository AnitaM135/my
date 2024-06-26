(function() {
  // Перевірка тегів meta name="robots"
  var metaTags = document.getElementsByTagName('meta');
  var robotsMeta = null;
  
  for (var i = 0; i < metaTags.length; i++) {
    if (metaTags[i].getAttribute('name') === 'robots') {
      robotsMeta = metaTags[i].getAttribute('content');
      break;
    }
  }

  if (robotsMeta) {
    alert('Meta robots: ' + robotsMeta);
  } else {
    // Перевірка файлу robots.txt
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/robots.txt', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          alert('robots.txt:\n' + xhr.responseText);
        } else {
          alert('No robots.txt found.');
        }
      }
    };
    xhr.send();
  }
})();
