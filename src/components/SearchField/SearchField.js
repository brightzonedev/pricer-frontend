import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        /* marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit, */
        width: 1000,
        backgroundColor: 'fff',
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
}));

const SearchField = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState('');
    
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    
    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="standard-full-width"
                className={classes.textField}
                style={{ margin: 8, width: 500, background: 'white', borderRadius: '10px', outline: 'none' }}
                placeholder="Paste the link to your product here."
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    );
};

export default SearchField;
