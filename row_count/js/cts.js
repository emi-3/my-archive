$(function(){
	 




$(document).ready(function() {

    $('#btn').click(function() {

        var text = $('#hoge').text();

        // 1行の高さ取得
        $('#hoge').text('a');
        var rowHeight = $('#hoge').height();

        var rowCount = 1;

        // 一旦空にする
        $('#hoge').text('');

        for (var i = 0; i < text.length; i++) {

            // 一文字取得して追加
            var s = text.substring(i, i + 1);
            $('#hoge').text($('#hoge').text() + s);

            // 現在の高さ取得
            height = $('#hoge').height();

            if (height != rowHeight) {
                // 高さが変わったら行数インクリメント
                rowHeight = height;
                rowCount++;
            }

        }
        alert(rowCount);

    });

});
});