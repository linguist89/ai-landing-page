import React from 'react';
import 'tailwindcss/tailwind.css'; // ensure you import Tailwind CSS

const DataTable = () => {
    const data = [
        { id: 1, name: "Item 1", price: "$20" },
        { id: 2, name: "Item 2", price: "$40" },
        { id: 3, name: "Item 3", price: "$60" },
    ];

    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">ID</th>
                        <th scope="col" className="py-3 px-6">Name</th>
                        <th scope="col" className="py-3 px-6">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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

export default DataTable;
