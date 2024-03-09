import {AppBar, Toolbar, Typography} from "@mui/material";

export default function NavBar() {
    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                    <Typography>
                        Swap-Project
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}