const data = [
    { id: 1, name: "John Doe", age: 30, job: "Developer" },
    { id: 2, name: "Jane Smith", age: 25, job: "Designer" },
    { id: 3, name: "Bob Johnson", age: 35, job: "Manager" }
];


const DataTable = () => {
    return (
        <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Age
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Job
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="py-4 px-6">{item.name}</td>
                            <td className="py-4 px-6">{item.age}</td>
                            <td className="py-4 px-6">{item.job}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const DataTableStriped = () => {
    return (
        <div className="overflow-x-auto relative">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="py-3 px-6">Name</th>
                        <th className="py-3 px-6">Age</th>
                        <th className="py-3 px-6">Job</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((item, index) => (
                        <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="py-4 px-6">{item.name}</td>
                            <td className="py-4 px-6">{item.age}</td>
                            <td className="py-4 px-6">{item.job}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const DataTableHoverable = () => {
    return (
        <div className="overflow-x-auto relative">
            <table className="min-w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="py-3 px-6">Name</th>
                        <th className="py-3 px-6">Age</th>
                        <th className="py-3 px-6">Job</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-100">
                            <td className="py-4 px-6">{item.name}</td>
                            <td className="py-4 px-6">{item.age}</td>
                            <td className="py-4 px-6">{item.job}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


const DataTableFixedHeader = () => {
    return (
        <div className="overflow-x-auto relative">
            <table className="min-w-full">
                <thead className="sticky top-0 bg-gray-50">
                    <tr>
                        <th className="py-3 px-6">Name</th>
                        <th className="py-3 px-6">Age</th>
                        <th className="py-3 px-6">Job</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td className="py-4 px-6">{item.name}</td>
                            <td className="py-4 px-6">{item.age}</td>
                            <td className="py-4 px-6">{item.job}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const DataTableCompact = () => {
    return (
        <div className="overflow-x-auto relative">
            <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="py-3 px-6">Name</th>
                        <th className="py-3 px-6">Age</th>
                        <th className="py-3 px-6">Job</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td className="py-4 px-6">{item.name}</td>
                            <td className="py-4 px-6">{item.age}</td>
                            <td className="py-4 px-6">{item.job}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};



export default DataTable;
