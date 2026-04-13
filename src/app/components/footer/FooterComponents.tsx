import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import { Box, Divider, Link, Stack, Typography } from "@mui/material";
import LOGO from "../../../assets/logo.png";
import appColors from "../../colors/appColors";

const MAPS_URL =
    "https://www.google.com.br/maps/place/Av.+Dorival+C%C3%A2ndido+Luz+de+Oliveira,+977+-+Jansen,+Gravata%C3%AD+-+RS,+94035-080/@-29.9374306,-51.0065452,17z/data=!3m1!4b1!4m6!3m5!1s0x95190b4f3aaa2911:0xc923d5db199f41a0!8m2!3d-29.9374353!4d-51.0039703!16s%2Fg%2F11hbgpxjdy?entry=ttu";

export default function FooterComponent() {
    const year = new Date().getFullYear();

    return (
        <Box
            component="footer"
            bgcolor={appColors.dark}
            color={appColors.white}
            sx={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                pt: { xs: 4, md: 5 },
                pb: { xs: 3, md: 4 },
                px: { xs: 2, sm: 3, md: 4 },
            }}
        >
            <Box sx={{ maxWidth: "min(1100px, 100%)", mx: "auto" }}>
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 4, md: 8 }}
                    alignItems={{ xs: "center", md: "flex-start" }}
                    justifyContent="space-between"
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: { xs: "center", md: "flex-start" },
                            flexShrink: 0,
                        }}
                    >
                        <img
                            src={LOGO}
                            alt="Sofa Decor House"
                            style={{ height: "clamp(72px, 12vw, 100px)", width: "auto" }}
                        />
                    </Box>

                    <Stack
                        spacing={2}
                        sx={{
                            textAlign: { xs: "center", md: "left" },
                            alignItems: { xs: "center", md: "flex-start" },
                            maxWidth: "420px",
                        }}
                    >
                        <Typography
                            component="p"
                            variant="overline"
                            sx={{
                                color: appColors.red,
                                fontWeight: 700,
                                letterSpacing: "0.2em",
                                fontSize: "0.75rem",
                                m: 0,
                            }}
                        >
                            Contate-nos
                        </Typography>

                        <Stack spacing={1.25} sx={{ width: "100%" }}>
                            <Link
                                href="tel:+555130421212"
                                underline="hover"
                                color="inherit"
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 1,
                                    justifyContent: { xs: "center", md: "flex-start" },
                                    fontSize: "1rem",
                                    opacity: 0.95,
                                    transition: "opacity 0.2s",
                                    "&:hover": { opacity: 1 },
                                }}
                            >
                                <PhoneIcon sx={{ fontSize: 20, opacity: 0.85 }} aria-hidden />
                                (51) 3042-1212
                            </Link>

                            <Link
                                href="https://www.instagram.com/sofadecorhouse/"
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="hover"
                                color="inherit"
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 1,
                                    justifyContent: { xs: "center", md: "flex-start" },
                                    fontSize: "1rem",
                                    opacity: 0.95,
                                    "&:hover": { opacity: 1 },
                                }}
                            >
                                <InstagramIcon sx={{ fontSize: 20, opacity: 0.85 }} aria-hidden />
                                @sofadecorhouse
                            </Link>

                            <Link
                                href={MAPS_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="hover"
                                color="inherit"
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "flex-start",
                                    gap: 1,
                                    justifyContent: { xs: "center", md: "flex-start" },
                                    fontSize: "0.9375rem",
                                    lineHeight: 1.5,
                                    opacity: 0.9,
                                    textAlign: { xs: "center", md: "left" },
                                    maxWidth: "360px",
                                }}
                            >
                                <PlaceIcon
                                    sx={{ fontSize: 20, opacity: 0.85, flexShrink: 0, mt: 0.2 }}
                                    aria-hidden
                                />
                                <Box component="span">
                                    Av. Dorival Cândido Luz de Oliveira, 977 — Jansen, Gravataí/RS
                                </Box>
                            </Link>
                        </Stack>
                    </Stack>
                </Stack>

                <Divider
                    sx={{
                        my: { xs: 3, md: 4 },
                        borderColor: "rgba(255,255,255,0.12)",
                    }}
                />

                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={{ xs: 1.5, sm: 0 }}
                    justifyContent="space-between"
                    alignItems={{ xs: "center", sm: "center" }}
                    gap={{ sm: 2 }}
                >
                    <Typography
                        variant="caption"
                        component="p"
                        sx={{
                            opacity: 0.75,
                            textAlign: { xs: "center", sm: "left" },
                            m: 0,
                        }}
                    >
                        Sofa Decor House © {year} · Todos os direitos reservados
                    </Typography>
                    <Typography
                        variant="caption"
                        component="p"
                        sx={{
                            opacity: 0.55,
                            textAlign: { xs: "center", sm: "right" },
                            m: 0,
                        }}
                    >
                        Desenvolvido por Mateus Rossetto
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
}
