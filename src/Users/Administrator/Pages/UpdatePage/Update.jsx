import {Card, Row, Col, Alert} from "react-bootstrap";
import {useState, useEffect} from "react";
import {getDummyOrders} from "../../../../api/dummyorders";
import {motion} from "framer-motion";
import {getTimeAgo} from "../../../../utils/transformDate";
const Update = () => {
  const [dummyOrders, setDummyOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await getDummyOrders();
        setDummyOrders(res.data);
      } catch (error) {
        console.log("error cannot get orders", error);
      }
    };

    getOrders();
  }, []);

  function handleViewer(value) {
    console.log(value);
  }

  return (
    <Row>
      <Col lg={12}>
        <Alert variant="info">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </Alert>
      </Col>

      {dummyOrders.map((order) => (
        <Col lg={4} key={order.id} className="g-3">
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.03}}
            whileTap={{scale: 0.9}}
          >
            <Card
              className="p-1"
              style={{cursor: "pointer"}}
              onClick={() => handleViewer(order)}
            >
              <Card.Body>
                <h5>{order.consigneeName}</h5>
                <p>
                  <span className="text-muted">Order: </span>
                  {order.item}
                </p>
                <div className="container" style={{fontSize: "13px"}}>
                  <hr />
                  <p className="text-muted">Status: </p>
                  <p
                    className={
                      order.status === "Pending"
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {order.status}
                  </p>
                  <p className="text-muted">Expected at: </p>
                  <p>{getTimeAgo(order.deliveryDate)}</p>
                </div>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>
  );
};

export default Update;
