import PropTypes from "prop-types";

const ModalFormContent = ({ isError }) =>
  isError ? (
    <div className="ModalMessage--error">
      <div>Erreur d&aposenvoi</div>
      <p>
        Une erreur est survenue lors de l&aposenvoi de votre message. Veuillez
        réessayer.
      </p>
    </div>
  ) : (
    <div className="ModalMessage--success">
      <div>Message envoyé !</div>
      <p>
        Merci pour votre message nous tâcherons de vous répondre dans les plus
        brefs délais.
      </p>
    </div>
  );

ModalFormContent.propTypes = {
  isError: PropTypes.bool.isRequired,
};

export default ModalFormContent;
