import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import paginationFactory from "react-bootstrap-table2-paginator";
const BSTableComponent = ({
  BSKey,
  BSData,
  BSColumn,
  BSexpandRow,
  BSRowEvent,
  BShandleCellEdit,
}) => {
  return (
    <>
      <div>
        <hr />
        <BootstrapTable
          keyField={BSKey}
          data={BSData}
          columns={BSColumn}
          expandRow={BSexpandRow}
          rowEvents={BSRowEvent}
          pagination={paginationFactory()}
          cellEdit={cellEditFactory({
            mode: "click",
            afterSaveCell: BShandleCellEdit,
            blurToSave: true,
          })}
        />
      </div>
    </>
  );
};

export default BSTableComponent;
