import './Botao.css'

const Botao = ({ texto }) => {
    return <button className="botao">
        {texto}
    </button>
}

export default Botao