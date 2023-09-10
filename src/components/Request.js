
    export default function fetchData(url, method, body = null){
        return fetch(`http://localhost:8080/tasks${url}`, {
        method: method,
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: body
        })
        .then((response) => {
            if (response.ok){
            return response.json();
            } else {
                console.log("Couldnt fetch!!")
            // throw new Error("Couldnt fetch!!")
            }
        })
        .then((data) => {
            console.log("request accepted: " + data);
            return data;
        }).catch(error => {
            console.log("request failed: " + error);
            // if (retryCount > 0){
            // return fetchData(url, retryCount - 1);
            // } else {
            // throw error;
            // }
        });
    };


//   export default { fetchData };