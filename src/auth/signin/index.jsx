import { Box, Button, Card, CardContent, Container, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";


export default function Signin() {
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
                }}
                    display="flex" justifyContent="center" alignItems="center">
                    <Card sx={{ width: 400, p: 5, boxShadow: 3, textAlign: 'center' }}>
                        <CardContent>
                            <Typography variant="h5">Login</Typography>
                            <TextField fullWidth sx={{ mt: 5 }} label="Email" />
                            <TextField fullWidth sx={{ mt: 5 }} label="Password" />
                            <Button fullWidth sx={{ mt: 5 }} variant="contained" >Signin</Button>
                            <Typography sx={{ mt: 5, fontSize: '14px' }}>Don't have an account ? <Link to={"/signup"}>Signup</Link></Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </>
    )
}