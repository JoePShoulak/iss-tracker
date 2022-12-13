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

const TechItem = ({ children }) => (
  <ListItem>
    <Typography>{children}</Typography>
  </ListItem>
);

const Technologies = () => (
  <Card>
    <CardHeader title="Technologies" />
    <CardContent>
      <List>
        <TechItem>
          ISS location found using the
          <TechLink name="WTIA" link="https://wheretheiss.at/w/developer" />
          API
        </TechItem>
        <TechItem>
          Visual powered by
          <TechLink name="p5" link="https://p5js.org" />
        </TechItem>
        <TechItem>
          Site running on
          <TechLink name="React" link="https://reactjs.org" />
        </TechItem>
        <TechItem>
          React and p5 integrated using
          <TechLink
            name="react-p5-wrapper"
            link="https://www.npmjs.com/package/react-p5-wrapper"
          />
        </TechItem>
      </List>
    </CardContent>
  </Card>
);

export default Technologies;
