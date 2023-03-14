import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActions,
  Typography,
} from "@mui/material/";
import DownloadIcon from "@mui/icons-material/Download";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import saveAs from "file-saver";
function CardComp({ show }) {
  const handleDownload = async () => {
    try {
      let fileImage = `/logo.png`;
      saveAs(fileImage, "down");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/img/trend/img_1.jpeg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lorem
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis nulla officia impedit, excepturi est facilis recusandae
            temporibus minima expedita soluta.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <div onClick={handleDownload}>
              <DownloadIcon titleAccess="Download" />
            </div>
          </Button>

          <Button size="small">
            <div
              onClick={() => {
                show(true);
              }}
            >
              <RemoveRedEyeIcon titleAccess="view metadata" />
            </div>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CardComp;
