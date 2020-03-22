import styled from 'styled-components';
// import theme from 'theme/theme';
import React from 'react';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import { withStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';

// const ColorCircularProgress = withStyles({
//     root: {
//       color: 'white',
//     },
// })(CircularProgress);

const theme = {
    primaryGreen: '#4DAC74',
    darkGreen: '#419463'
};
const Button = props => {
    const { disabled, loading, children } = props;
    return (
        <StyledButton {...props} disabled={disabled || loading}>
            {/* {loading ? <ColorCircularProgress size={30} /> : children} */}
            {children}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    padding: 5px 10px;
    border-radius: 10px;
    outline: none;
    border: none;
    font-size: 16px;
    cursor: ${props => (props.loading ? 'not-allowed' : 'pointer')};
    background-color: ${props =>
        props.color ? props.color : theme.primaryGreen};
    color: ${props => (props.textColor ? props.textColor : 'white')} !important;

    &:active {
        background-color: ${props =>
            props.activeColor ? props.activeColor : theme.darkGreen};
    }

    &:disabled {
        background-color: ${props => props.disabledColor || theme.darkGreen};
        cursor: default;
    }
`;

// Button.propTypes = {
//     disabled: PropTypes.bool,
//     loading: PropTypes.bool,
//     children: PropTypes.any.isRequired,
//     disabledColor: PropTypes.string,
//     activeColor: PropTypes.string,
//     textColor: PropTypes.string,
//     color: PropTypes.string,
// };

// Button.defaultProps = {
//     disabled: false,
//     loading: false,
//     disabledColor: theme.darkGreen,
//     activeColor: theme.darkGreen,
//     color: theme.primaryGreen,
//     textColor: 'white',
// };

export default Button;
