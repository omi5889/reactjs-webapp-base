import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function AppCard(props) {
  const { appMetaData } = props;

  return (
    <>
      <Card className="appCard">
        <Card.Body>
          <Card.Title className="cardTitle">{appMetaData.name}</Card.Title>
          <Card.Text className="cardDescription">
            {appMetaData.description}
          </Card.Text>
          <Button className="cardButton" href={appMetaData.url} target="_blank">
            Go to App
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
