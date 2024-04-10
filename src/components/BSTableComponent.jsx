import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {CSVExport} from "react-bootstrap-table2-toolkit";
import cellEditFactory from "react-bootstrap-table2-editor";
import paginationFactory from "react-bootstrap-table2-paginator";
import PropTypes from "prop-types"; // Import PropTypes

const BSTableComponent = ({
  BSKey,
  BSData,
  BSColumn,
  BSexpandRow,
  BSRowEvent,
  BShandleCellEdit,
}) => {
  const {ExportCSVButton} = CSVExport;
  return (
    <>
      <ToolkitProvider
        keyField={BSKey}
        data={BSData}
        columns={BSColumn}
        exportCSV
      >
        {(props) => (
          <div>
            <div className="d-flex">
              <ExportCSVButton
                {...props.csvProps}
                className="btn btn-primary p-2"
                style={{marginLeft: "auto"}}
              >
                Export Report
              </ExportCSVButton>
            </div>

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
              {...props.baseProps}
            />
          </div>
        )}
      </ToolkitProvider>
    </>
  );
};

BSTableComponent.propTypes = {
  BSKey: PropTypes.string.isRequired,
  BSData: PropTypes.array.isRequired,
  BSColumn: PropTypes.array.isRequired,
  BSexpandRow: PropTypes.func,
  BSRowEvent: PropTypes.object,
  BShandleCellEdit: PropTypes.func,
};

export default BSTableComponent;
