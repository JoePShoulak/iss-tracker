import { Card, CardContent, CardHeader, List, ListItem } from "@mui/material";

const capitalize = string =>
  string.includes(" ")
    ? string.split(" ").map(capitalize).join(" ")
    : string[0].toUpperCase() + string.substring(1);

const formatDataTitle = key =>
  capitalize(
    key
      .replace("_", " ")
      .replace(/lat$/, "latitude")
      .replace(/lon$/, "longitude")
      .replace("id", "id (NORAD)")
  );

const Data = ({ iss }) => {
  return (
    <Card>
      <CardHeader title="ISS Data" />
      <CardContent>
        {iss ? (
          <List>
            {Object.entries(iss).map(([key, value]) => {
              key = formatDataTitle(key);
              return <ListItem key={key}>{`${key}: ${value}`}</ListItem>;
            })}
          </List>
        ) : (
          "Loading..."
        )}
      </CardContent>
    </Card>
  );
};

export default Data;
