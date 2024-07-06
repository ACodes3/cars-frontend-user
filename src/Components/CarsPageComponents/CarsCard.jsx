import EarbudsIcon from '@mui/icons-material/Earbuds';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LuggageIcon from '@mui/icons-material/Luggage';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonIcon from '@mui/icons-material/Person';
import ShareIcon from "@mui/icons-material/Share";
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from '@mui/material/Stack';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import * as React from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CarsCard = ({ car }) => {
    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'white' }} aria-label="recipe">
            <img
              src={car.logo}
              alt="Car Logo"
              style={{ height: "100%" }}
            />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={car.name}
        subheader={car.price}
      />
      <CardMedia
        component="img"
        height="230"
        width="auto"
        src={car.image}
        alt="Car Image"
      />
      <CardContent>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 280 }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead style={{ backgroundColor: "#A9CDEF" }}>
              <TableRow>
                <TableCell>Specifications</TableCell>
                <TableCell align="right">Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {car.specifications.map((row) => (
                <TableRow
                  key={row.specification}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.specification}
                  </TableCell>
                  <TableCell align="right">{row.numericValue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Stack spacing={2} direction="row" alignSelf={"center"} size="small">
            {car.details.map((detail, index) => (
              <Button key={index} variant="outlined" disabled size="small">
                {detail.icon === 'PersonIcon' && <PersonIcon />}
                {detail.icon === 'LuggageIcon' && <LuggageIcon />}
                {detail.icon === 'EarbudsIcon' && <EarbudsIcon />}
                {detail.label}
              </Button>
            ))}
          </Stack>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default CarsCard