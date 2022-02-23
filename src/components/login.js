import React from 'react'
import {Avatar, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography} from "@mui/material";
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

const Login=()=>{
    const paperStyle={padding :20, height: '70vh', width: 280, margin: '20px auto'}
    const avatarStyle={backgroundColor:'#216eab'}
    const txtStyle={margin: '6px 0'}
    const btnStyle={margin: '8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><SecurityOutlinedIcon/></Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <TextField label={'username'} placeholder={'Enter username'} style={txtStyle} fullWidth required/>
                <TextField label={'password'} placeholder={'Enter password'} type={'password'} fullWidth required/>
                <FormControlLabel control={<Checkbox />} label="Remember username" />
                <Button type={'submit'} color={'primary'} fullWidth variant={'contained'} style={btnStyle}>Sign in</Button>
                <Typography>
                    <Link href={'#'}>Forgot password?</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;