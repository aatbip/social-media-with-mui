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
import Post from "./Post";

const Feed = () => {
  return (
    <Box>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
