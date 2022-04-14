import Layout from '../components/layout/layout.js'
import Card from '../components/card/index.js'
import styles from './index.module.scss'

const baseClass = styles['ech-movies']
const array = ["one", "two", "three", "four", "five", "six"]
const movie = (index) => <Card key={index}/>

export default function Home() {
  return (
    <section>
      <h2>Movies</h2>
      <p>
        This example adds a property <code>getLayout</code> to your page,
        allowing you to return a React component for the layout. This allows you
        to define the layout on a per-page basis. Since we are returning a
        function, we can have complex nested layouts if desired.
      </p>
      <div className={baseClass}>
        {array.map((item,index) => movie(index))}
      </div>)
    </section>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
