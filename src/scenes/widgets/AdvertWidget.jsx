import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          About Us
        </Typography>
        {/* <Typography color={medium}>Post thoughts</Typography> */}
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/PicScribe_LOGO.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={dark} variant="h3" m="0.5rem 0">PicScribe</Typography>
        <Typography color={medium}><a style={{color: "#3aa5c0"}}href="http://picscribe.netlify.com">picscribe.netlify.com</a></Typography>
      </FlexBetween>
      <Typography color={main} m="0.5rem 0">
      Welcome to PicScribe, the online community where connections come to life and friendships flourish. We're delighted to have you here, and we're excited to introduce you to a platform that celebrates the essence of human interaction and fosters meaningful relationships.<br></br>  
      👉 Experience a new way to cherish your memories - PicScribe elevates the storytelling experience with a touch of artistry!<br></br>
👉 PicScribe is your creative canvas, where your imagination knows no bounds.  <br></br><br></br>
      </Typography>
      <Typography color={dark} variant="h6" fontweight="500">
      Made with ❤️ by Aashish.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
