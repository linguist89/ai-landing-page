const StripedDataTable = () => {
    const data = [
        { id: 1, name: "Striped Item 1", price: "$20" },
        { id: 2, name: "Striped Item 2", price: "$40" },
        { id: 3, name: "Striped Item 3", price: "$60" },
    ];

    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th scope="col" className="py-3 px-6">ID</th>
                        <th scope="col" className="py-3 px-6">Name</th>
                        <th scope="col" className="py-3 px-6">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id} className={`bg-white ${index % 2 === 0 ? 'bg-gray-50' : ''} hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-600`}>
                            <td className="py-4 px-6">{item.id}</td>
                            <td className="py-4 px-6">{item.name}</td>
                            <td className="py-4 px-6">{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StripedDataTable;
