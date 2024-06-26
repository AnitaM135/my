(function() {
  // Функція для перевірки тегів meta name="robots"
  function checkMetaRobots() {
    var metaTags = document.getElementsByTagName('meta');
    for (var i = 0; i < metaTags.length; i++) {
      if (metaTags[i].getAttribute('name') === 'robots') {
        return 'Meta robots: ' + metaTags[i].getAttribute('content');
      }
    }
    return null;
  }

  // Функція для перевірки файлу robots.txt
  function checkRobotsTxt(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/robots.txt', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          callback('robots.txt:\n' + xhr.responseText);
        } else {
          callback('No robots.txt found.');
        }
      }
    };
    xhr.send();
  }

  // Виконання перевірки метатегів
  var metaResult = checkMetaRobots();
  if (metaResult) {
    alert(metaResult);
  } else {
    // Якщо метатег не знайдено, перевіряємо robots.txt
    checkRobotsTxt(function(result) {
      alert(result);
    });
  }
})();
