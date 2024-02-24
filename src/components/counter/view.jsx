import PropTypes from 'prop-types';

const View = ({ counterSelect }) => {

    const { loading, error, value } = counterSelect

    if (error) return <p>{error.message} 🚨 </p>

    return <div style={{ fontSize: "40px" }}>
        {loading ? <>loading ...</> : value}
    </div>
}

View.propTypes = {
    counterSelect: PropTypes.object.isRequired,
}

export default View