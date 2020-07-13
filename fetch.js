const url = 'https://github.com/bongezwa234/bongie';

let h = new Headers();
h.append('Accept', 'application/json');

let req = new Request(url, {
    method: 'GET',
    headers: h,
    mode: 'cors'
});

fetch(req)
.then( (response)=>{
    if(response.ok){
        return response.json();
    }else{
        throw new Error('BAD HTTP stuff');
    }
})
.then( (jsonData) =>{
    console.log(jsonData);
})
.catch( (err) =>{
    console.log('ERROR:', err.message);
});