// ***********
// ** Kzl tools
// ***********

var kzlGetElement = function (domId) {
  return document.getElementById(domId);
};

var kzlSetInputValue = function (domId, value) {
    kzlGetElement(domId).value = value;
};

var kzlGetInputValue = function (domId) {
    return kzlGetElement(domId).value;
};

var kzlGetIntValue = function (domId) {
    return parseInt(kzlGetInputValue(domId));
}


// ***********
// ** 日記用
// ***********

/**
 * ローカルストレージに、日記帳データを保存
 * @param {string} key 
 * @param {string} title 
 * @param {string} contents 
 */
var kzlSetDialyValues = function (key, title, contents) {
    localStorage.setItem(key, JSON.stringify({title: title, contents: contents}));
};

/**
 * ローカルストレージに保存されている日記帳データを一括取得
 */
var kzlGetDialyValuesList = function () {
    return localStorage;
};

/**
 * ローカルストレージから、日記帳データを読み出し
 * @param {string} key 
 * @param {string} target 'title' or 'contents'
 */
var kzlGetDialyValues = function (key, target) {
    var item = JSON.parse(localStorage.getItem(key));

    if (target) {
        return item[target];
    } else {
        return item;
    }
};

/**
 * ローカルストレージからデータを削除
 * @param {string} key 
 */
var kzlRemoveDialyValues = function (key) {
    localStorage.removeItem(key);
};
