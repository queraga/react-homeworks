import "./App.css";
import { useState } from "react";
import { Form, Input, Button, Card, Typography } from "antd";

function App() {
  const [formSt, setFormSt] = useState({
    name: "",
    description: "",
  });
  const [formData, setFormData] = useState(null);

  const handleChange = (key, value) => {
    setFormSt((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="app">
      <Typography.Title level={3}>
        Form with Ant Design on board
      </Typography.Title>
      <Form layout="vertical" onFinish={() => setFormData(formSt)}>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name",
            },
          ]}
        >
          <Input
            placeholder="Name"
            value={formSt.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input description",
            },
          ]}
        >
          <Input
            placeholder="Description"
            value={formSt.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Form>

      {formData && (
        <Card style={{ marginTop: 20 }}>
          <Typography.Title level={4}>Submitted data:</Typography.Title>
          <Typography.Text strong>Name:</Typography.Text> {formData.name}
          <br />
          <Typography.Text strong>Description: </Typography.Text>
          {formData.description}
        </Card>
      )}
    </div>
  );
}

export default App;
