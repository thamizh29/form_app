import { Box, Button, Card, CardContent, Container, TextField, Typography } from "@mui/material";


export default function Signin() {
    return (
        <>
            <Container>
                <Box sx={{position: 'relative',top: '50%'}} display="flex" justifyContent="center" alignItems="center">
                    <Card sx={{ width: 450, p: 5, boxShadow: 3, textAlign: 'center'}}>
                        <CardContent>
                            <Typography variant="h5">Login</Typography>
                            <TextField fullWidth sx={{mt:4}} label="Email" />
                            <TextField fullWidth sx={{mt:4}} label="Password" />
                            <Button fullWidth sx={{mt:4}} variant="contained" >Signin</Button>
                            <Typography sx={{mt:4}}>don't have account</Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </>
    )
}