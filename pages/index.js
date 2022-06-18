import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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

        <div className={styles.container}>
          <form name="url-input" data-netlify="true" data-netlify-honeypot="bot-field" method="post" onSubmit={handleSubmit}>
            <label>URL: <input type="text" name="url" placeholder="https://..."></input></label>
            <button type="submit">Shorten that URL!</button>
          </form>
        </div>
       
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
