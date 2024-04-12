import {Button} from "react-bootstrap";
import {updateStatus} from "../../../../../api/transferunits";
import {toast} from "react-toastify";

const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "whitesmoke"; // or any color you prefer for completed
    case "Transferred":
      return "#20c997"; // or any color you prefer for on hold
    default:
      return "transparent"; // default color
  }
};

const getUrgencyColor = (status) => {
  switch (status) {
    case "Critical":
      return "#dc3545"; // or any color you prefer for completed
    case "High":
      return "#20c997"; // or any color you prefer for on hold
    case "Medium":
      return "#20c997"; // or any color you prefer for on hold
    case "Low":
      return "#20c997"; // or any color you prefer for on hold
    default:
      return "transparent"; // default color
  }
};

function handleDone(value) {
  proceedUpdateStatus(value);
}

async function proceedUpdateStatus(value) {
  try {
    const updated = await updateStatus(value);
    if (updated) {
      toast("Supply Transferred", {
        icon: <i className="bx bxs-layer-plus"></i>,
        progressClassName:
          "Toastify__toast-theme--colored Toastify__toast--info ",
        autoClose: 1500,
      });
    }
  } catch (error) {
    console.log(`error`, error);
  }
}

export const columns = [
  {
    dataField: "id",
    text: "id",
    hidden: true,
    editable: false,
  },
  {
    dataField: "units",
    text: "Unit",
    hidden: false,
    editable: false,
  },
  {
    dataField: "urgency",
    text: "Urgency",
    hidden: false,
    sort: true,
    editable: false,
    headerAlign: "center",
    style: (cell) => ({
      backgroundColor: getUrgencyColor(cell),
      color: "white",
    }),
    align: "center",
  },
  {
    dataField: "from_location",
    text: "From",
    hidden: false,
    sort: true,
    editable: false,
  },
  {
    dataField: "to_location",
    text: "To",
    hidden: false,
    sort: true,
    editable: false,
  },

  {
    dataField: "status",
    text: "Status",
    hidden: false,
    sort: true,
    editable: false,
    headerAlign: "center",
    style: (cell) => ({
      backgroundColor: getStatusColor(cell),
      color: "white",
    }),
    align: "center",
    formatter: (cell, row) => {
      const {id} = row; // Destructure the id from the row object
      if (cell === "Transferred") {
        return cell;
      }
      return (
        <Button
          variant="outline-primary"
          className="px-4"
          onClick={() => handleDone(id)} // Use the id directly
        >
          Done
        </Button>
      );
    },
  },
  {
    dataField: "requester",
    text: "Requestor",
    hidden: false,
    editable: false,
  },
  {
    dataField: "created_at",
    text: "Date",
    hidden: true,
    editable: false,
  },
];
