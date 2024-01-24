import { CircularProgress, Container, Typography } from "@mui/material";
import appColors from "../../../colors/appColors";

export default function PageLoader() {
    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                position: "fixed",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                zIndex: 10000,
            }}
        >
            <Container
                sx={{
                    width: 150,
                    height: 120,
                    padding: 3.5,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    backgroundColor: appColors.background,
                }}
            >
                <CircularProgress size={50} />
                <Typography variant="overline" sx={{ fontSize: 15 }}>
                    Carregando
                </Typography>
            </Container>
        </Container>
    );
}
