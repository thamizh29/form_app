import { Box, Button, Card, CardContent, Container, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function SignUp() {
    return (
        <>
            <Container>
                <Box sx={{
                    position: 'absolute',      
                    top: '50%',              
                    left: '50%',               
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',           
                    height: '100vh',          
                }} display="flex" justifyContent="center" alignItems="center">
                    <Card sx={{ width: 400, p: 5, boxShadow: 3, textAlign: 'center' }}>
                        <CardContent>
                            <Typography variant="h5">Signup</Typography>
                            <TextField type="text" fullWidth sx={{ mt: 5 }} label="User name" required/>
                            <TextField type="email" fullWidth sx={{ mt: 5 }} label="Email" />
                            <TextField type="phone" fullWidth sx={{ mt: 5 }} label="Mobile" />
                            <TextField type="password" fullWidth sx={{ mt: 5 }} label="Password" />
                            <Button fullWidth sx={{ mt: 5 }} variant="contained" >Signin</Button>
                            <Typography sx={{ mt: 5, fontSize: '14px' }}>Already have an account <Link to={"/signin"}>Login</Link></Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </>
    )
}