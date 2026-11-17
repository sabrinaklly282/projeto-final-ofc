// Tudo o que o front-end precisa para conversar com o back-end fica neste arquivo.
 
// Endereço da nossa API (o back-end feito com Node + Express)
export const URL_API = 'http://localhost:3000'

export function urlFoto(nome) {
  return `${URL_API}/uploads/${nome}`
}

export async function chamarApi(caminho, metodo = 'GET', corpo) {
    let resposta 

    try {
        resposta = await fetch(URL_API + caminho, {
            method: metodo,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: corpo
        })
    } catch (erro) {
        throw new Error('nao consegui falar com o servidor. ele esta ligado?')
    }

    if(resposta.status === 401) {
        localStorage.removeItem('token')
        window.location.href = '/login'
    }

    const dados = await resposta.json

    if(!resposta.ok) {
        throw new Error(dados.erro)
    }

    return dados
}