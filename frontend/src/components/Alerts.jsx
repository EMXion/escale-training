import Swal from 'sweetalert2'

function Alert(titre, texte, icone) {
    return (
        Swal.fire({
            title: {titre},
            text: {texte},
            icon: {icone}
        })
    )
}

export default Alert