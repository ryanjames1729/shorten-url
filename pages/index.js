import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

var fs = require('fs');
const { request } = require('http');

const api_token = "22jiLsYXyNo2u3FUFH8Ygnzg-SYNpU24qbgMa7sWEEI"
const site_id = "afbc61ad-36b5-4af1-a893-aabed809b826"
const form_id = "62acdfcdd1e60d00096333ec"

const url_get = "http://api.netlify.com/api/v1/forms/" + form_id + "/submissions?access_token=" + api_token;


function testing() {
  console.log("testing");
  request(url_get, function(err, response, body){
      const form = JSON.parse(body);
      console.log(form)
      
      const data = [];

      for(let item in form) {
          let destination = form.url;
          if(destination.indexOf("://") === -1) {
              destination = "https://" + destination;
          }
          data.push("/" + url.route + "  " + destination + "  302");
      }

      console.log(data);
      

      // fs.writeFile(form.referrer + '/_redirects', data.join('\n'), function(err) {
      //     if(err) {
      //         return console.log(err);
      //     } else {
      //         return console.log('New routes saved.')
      //     }
      // });
      return;
  });
}


export default function Home() {

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 'form-name': 'url-input', 'destination': 'url' })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  const testing = async () => {
      const res = await fetch(url_get);
      const submissions = await res.json();
      console.log('----------------------------');
      let data = []
      for (let i = 0; i < submissions.length; i++) {
        let destination = submissions[i].data.url;
        if(destination.indexOf("://") === -1) {
            destination = "https://" + destination;
        }
        data.push("/" + submissions[i].data.route + "  " + destination + "  302");
      }
      console.log(data);

      fs.writeFile('https://the-great-ryanjames1729-site.netlify.app/' + '/_redirects', data.join('\n'), function(err) {
          if(err) {
              return console.log(err);
          } else {
              return console.log('New routes saved.')
          }
      });
    return;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Shorten the URL</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to URL Shortener
        </h1>
        <h6>by Ryan James</h6>  

        <div className={styles.card}>
          <div className={styles.grid}>
          <form name="url-input" data-netlify="true" data-netlify-honeypot="bot-field" method="post">
            <input type="hidden" name="form-name" value="url-input" />
            <label htmlFor="url">URL: </label><input type="text" name="url" placeholder="https://..."></input><br/>
            <label htmlFor="route">Route: </label><input type="text" name="route" placeholder="catsOnTrampolines..."></input>
            <button type="submit">Shorten that URL!</button>
          </form>
          </div>
        </div>
       
        <button onClick={testing()}>Run the code!</button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://ryan-james.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by{' '}
          <span className={styles.logo}>
            Ryan James
          </span>
        </a>
      </footer>
    </div>
  )
}
