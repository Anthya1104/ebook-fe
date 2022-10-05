import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const handleSuccess = (title, redirect, html) => {
  const loginCard = withReactContent(Swal);
  loginCard
    .fire({
      position: 'center-center',
      icon: 'success',
      title: title ? title : false,
      html: html ? html : false,
      showConfirmButton: redirect ? true : false,
      timer: redirect ? false : 1500,
    })
    .then((data) => {
      if (redirect) {
        return (window.location = redirect);
      }
    });
};
