/* const url = 'https://jsonplaceholder.typicode.com/users';
// basic fetch Api
export function getData() {
    fetch(url)
    // return a promise
    .then ((resp) => {
         // console.log(resp)
        console.log(resp.status)
        if(!resp.ok) throw new Error ('was not a response')
        return resp.json //extrscts the string and convert it to an object
     })
     .then( (dataobj) => {
       console.log(dataobj)
     })
    .catch(err =>{
        console.warm(err.message);
    });
} */

/*
const str = 'http://127.0.0.1:5500/local-sample.json?attempt=123&other=hello'
const url = new URL(str);
// console.log(url.host, url.origin, url.protocol, url.port, url.pathname);
const request = new Request(url, {
    headers: { 'x-steve': 'hello' },
    method: 'GET',
    cache: 'no-store',
})
fetch(request)
    .then((response) => {
        // console.log(response.status)
        if (!response.ok) throw new Error('invalid');
        return response.json();
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => console.warn(err.message));
*/

// understanding response
// Response objects

/*
const jsonstr = 'http://127.0.0.1:5500/local-sample.json'; // json file
const imgstr = 'https://picsum.photos/id/237/300/200'; // image file
const fontstr = 'https://fonts.gstatic.com/s/montserrat/v25/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCs16Hw5aXp-p7K4KLg.woff2'; // font file
const htmlstr = 'http://127.0.0.1:5500/'; //html file

// HTTP Request  - HEAD, BODY
// HTTP Response - HEAD, BODY

let obj = {
  id: crypto.randomUUID(),
  name: 'the one who knocks',
  favouriteColor: 'blue',
};

  let jsonstring = JSON.stringify(obj);
   console.log(jsonstring);
  let file = new File([jsonstring], 'mydata.json', { type: 'application/json' });

  let response = new Response(file, {
    status: 200,
    statusText: 'okay',
    headers: {
      'content-type': 'application/json',
      'content-length': file.size,
      'x-steve': 'starts with x for a custom header name',
    },
  });

   console.log(response.headers.get('content-type'));
   console.log(response.headers.get('content-length'));

   
    //fetch images,audio,font blob  instead of res.json is used to fetch amnimage
  fetch(imgstr)
  .then((resp) => {
    if (!resp.ok) throw new Error('invalid');
    return resp.blob(); //binary large object images, video, audio, fonts.

    resp.text(); //for text, html, and xml files, and css, and js.
    resp.json(); //for json files
  })
  .then((blob) => {
    console.log(blob); //blob is a chunk of memory on users computer
    let url = URL.createObjectURL(blob);
    let img = document.getElementById('pic');
    img.src = url;
  })
  .catch(console.warn);

*/

/*
// Create Webpage content from fetch results

const jsonstr = 'https://random-data-api.com/api/v2/users?size=10';
const imgstr = 'https://picsum.photos/id/237/300/200';
const textstr = 'http://127.0.0.1:3000/';

let list = document.getElementById('list'); //the <ul>
let img = document.getElementById('pic'); //the <img>
let header = document.querySelector('.headers');

fetch(textstr)
    .then((response) => {
        if (!response.ok) throw new Error('invalid');
        return response.text();
    })
    .then((txt) => {
        header.innerHTML += `<h2>${txt}</h2>`;
    })
    .catch(console.warn);



fetch(jsonstr)
    .then((response) => {
        if (!response.ok) throw new Error('invalid');
        return response.json();
    })
    .then((dataArray) => {
        //
        list.innerHTML = dataArray
            .map(({ uid, first_name, last_name }) => {
                return `<li class="listitem" data-uid="${uid}">
            <p>${first_name}</p>
            <p>${last_name}</p>
          </li>`;
            })
            .join('');
    })
    .catch(console.warn);



fetch(imgstr)
    .then((resp) => {
        if (!resp.ok) throw new Error('invalid');
        return resp.blob();
    })
    .then((blob) => {
        let url = URL.createObjectURL(blob);
        
        let img = document.getElementById('pic');
        img.src = url;
    })
    .catch(console.warn);

*/

  
     // API Keys, Authorization, Credentials, Content-Security-Policy

  //What is an API Key
  //Where can we pass it to the server - querystring, headers, cookies
  //controlling when cookies and credentials are passed to a server
  //CSP meta tags and headers

  let str = 'http://127.0.0.1:3000/?name=value&steve=griffith';
  let url = new URL(str); //url.search
  let sp = url.searchParams;
  sp.append('hello', 'world');
  sp.append('api-key', 'kajshdfkahjsdfkjhsdfkahsdfkjksdjhfksjdh');// the long text can be anything 
  // document.cookie('')

  let h = new Headers();
  // h.append('content-type', 'application/json')
  // h.append('origin', 'https://cia.org') note we are not allowed to change the api origin (http://127.0.0.1/)
  h.append('x-api-key', 'kajshdfkahjsdfkjhsdfkahsdfkjksdjhfksjdh'); //API key
  h.append('Authorization', 'Bearer kajshdfkahjsdfkjhsdfkahsdfkjksdjhfksjdh'); //JWT json web token
  //Forbidden Header Names

  let request = new Request(url, {
    method: 'GET',
    headers: h,
    cache: 'default',
    credentials: 'same-origin',
  });

  fetch(request)
    .then((response) => {
      if (!response.ok) throw new Error('invalid');
      return response.text();
    })
    .then((txt) => {
      console.log(txt);
    })
    .catch(console.warn);
