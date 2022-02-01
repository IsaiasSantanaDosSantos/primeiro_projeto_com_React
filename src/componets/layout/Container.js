import styles from './Container.module.css' //Importando modulo de estilos

function Container(props) { //o parâmetro "porps" faz com que mudamos a disposição dos itens dentro do container.
    
    return<div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>
    
}

export default Container