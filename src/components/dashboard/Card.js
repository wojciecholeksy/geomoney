import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ name, surname, content, image }) {
  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardMedia
        sx={{ height: 155 }}
        image={image}
        title={`${name} ${surname}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name} {surname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Zobacz szczegóły</Button>
      </CardActions>
    </Card>
  );
}
