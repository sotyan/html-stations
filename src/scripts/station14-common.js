async function main() {
    const results = await getData(); // awaitによってgetData()の処理が終わるまで次に進まない
    const elem = document.getElementById("result");
    results.forEach(result => {
        let li = document.createElement('li');
        let text = document.createTextNode(result.full_name);
        li.appendChild(text);
        elem.appendChild(li);
    })
}

main()
