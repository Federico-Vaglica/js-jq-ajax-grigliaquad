
$(document).ready( function() {
    for (var i=0; i<36; i++){
        $('.container').append("<div class='quadrato'></div>");
    }

    $('.quadrato').click(function() {
      var questo = $(this);
      $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/int',
        method: 'GET',
        success: function(data) {
          var randomNumber = data.response;
          if (randomNumber <= 5 && questo.text() === '') {
            questo.addClass('yellow');
            questo.text(randomNumber);
          } else if (randomNumber > 5 && questo.text() === '') {
            questo.addClass('green');
            questo.text(randomNumber);
          } else {
            alert('Box già cliccato');
          }
        },
        error: function () {
          alert('ERROR');
        }
      });
    });
  }); 