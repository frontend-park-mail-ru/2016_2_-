// наименование для нашего хранилища кэша
const CACHE_NAME = 'app_serviceworker_v_2';
// ссылки на кэшируемые файлы
const cacheUrls = [
  '/',
  '/game',
  '/sgame',
  '/menu',

  '/css/milligram.min.css',
  '/css/main.css',
  '/components/button/button.css',

  '/modules/pathToRegex.js',
  '/modules/view.js',
  '/modules/model.js',
  '/modules/route.js',
  '/modules/router.js',

  '/models/user.js',
  '/model/score.js',
  '/model/scoreBoard.js',
  '/model/session.js',


  '/components/block/block.js',
  '/components/button/button.js',
  '/components/button/button.tmpl.js',
  '/components/form/form.tmpl.js',
  '/components/form/form.js',
  '/components/input/input.tmpl.js',
  '/components/input/input.js',


  '/game/keymaster.js',
  '/game/mouse.js',
  '/game/snake.js',
  '/game/SnakeGame.js',


  '/views/main.js',
  '/views/game.js',
  '/views/scoreBoard.js',
  '/views/login.js',
  '/views/signup.js',
  '/views/mainFrame.js',
  '/views/singlegame.js',

  '/main.js'
];

this.addEventListener('install', function (event) {
  // задержим обработку события
  // если произойдёт ошибка, serviceWorker не установится
  event.waitUntil(
    // находим в глобальном хранилище Cache-объект с нашим именем
    // если такого не существует, то он будет создан
    caches.open(CACHE_NAME)
      .then(function (cache) {
        // загружаем в наш cache необходимые файлы
        return cache.addAll(cacheUrls);
      })
  );
});

this.addEventListener('fetch', function (event) {
  // console.log(event);
  event.respondWith(
    // ищем запрашиваемый ресурс в хранилище кэша
    caches.match(event.request).then(function (cachedResponse) {

      // выдаём кэш, если он есть
      if (cachedResponse) {
        return cachedResponse;
      }

      // иначе запрашиваем из сети как обычно
      return fetch(event.request);
    })
  );
});
