window.onload = _ => {
    if (window.location.href.indexOf('index.html') == -1 && navigator.language == 'zh-CN')
        window.location = 'index_zh.html';
}