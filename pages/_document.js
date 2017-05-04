import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage()
    const styles = flush()
    return { html, head, styles }
  }

  render () {
    return (
     <html>
       <Head>
         <title>Student Board</title>
         <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
         <style>{`
           body {
             padding-top: 75px;
           }
         `}</style>
       </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}
