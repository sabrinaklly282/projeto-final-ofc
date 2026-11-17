import { useState, useEffect } from 'react'
import { RefreshCw, Images, TriangleAlert } from 'lucide-react'
import { chamarApi } from '../api'

function Feed() {
    const [posts, setPosts] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState('')

    async function carregarFeed() {
        try {
            const dados = await chamarApi('/feed')
            setPosts(dados)
            setErro('')
        } catch (problema) {
            setErro(problema.message)
        }
        setCarregando(false)
    }

    useEffect(() => {
        carregarFeed()
    }, [])

    return (
        <>
            <div className="d-flex justify-content-between align-items-center md-5">
                <h1 className="fs-xl mb-0">feed</h1>
                <button className="btn-outline btn-sm theme-secondary" onClick={carregarFeed}>
                    <RefreshCw size={18} /> Atualizar
                </button>
            </div>

            {erro && (
                <div className="alert theme-danger" role="alert">
                    <TriangleAlert size={18} /> {erro}
                </div>
            )}

            {!carregando && !erro && posts.length === 0 (
            <article className="card">
                <div className="card-body text-center fg-3">
                    <Images size={40} className="align-self-center" />
                    <p>ainda nao ha posts por aqui</p>
                </div>
            </article>
            )}

            {
                posts.map((post) => {
                    <p key={post.id}>{post.autor}: {post.legenda}</p>
                })
            }
        </>
    )
}

export default Feed