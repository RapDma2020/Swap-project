import {Button, Typography} from "@mui/material";
import NavBar from "./NavBar.tsx";

export default function HomePage() {
    return (
        <>
            <NavBar />
            <Typography variant='h2'>
                Welcome to the currency convertor!
            </Typography>
            <Button variant='contained'>
                Start Now!
            </Button>
        </>
    )
}