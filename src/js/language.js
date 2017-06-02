  $(document).ready(function() {
    if (!Cookies.get('lang')) {
        Cookies.set('lang', 'en');
    }

    var language = "";

    if (Cookies.get('lang') === 'en') {
        language = "en";
    } else if (Cookies.get('lang') === 'ua') {
        language = "ua";
    }


    if (language == "en") {
      $('.name').html("LIGHT A STAR");
      $('.log').html("Log in/Registration");
      $('.norg').html("Add organization");
      $('.vorg').html("View organizations");
      $('.about-us').html("About us");
      $('.cont').html("Contacts");
      $('.help').html("Help");
      $('.bug').html("Report issue");
      $('.feed').html("Feedback");
      // $('.modal-title').html("Light a star");
      // $('.star-name').attr("placeholder", "Name of the star");
      // $('.wish-txt').attr("placeholder", "Write here your wish here");
      // $('.btn-default').html("Cancel");
    } else if (language == "ua") {
      $('.name').html("ЗАПАЛИ ЗІРКУ");
      $('.log').html("Увійти/зареєструватись");
      $('.norg').html("Додати організацію");
      $('.vorg').html("Переглянути організації");
      $('.about-us').html("Про нас");
      $('.cont').html("Контакти");
      $('.help').html("Допомога");
      $('.bug').html("Повідомити про помилку");
      $('.feed').html("Залишити відгук");
      // $('.modal-title').html("Запали зірку");
      // $('.star-name').attr("placeholder", "Ім'я зірки'");
      // $('.wish-txt').attr("placeholder", "Напишіть своє ");
      // $('.btn-default').html("Скасувати");
    }

    $( ".eng" ).click(function() {
      Cookies.set('lang', 'en');
      location.reload();
    });
    $( ".ukr" ).click(function() {
      Cookies.set('lang', 'ua');
      location.reload();
    });
   });
