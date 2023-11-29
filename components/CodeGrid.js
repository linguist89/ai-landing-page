import CodeDisplayComponent from "./CustomCodeDisplayComponent";

const CodeGrid = () => {
    // Example data sets for different CustomDataTables
    const componentNames = [
        "StripedDataTable", "DataTable", "FilterDataTable", "DeleteDataTable", "SortingDataTable"
    ];


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {componentNames.map((componentName, index) => (
                <div key={index} className="border rounded-lg p-3 shadow-md">
                    <CodeDisplayComponent componentName={componentName} />
                </div>
            ))}
        </div>
    );
};

export default CodeGrid;
