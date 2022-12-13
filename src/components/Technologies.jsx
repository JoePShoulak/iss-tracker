import {
  Card,
  CardContent,
  CardHeader,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";

const TechLink = ({ name, link }) => (
  <>
    {" "}
    <Link href={link} target="_blank">
      {name}
    </Link>{" "}
  </>
);

const Technologies = () => (
  <Card>
    <CardHeader title="Technologies" />
    <CardContent>
      <List>
        <ListItem>
          <Typography>
            ISS location found using the
            <TechLink name="WTIA" link="https://wheretheiss.at/w/developer" />
            API
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            Visual powered by
            <TechLink name="p5" link="https://p5js.org" />
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            Site running on
            <TechLink name="React" link="https://reactjs.org" />
          </Typography>
        </ListItem>
      </List>
    </CardContent>
  </Card>
);

export default Technologies;
