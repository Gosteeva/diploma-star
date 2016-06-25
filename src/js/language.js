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
      $('.bttn').html("LIGHT A STAR");
      $('.or').html("or");
      $('.s-txt').html("search");
      $('.l-txt').html("light a star");
      $('.about-us').html("About us");
      $('.bug').html("Report a bug");
      $('.modal-title').html("Light a star");
      $('.star-name').attr("placeholder", "Name of the star");
      $('.wish-txt').attr("placeholder", "Write here your wish here");
      $('.btn-default').html("Cancel");
    } else if (language == "ua") {
      $('.bttn').html("ЗАПАЛИ ЗІРКУ");
      $('.or').html("або");
      $('.s-txt').html("пошук");
      $('.l-txt').html("запали зірку");
      $('.about-us').html("Про нас");
      $('.bug').html("Повідомити про помилку");
      $('.modal-title').html("Запали зірку");
      $('.star-name').attr("placeholder", "Ім'я зірки'");
      $('.wish-txt').attr("placeholder", "Напишіть своє ");
      $('.btn-default').html("Скасувати");
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
