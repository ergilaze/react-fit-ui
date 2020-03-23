import styled from 'styled-components';
// import theme from 'theme/theme';
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const ColorCircularProgress = withStyles({
    root: {
        color: 'white'
    }
})(CircularProgress);

const theme = {
    primaryGreen: '#4DAC74',
    darkGreen: '#419463'
};
const Button = props => {
    const { disabled, loading, children } = props;
    return (
        <StyledButton {...props} disabled={disabled || loading}>
            {loading ? <ColorCircularProgress size={30} /> : children}
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
    margin: 20px;
    transition: all 400ms;

    &:active {
        background-color: ${props =>
            props.activeColor ? props.activeColor : theme.darkGreen};
    }

    ${props =>
        props.soft &&
        `
        border: 1px solid rgba(255, 255, 255, 0.2);
        background-color: ${props.color || 'rgba(0, 0, 0, 0) !important'};
        color: ${props.textColor || 'rgba(255, 255, 255, 0.8) !important'};

        box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.4),
        -4px -4px 13px rgba(255, 255, 255, 0.5),
        inset 4px 4px 8px rgba(255, 255, 255, 0.2),
        inset -8px -8px 8px rgba(0, 0, 0, 0.05);
        
        &:active {
            background-color: ${props.activeColor ||
                'rgba(0, 0, 0, 0) !important'};
            box-shadow: 4px 2px 18px rgba(0, 0, 0, 0.4),
                -4px -4px 13px rgba(255, 255, 255, 0.4),
                inset 6px 6px 16px rgba(0, 0, 0, 0.1),
                inset -8px -8px 8px rgba(255, 255, 255, 0.2);

            transform: translateY(2px);
        }
    `}

    &:disabled {
        background-color: ${props => props.disabledColor || theme.darkGreen};
        cursor: default;
    }
`;

Button.propTypes = {
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    children: PropTypes.any.isRequired,
    disabledColor: PropTypes.string,
    activeColor: PropTypes.string,
    textColor: PropTypes.string,
    color: PropTypes.string
};

Button.defaultProps = {
    disabled: false,
    loading: false,
    disabledColor: theme.darkGreen,
    activeColor: theme.darkGreen,
    color: theme.primaryGreen,
    textColor: 'white'
};

export default Button;
