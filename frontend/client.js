//let getData = document.getElementById("testButton");
let getData = document.getElementById("dataButton");
let addData = document.getElementById("addButton");
let deleteData = document.getElementById("deleteButton");

getData.addEventListener('click', async () => {
    // Here you should make the fetch to the rest api
    let result = await sendData()
    console.log(result)

    document.getElementById("showBooks").innerHTML = result.map(b => b.name).join('<br/>')

});

async function sendData() {
    try {
        var result = await fetch('http://localhost:5000/allData', {
            method: 'GET',
            headers: { 'content-type': 'application/json' }
        });

        var rest = result.json();
        return (rest)
    } catch (error) {
        console.log(error)
    }
}


deleteData.addEventListener('click', async () => {
    // delete data here
    const name = nameText.value
    var category = categoryText.value
    var date = dateText.value
    var author = authorText.value

    // Here you should make the fetch to the rest api
    await removeData(name, category, date, author)

    console.log(name, category, date, author)

});

async function removeData(name, category, date, author) {
    try {
        var del = await fetch('http://localhost:5000/deleteData', {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ name: name, category: category, date: date, author: author })
        });

        var rest = del.json();
        return (rest)
    } catch (error) {
        console.log(error)
    }


}

addData.addEventListener('click', async () => {
    // add data here
    const name = nameText.value
    var category = categoryText.value
    var date = dateText.value
    var author = authorText.value

    // Here you should make the fetch to the rest api
    await postData(name, category, date, author)


    console.log(data)

});


async function postData(name, category, date, author) {
    try {
        var thePost = await fetch('http://localhost:5000/postData', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ name: name, category: category, date: date, author: author })
        });

        var rest = thePost.json();
        return (rest)
    } catch (error) {
        console.log(error)
    }
}


/* getData.addEventListener('click', event => {
    let data = getData2()
    const value = Promise.resolve(data);

    value.then(text => {
        console.log(text)
        document.getElementById("outPut").value += text.name + " " + text.message
    }).catch(err => {
        console.log(err);
    })
});

async function getData2() {
    debugger
    try {
        var result = fetch('http://localhost:5000/dataParam', {
            method: 'GET',
            headers: { 'content-type': 'application/json' }
        });

        var rest = (await result).json();
        return (rest)
    } catch (error) {
        console.log(error)
    }

} */