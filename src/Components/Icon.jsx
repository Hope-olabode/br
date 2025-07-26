
import PropTypes from 'prop-types';

export default function Icon({img}) {
    return (
        <img src={img} className="w-6 h-6" alt="Icon" />
    )
}

Icon.propTypes = {
    img: PropTypes.string.isRequired,
};