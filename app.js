
(function ($) {

  function generate() {
    var source = "the quick brown fox jumps over the lazy dog";

    // returns each word on a new line
    var splits = source.split(" ");
    return splits.join('<br>');
  }

  $("#generate").on("click", function (event) {
    $('#displayResults').html(generate());
  });

  //-----------------

  function sortWords() {
    var source = "the quick brown fox jumps over the lazy dog";
    //sort all words alphabetically
    var splits = source.split(" ");
    var sorted = splits.sort();
    return sorted.join('<br>');

  }

  $("#sortWords").on("click", function (event) {
    $('#displayResults').html(sortWords());
  });

  //---------------------------------------------

  function wordLength() {
    var source = "the quick brown fox jumps over the lazy dog";
    // returns each word on a new line
    var splits = source.split(" ");
    var sorted = splits.sort(function (a, b) {
      return (a.length < b.length);

    });
    return sorted.join('<br>');
  };


  $("#wordLength").on("click", function (event) {
    $('#displayResults').html(wordLength());

  });

  //-------------------------------------------------    

  function reversewords() {
    var source = "the quick brown fox jumps over the lazy dog";
    var splits = source.split(" ");
    // returns each word on a new line
    var reversed = splits.reverse(" ");
    return reversed.join('<br>');

  }

  $("#reversewords").on("click", function (event) {
    $('#displayResults').html(reversewords());

  });


})(jQuery);


