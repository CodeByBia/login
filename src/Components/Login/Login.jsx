import {FaUser, FaLock} from 'react-icons/fa';
import {useState} from "react";
import "./Login.css";

const Login = () => { // Define um componente funcional chamado Login

    // Usa o Hook useState para criar uma variável de estado chamada 'username'.
    // O valor inicial é uma string vazia (""). 
    // A função setUsername é usada para atualizar o valor do username quando o usuário digitar algo no campo correspondente.
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 

    // Define uma função 'handleSubmit' que lida com o envio do formulário
    const handleSubmit = (event) => { 
        event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

        alert("Enviando dados:" + username, password)
    }

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse o sistema</h1>
            <div className="input-field">
            {/* Define um manipulador de eventos para quando o valor do campo mudar. 'e' representa o evento. 'e.target.value' acessa o valor atual do campo de input, que é passado para a função 'setUsername' para atualizar o estado. */}
            <input type="email" placeholder="Email" onChange={(e) => setUsername(e.target.value)} required></input>
            <FaUser className='icon' />
            </div>
            <div className="input-field">
            <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} ></input>
            <FaLock className='icon' />
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox"></input>
                    Lembre de mim
                </label>
                <a href='#'>Esqueceu a senha?</a>
            </div>

            <button>Entrar</button>

            <div className="signup-link">
                <p>Não tem uma conta? <a href="#">Registrar</a></p>
            </div>

        </form>
    </div>
  )
}

export default Login
