$(document).ready(function() {
    var $body = $('body');
    var $feed = $('<div></div>');
    $feed.addClass('feed');
    $feed.appendTo('#content');
    var $more = $('<div id="load"><a href="#all"><img src="Assets/load.png" alt="Load More"></a></div>');
    $more.appendTo($body);

    dateFormat.masks.readable = 'h:MM TT mmmm, d yyyy';


    var Refresh = function() {

        var index = streams.home.length - 1;
        while (index >= 0) {
            var tweet = streams.home[index];
            var $tweet = $('<div></div>');
            var user = tweet.user;
            var $user = $('<a href="#all"></a></br>');
            var tweetMessage = tweet.message;
            var $tweetMessage = $('<p></p>');
            $user.text('@' + user + ':');
            $user.addClass(user);
            $user.attr('id', 'name');

            $tweetMessage.text(tweetMessage);
            $tweetMessage.addClass('message');



            $tweet.append($user);
            $tweet.append($tweetMessage);
            $tweet.addClass('tweet');

            var $timeStamp = $('<div></div>');

            $timeStamp.text((tweet.created_at).format('readable'));
            $timeStamp.addClass('timeStamp');
            $timeStamp.appendTo($tweet);

            $tweet.appendTo($feed);



            index -= 1;

            
        }
    }

    Refresh();

    $(document).on('click', '#load', function() {
        $feed.html('');
        Refresh();
    })





});
