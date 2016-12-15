(function () {

  const Router = window.Router;
  const GameView = window.GameView;
  const LoginView = window.LoginView;
  const ScoreBoardView = window.ScoreBoardView;
  const SignupView = window.SignupView;


  const Model = window.Model;


  function filter(str) {
    let rules = window.rules;
    rules = rules.map(rule=> {
      return {
        regexp: new RegExp(`\\b${rule}\\b`, 'g'),
        length: rule.length
      };
    });
    rules.forEach(rule=>str = str.replace(rule.regexp, (new Array(rule.length + 1)).join('*')));
    return str;
  }

  function plural(n) {
    switch (n) {
      case 0:
        return 'Здравствуй, дух';
      case 1:
        return 'Рады приветствовать на нашем курсе!';
      case 2:
        return 'Кликай дальше!! Еще осталось 13 раз(а)';
      case 13:
        return 'Кликай дальше!! Еще осталось 2 раз(а)';
      case 15:
        return '01001000 01101001 00101100 00100000 01100010 01110010 01101111';
      case 100:
        return '01001000 01101001 00101100 00100000 01100010 01110010 01101111';
    }
  }

  function hello(text) {
    return 'Привет, ' + text;
  }


  if (typeof exports === 'object') {
    exports.hello = hello;
    exports.plural = plural;
    exports.filter = filter;
  }


  if (typeof window === 'object') {

    window.router = (new Router)
      .addRoute('/menu', MainView)
      .addRoute('/game', GameView)
      .addRoute('/score', ScoreBoardView)
      .addRoute('/signup', SignupView)
      .addRoute('/', LoginView)
      .start();

   /* const session = window.SessionModel;
    const user = window.UserModel;
    let u = new user({
      login: 'u',
      password: '1'
    });
    let s = new session(u);
    s.login();
    s.is_authenticated()
      .then(result => console.log(result + 'AAAA'))
      .catch(err => console.log(err)); */
  }
})();
