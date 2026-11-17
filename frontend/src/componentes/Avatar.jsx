import { urlFoto } from "../api"

function Avatar({foto, grande}) {
    return (
        <span className={grande ? 'avatar avatar-xl flex-shrink-0' : 'avatar flex-shrink-0'}>
            <img className="avatar-img" src={urlFoto(foto)} alt="Foto de perfil" />
        </span>
    )
}

export default Avatar