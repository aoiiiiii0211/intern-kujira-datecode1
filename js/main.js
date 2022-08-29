// // ページの読み込みが完了したら処理をする
// window.addEventListener('load', function () {
//     kzlAddEvent('saveBtn', 'click', function(){
//         alert("保存しました。")
//     });

//     // 今日の日付をテキストフィールドに設定
//     var dateObj = new Date();
//     var year = dateObj.getFullYear();
//     var month = dateObj.getMonth() + 1;
//     var date = dateObj.getDate();
//     // YYYY年MM月DD日形式に変換
//     // kzlSetInputValue('dialyDate', year + '年' + month + '月' + date + '日');

//     // ローカルストレージが使えるかチェック　※オプション
//     if (!window.localStorage) {
//         // var ele = document.getElementById('status');
//         kzlGetElement('status').innerHTML = 'ローカルストレージが使えるブラウザをご利用ください';
//         return;
//     }

//     // 「保存する」ボタンがクリックされた時の処理
//     kzlAddEvent('saveButton', 'click', function () {

    
//         //　タイトルを取得
//         var dialyTitle = kzlGetInputValue('dialyTitle');
//         // 日付を取得
//         var dialyDate = kzlGetInputValue('dialyDate');
//         //　内容を取得
//         var dialyText = kzlGetInputValue('dialyContents');
        
        
//         // バリデーション        
//         var errMsg = '';

//         // タイトル 必須
//         if (dialyTitle == ''){
//            errMsg = errMsg + 'タイトルは必須です\n';
//         }
       
//         // タイトル 30文字まで
//         if(dialyTitle.length > 30) {
//             errMsg =  'エラーメッセージ\n';
//         }

//         // 日付 必須
//         if (dialyDate == ''){
//             errMsg = errMsg + '日付は必須です\n';
//         }
        
//         // 日付 日付として正しいかどうか
//         var dateResult = dialyDate.match(/^\d{1,4}年\d{1,2}月\d{1,2}日/);
//         if(dateResult == null) {
//            errMsg = 'エラー';
//         }
        
//         // チェック完了時の処理
//         if (errMsg != '') {
//             // バリデーションに失敗した場合は、javascriptのalertでエラーメッセージと「保存に失敗しました」のメッセージを表示する。
//             // alert('保存に失敗しました\n\n' + errMsg);
//             // 保存処理をせずに戻る
//             return false;
//         }
        
//         // ローカルストレージに保存
//         kzlSetDialyValues(dialyDate, dialyTitle, dialyText);
        
//         // 完了メッセージ
//         kzlGetElement('status').innerHTML = '内容を保存しました';
        
//         // 日記一覧を表示
//         generateList();
//     });
    
//     // 「削除」ボタンがクリックされた時の処理
//     kzlAddEvent('deleteButton', 'click', function () {
//         var dialyDate = kzlGetInputValue('dialyDate');
//         if (kzlGetDialyValues(dialyDate) == null) {
//             // 該当する値が存在しない場合avascriptのalertでエラーメッセージを表示する。　
//             alert('削除する日記が存在しません');
//         } else {
//             // 該当する値が存在する場合、削除確認のアラートを表示する。
//             if (confirm('削除してもよろしいですか？')) {
//                 // 上記でOKのボタンが押下された場合のみ、該当する値をlocalStorageから削除する。
//                 kzlRemoveDialyValues(dialyDate);
//                 // 削除完了後、リンクが削除されること。
//                 kzlGetElement('status').innerHTML = dialyDate + 'の日記を削除しました';
//                 // 日記一覧を表示
//                 generateList();
//             }
//         }
//     });
// });

// // 保存リストから一覧を作成し表示する
// function generateList() {
//     var data = window.localStorage;
//     var dateList = '';
//     for (var i = 0; i < data.length; i++) {
//         var date = data.key(i);
//         // リンクを生成
//         dateList += '<a href="#" onclick=loadDialy("' + date + '")>' + date + '</a>' + '<br>';
//     }
//     kzlGetElement('list').innerHTML = dateList;
// }
