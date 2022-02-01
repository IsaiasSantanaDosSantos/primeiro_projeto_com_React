import {Link} from 'react-router-dom'
import styles from './LinkButton.module.css'

function LinkButton({to, text}){ //A propriedade "to" vai dizer para onde o link vai e a propriedade "text" é para mudar o texto dependendo de onde será usado.
    return(
        <Link className={styles.btn} to={to}>
        {text}
        </Link>
    )
}

export default LinkButton