$("#key_gen").click(() => {
    Promise.resolve($.ajax({
        'url': `http://${window.location.host}/api/api.php?address=${$("#address_input").val()}`,
        'method': 'GET'
    })).then((data) => {
        console.log(data)
        var data = JSON.parse(data)
        console.log(data)
        if (data.status != 200) {
            $("#result").text(data.message)
            return
        }
        else {
            $("#result").text(data.api_key)
        }
    })
})