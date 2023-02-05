import {
  Favorite,
  FavoriteBorder,
  MoreVert,
  ShareLocation,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";

const Post = () => {
  return (
    <Box p={2} flex={4}>
      <Card >
        <CardHeader
          avatar={
            <Avatar
              src="https://anantabipal.dev/_next/image?url=%2Fimages%2Fme.jpg&w=256&q=75"
              sx={{ bgcolor: "red" }}
              aria-label="recipe"
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Ananta Bipal"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="350px"
          image="https://anantabipal.dev/_next/image?url=%2Fimages%2Fme.jpg&w=256&q=75"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton disableRipple aria-label="add to favorites">
            <Checkbox
              disableRipple
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareLocation />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Post;
