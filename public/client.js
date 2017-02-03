$(function(){
    $.get('/shows', appendToList);

    function appendToList(shows){
        var list= [];
        for(var i in shows){
            list.push($('<li>', {text: shows[i]}));
        }
        $('.show-list').append(list);
    }
    


});