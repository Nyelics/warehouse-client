import {useEffect, useState} from "react";
import {getTransferRequests} from "../../../../../api/transferunits";
import BSTableComponent from "../../../../../components/BSTableComponent";
import {columns} from "./SupplyColumns";
const SupplyComponent = () => {
  const [trData, setTrData] = useState([]);
  useEffect(() => {
    getAllTransferRequests();
  }, []);

  const getAllTransferRequests = async () => {
    try {
      const res = await getTransferRequests();
      setTrData(res);
    } catch (error) {
      console.log("cannot fetch data from transfer request api", error);
    }
  };

  return <BSTableComponent BSKey="id" BSData={trData} BSColumn={columns} />;
};

export default SupplyComponent;
