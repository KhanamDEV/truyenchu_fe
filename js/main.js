$(document).ready(function(){
  $("#back").click(function(){
    window.history.back();
  });
  function showMore(text) {
    let parent = text.parent();
    if(text.text().length > 130){
        parent.append('<span class="load-more">Xem thêm</span>');
    }
    parent.find('span').click(function(){
        let type = text.css('white-space');
        if(type == 'normal'){
            text.css('white-space', 'nowrap');
        }
        if(type == 'nowrap'){
            text.css('white-space', 'normal');
        }
        $(this).text($(this).text() == 'Xem thêm' ? 'Thu gọn' : 'Xem thêm');
    });
}
$.each($('.content-comment p'), function(index, value){
    showMore($(value));
});
$('input[type="range"]').change(function(){
  $(this).parent().find('span').text($(this).val());
})
})