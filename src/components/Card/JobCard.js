import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    objectFit: "cover",
  },
}));

export default function BasicCard() {
  const cards = [1, 2, 3, 4, 5, 6, 7];
  const [isLoad, setIsLoad] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    // (async () => {
    //   try {
    //     const apiResult = await axios.get(
    //       "https://arbeitnow.com/api/job-board-api"
    //     );
    //     setResult(apiResult[0]);
    //     if (result.length !== 0) {
    //       console.log("thisis:", result);
    //       setIsLoad(false);
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // })();
    // console.log(result);
    setResult([
      {
        company_name: "CRED",
        title: "Developer",
        location: "Thrissur",
        role: "We are looking for a NodeJS Develoepr to inculcate good coding practices, ensure best practices and code reviews for a stable and performant application.",
        avatar:
          "https://upload.wikimedia.org/wikipedia/en/7/7c/CRED_%28FinTech_company%29_logo.png",
      },
      {
        company_name: "Galaxy Card ",
        title: " NodeJS Developer Intern ",
        location: "   Work from Home (Gurgaon after few months) ",
        role: "We are looking for a NodeJS Develoepr to inculcate good coding practices, ensure best practices and code reviews for a stable and performant application.",
        avatar: "https://galaxycard.in/img/logo.svg",
      },
      {
        company_name: "Maersk Global Service Centres (India) Pvt Ltd ",
        title: " Data Engineer Intern ",
        location:
          "   Bangalore / Pune (WFH, sooner or later will have to work from base location) ",
        role: "Maersk Global Service Centres or A.P. Moller - Maersk is an integrated container logistics company and member of the A.P. Moller Group. ",
        avatar: "https://bit.ly/3letKdx",
      },
      {
        company_name: "PUMA India",
        title: "Software Engineer - Full Stack",
        location: "Bangalore",
        role: "We are looking for a Full Stack Developer to produce scalable software solutions. You’ll be part of a cross-functional team that’s responsible for the full software development life cycle, from conception to deployment.",
        avatar: "https://bit.ly/3qCrNKR",
      },
      {
        company_name: "Fluxon",
        title: "Senior Software Engineer",
        location: "Hyderabad",
        role: "Fluxon is a full-service product and software engineering team consists of Google-caliber engineers and CTOs. We follow agile development processes to ensure we iterate and validate every step of the way.",
        avatar: "https://www.fluxon.com/static/images/favicon-32.png",
      },
    ]);
  }, []);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Container sx={{ py: 6 }} maxWidth="lg">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {isLoad ? (
          <>loading</>
        ) : (
          result.map((card) => (
            <Grid item xs={2} sm={4} md={4} key={card}>
              {/* <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {card.company_name}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {card.location}
                  </Typography>
                  <Typography variant="body2">{card.role}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
                <CardMedia
                  className={{
                    width: 151,
                  }}
                  image="https://upload.wikimedia.org/wikipedia/en/7/7c/CRED_%28FinTech_company%29_logo.png"
                  title="Live from space album cover"
                />
              </Card> */}
              <Card className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label="recipe"
                      className={classes.avatar}
                      src={card.avatar}
                    />
                  }
                  title={card.company_name}
                  subheader={card.title}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {card.role}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}
