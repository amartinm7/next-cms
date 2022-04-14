import Card from '../components/card/index.js'
import styles from './movies.module.scss'
import Layout from '../components/layout/layout'
import Sidebar from '../components/layout/sideBar'
import Contact from './contact'

const baseClass = styles['ech-movies']
const array = ["one", "two", "three", "four", "five", "six"]
const movie = (index) => <Card key={index}/>

export default function Movies() {
  return (<div className={baseClass}>
    {array.map((item,index) => movie(index))}
  </div>)
}

Movies.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
