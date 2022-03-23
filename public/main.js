

getCss.onclick = function () {
    const request = new XMLHttpRequest();
    request.open('GET', '1.css');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            let style = document.createElement('style');
            style.innerText = request.response;
            document.head.appendChild(style)
        }
    }
    request.send()
}
getHtml.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '2.html');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            let div = document.createElement('div');
            div.innerHTML = request.response;
            document.body.appendChild(div);
        }
    }
    request.send()
}
getJs.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '3.js');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.readyState < 300) {
            console.log(request.response)
        }
    }
    request.send()
}
getXml.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            let xml = request.responseXML;
            document.body.appendChild(xml.getElementsByTagName('warning')[0])
        }
    }
    request.send()
}
getJson.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            let obj = JSON.parse(request.response);
            let div = document.createElement('div');
            div.innerHTML = 'I am ' + obj.name + ',' + obj.age + ' years old';
            document.body.appendChild(div)
        }
    }
    request.send()
}
let n = 2;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `page${n}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            let arr = JSON.parse(request.response)
            let ul = document.querySelector('.liWrap');
            arr.forEach((item) => {
                let li;
                if (!!item.end) {
                    getPage.disabled = true
                } else {
                    li = document.createElement('li');
                    li.innerText = item.id;
                    ul.appendChild(li)
                }

            })
            n += 1;
        }
    }
    request.send()
}