async function postData(url = "", data = {}) {
    var auth = localStorage.getItem('auth');
    auth = JSON.parse(auth).access_token;
    // Default options are marked with *
    try {

        const postResponse = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                "Authorization": 'Bearer ' + auth
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        }).then((response) => {
            if (response.status >= 400 && response.status < 600) {
                //throw new Error("Bad response from server");
                console.log(response);
                return new Response(JSON.stringify({
                    code: response.status,
                    message: 'Stupid network Error'
                }));
            }
            return response.json();
        }).catch((error) => {
            // Your error is here!
            console.log(error)
            return error;
        });;
        //return response.json(); // parses JSON response into native JavaScript objects

    } catch (err) {
        console.log(err);
    }
}