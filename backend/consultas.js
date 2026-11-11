import banco from './banco.js'

console.log('1. todas as pessoas')
console.table(banco.prepare('SELECT id, usuario, nome FROM usuarios').all())

console.log('2. Os posts da pessoa com id 1')
console.table(banco.prepare('SELECT id, imagem, legenda FROM posts WHERE usuario_id = ?').all(1))

console.log('3. Os mesmos posts, do mais novo para o mais antigo')
console.table(
    banco.prepare('SELECT id, imagem, legenda FROM posts WHERE usuario_id = ? ORDER BY id DESC').all(1)
)

console.log('4. Os seis primeiros posts, com o nome de quem publicou')
console.table(
    banco.prepare(
            `SELECT posts.id, posts.legenda, usuarios.usuario AS autor
            FROM posts
            JOIN usuarios ON usuarios.id = posts.usuario_id
            ORDER BY RANDOM()
            LIMIT 6`
        )
        .all()
)

console.log('5. nome e bio da carla')
console.table(banco.prepare("SELECT nome, bio FROM usuarios WHERE usuario = 'carla'").all())

console.log('6. a legenda e o nome do autor dos posts da carla, usando JOIN')
console.table(
    banco.prepare(
            `SELECT posts.legenda, usuarios.nome AS autor
            FROM posts
            JOIN usuarios ON usuarios.id = posts.usuario_id
            WHERE usuarios.usuario = 'carla'
            `
        )
        .all()
)

console.log('7. quantidade de posts')
console.table(
    banco.prepare('SELECT COUNT(*) AS total FROM posts').all()
)


