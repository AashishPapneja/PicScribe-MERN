import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="#3aa5c0">
          PicScribe
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        
      >
        <Typography fontWeight="500" variant="h3" sx={{ mb: "0.5rem" }}>
          Welcome to PicScribe.
        </Typography>
        <Typography fontWeight="500" variant="h6" sx={{ mb: "1.5rem" }}>
          Unleash Your Creativity on PicScribe.
        </Typography>
        
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
