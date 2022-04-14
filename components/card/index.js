import PropTypes from 'prop-types'
import styles from './index.module.scss'
import Image from 'next/image'

const baseClass = styles['ech-card']
const imageClass = styles['ech-card-image']


const Card = ({}) => {
  return (
    <div className={baseClass}>
          <Image src={"https://image.tmdb.org/t/p/w500/1HXBUVLacdJhJz0rYGz71qrczMM.jpg"}
                 alt={"heyyy"} className={imageClass}
                 layout="fill" objectFit="cover"/>
    </div>
  )
}
Card.displayName = 'AdResume'
Card.propTypes = {
  // background: PropTypes.object,
  // education: PropTypes.object,
  // languages: PropTypes.object,
  // className: PropTypes.string
}
export default Card
