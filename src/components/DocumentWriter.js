import { CssBaseline, Grid, Typography } from "@mui/material";
import EditorWrapper from "./Editor/EditorWrapper";
import { ThemeProvider } from "styled-components";
import theme from "../style/theme.js";


const DocumentWriter = () => {
    return (
        <div className="Document">
            <ThemeProvider theme={theme}>
                <Grid container alignItems={"center"} flexDirection={"column"} sx={{height: "100%", width: "100%"}}>
                    <CssBaseline />
                    <EditorWrapper />
                </Grid>
            </ThemeProvider>
        </div>
    );
}

export default DocumentWriter;