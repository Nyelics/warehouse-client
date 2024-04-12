import {useEffect, useState} from "react";
import FormikControl from "../../../../../components/Formik/FormikControl";
import {Form, Formik} from "formik";
import {Row, Col, Button} from "react-bootstrap";
import {getStorages} from "../../../../../api/storage";
import {toast} from "react-toastify";
import {store} from "../../../../../api/transferunits";
import {useSessionContext} from "../../../../../hooks/useSessionContext";

const StockTransferComponent = ({maxValue, supplyData}) => {
  const [storages, setStorages] = useState([]);
  const {sessionData} = useSessionContext();
  useEffect(() => {
    const getStorageFunction = async () => {
      try {
        const data = await getStorages();
        setStorages(data);
      } catch (error) {
        console.log(error);
      }
    };

    getStorageFunction();
  }, []);

  function handleTransferRequest(value) {
    if (value.location === "" || value.units === "" || value.urgency === "") {
      toast("Please Complete The Form to Submit Your Request", {
        icon: <i className="bx bxs-layer-plus"></i>,
        progressClassName:
          "Toastify__toast-theme--colored Toastify__toast--info ",
        autoClose: 1500,
      });
    }

    proceedTransfer(value);
  }

  async function proceedTransfer(data) {
    try {
      const res = await store(data);
      toast.success(res.message, {
        icon: <i className="bx bx-task"></i>,
        progressClassName:
          "Toastify__toast-theme--colored Toastify__toast--info ",
        autoClose: 1500,
      });
    } catch (error) {
      toast.error(error, {
        icon: <i className="bx bx-task-x"></i>,
        progressClassName:
          "Toastify__toast-theme--colored Toastify__toast--info ",
        autoClose: 1500,
      });
    }
  }

  return (
    <Formik
      initialValues={{
        units: "",
        urgency: "",
        from_location: supplyData.storage_name,
        to_location: "",
        requester: sessionData.data.name,
      }}
      onSubmit={handleTransferRequest}
    >
      {(formik) => (
        <Form>
          <Row>
            <Col lg={4}>
              <FormikControl
                control="input"
                type="number"
                name="units"
                onChange={formik.handleChange}
                label="How many units ?"
                defaultValue={maxValue}
                max={maxValue}
              />
            </Col>
            <Col lg={4}>
              <FormikControl
                control="select"
                label="Urgency Level"
                name="urgency"
                onChange={formik.handleChange}
                defaultValue=""
                options={[
                  {
                    key: "Critical",
                    value: "critical",
                    display: "Critical",
                    color: "red",
                  },
                  {
                    key: "High",
                    value: "high",
                    display: "High",
                    color: "orange",
                  },
                  {
                    key: "Medium",
                    value: "medium",
                    display: "Medium",
                    color: "yellow",
                  },
                  {key: "Low", value: "low", display: "Low", color: "green"},
                ]}
              />
            </Col>
            <Col lg={4}>
              <FormikControl
                control="select"
                label="Transfer to:"
                name="to_location"
                onChange={formik.handleChange}
                defaultValue=""
                options={storages
                  .filter((storage) => storage.name !== supplyData.storage_name)
                  .map((storage) => ({
                    key: storage.name,
                    value: storage.name,
                    display: storage.name,
                  }))}
              />
            </Col>
          </Row>
          <Row className="my-3">
            <Col lg={12} className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default StockTransferComponent;
