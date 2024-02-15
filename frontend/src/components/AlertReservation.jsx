import Swal from 'sweetalert2'

function AlertReservation(titre, texte, icone) {
    return (
        Swal.fire({
            title: titre,
            text: texte,
            icon: icone, 
            allowOutsideClick: false
        }).then(() => {
            window.location.reload();
        })
    )
}

export default AlertReservation