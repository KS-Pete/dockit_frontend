import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { styled } from '@mui/material';

export const MuiContentEditable = styled(ContentEditable)({
    width: "100%",
    fontWeight: "400",
    height: "100%",
    // padding: "0 100px",
    backgroundColor: "rgba(0, 0, 0, 0.06)",
    "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.12)"
    },
    position: "relative",
    borderRadius: "15px",
    textAlign: "left",
    padding: "10px 18px",
});

export const MuiPLaceholder = {
    color: "darkgrey",
    top: 0,
    left: 0,
    position: "absolute",
    userSelect: "none",
    display: "inline-block",
    pointerEvents: "none",
};