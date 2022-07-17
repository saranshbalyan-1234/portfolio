import React from "react";
import { Card } from "antd";
import { AlertOutlined } from "@ant-design/icons";
export default function Cards({ description, link, title }) {
  const { Meta } = Card;

  return (
    <Card
      className="handleHover"
      hoverable
      style={{ width: 400 }}
      onClick={() => {
        window.open(link);
      }}
    >
      <Meta
        title={
          <h3>
            <AlertOutlined /> {title}
          </h3>
        }
        description={description}
      />
    </Card>
  );
}
