import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Camera, LogIn, TriangleAlert } from 'lucide-react'
import { URL_API } from '../api.js'

function Login() {
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <main className="container">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-12 md:col-8 xl:col-6">
                    <article className="card">
                        <div className="card-body text-center">
                            <h1 className="fs-2xl fg-primary d-flex justify-content-center align-items-center gap-2">
                                <Camera size={36} /> Instaclone
                            </h1>
                            <p>Entre para ver as fotos da galera.</p>

                            <form className="d-grid gap-3">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Usuário"
                                    aria-label="Usuário"
                                    value={usuario}
                                    onChange={(evento) => {
                                        setUsuario(evento.target.value)
                                    }}
                                />
                                <input
                                    className="form-control"
                                    type="password"
                                    placeholder="Senha"
                                    aria-label="Senha"
                                    value={senha}
                                    onChange={(evento) => {
                                        setSenha(evento.target.value)
                                    }}
                                />
                                <button className="btn-solid theme-primary" type="submit">
                                    <LogIn size={18} /> Entrar
                                </button>
                            </form>
                            <small className="fg-3">Para testar, entre com o usuário ana e a senha 123456.</small>
                        </div>
                    </article>
                </div>
            </div>
        </main>
    )
}

export default Login