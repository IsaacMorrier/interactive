$(document).ready(function () {
  
  $(function () {
    $('#input-window').draggable();
  });

  function renderLetters() {
    $('.letters').each(function () {
      var $letterWrapper = $(this);
      var letters = $letterWrapper.html().split('');
      var letterArray = [];
      for (i = 0; i < letters.length; i++) {
        console.log(letters[i]);
        var character = letters[i];
        var characterDefinition = $('.character-definition[data-character="' + character + '"]').html();
        var characterHTML = characterDefinition;
        letterArray.push(characterHTML);
      }
      $letterWrapper.html(letterArray);
    });
  }
  
  function assessInputs() {
   if($('.input-line').last().val()) {
      $('#input-form').append( '<input type="text" class="input-line" value="">' );
     renderLetters();
    }

  }
  
  $('.input-line').keyup(function () {
    $('#line1').text($(this).val());
    assessInputs();
    renderLetters();
  });
  assessInputs();
});