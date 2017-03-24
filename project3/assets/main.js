$(document).ready(function () {
  
//MAKE INPUT WINDOW DRAGGABLE
  $(function () {
    $('#input-window').draggable();
  });

//READ INPUTS, PIPE LETTERS TO DESTINATION DIVS, SWAP FOR TABLES
  function renderLetters() {
    for (i = 1; i < (1 + $('.input-line').length); i++) {
      $('#line' + i).text($('#input-line' + i).val());
    }
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

    for (i = 1; i < (1 + $('.letters').length); i++) {
      var $lineLetters = $('#line' + i + " div");
      var n = $lineLetters.length;
      var letterWidth = ( ( 101 - n ) / n) + '%';
      $lineLetters.css('width', letterWidth);
    }
    
    var pageHeight = $('#page').height();
    var lines = $('.letters').length - 1;
    var lineHeight = pageHeight / lines;
    $('.letters > div').css('height', lineHeight);
  }
  
// SEE IF THERE ARE CHARACTERS IN THE LAST LINE
  function assessInputs() {
    l = 1 + $('.input-line').length;
    if($('.input-line').last().val()) {
//IF YES, ADD A NEW INPUT AND NEW LINE
      $('#input-form').append( '<input type="text" class="input-line" id="input-line' + l + '" value="">' );
      $('#page').append( '<div id="line' + l + '" class="letters"></div>' );
//IF NO, REMOVE THE LAST LINE
    }
  }

// ON KEYUP IN INPUTS, ITERATE THROUGH LINES
  $('#input-form').on('keyup', '.input-line', function(e) {
    renderLetters();
    assessInputs();
  });
  
// AT START, ASSESS INPUTS AND RENDER
  assessInputs();
  renderLetters();
  
});