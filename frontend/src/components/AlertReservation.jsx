import Swal from 'sweetalert2'

function AlertReservation(titre, texte, icone) {
    return (
        Swal.fire({
            title: titre,
            text: texte,
            icon: icone
        })
    )
}

export default AlertReservation;