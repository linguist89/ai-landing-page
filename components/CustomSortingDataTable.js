import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const SortingDataTable = () => {
    const [data, setData] = useState([
        { id: 1, name: "Item 1", price: "$20" },
        { id: 2, name: "Item 2", price: "$40" },
        { id: 3, name: "Item 3", price: "$60" },
    ]);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    const sortBy = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        const sortedData = [...data].sort((a, b) => {
            if (a[key] < b[key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
        setData(sortedData);
        setSortConfig({ key, direction });
    }

    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6 cursor-pointer" onClick={() => sortBy('id')}>ID</th>
                        <th scope="col" className="py-3 px-6 cursor-pointer" onClick={() => sortBy('name')}>Name</th>
                        <th scope="col" className="py-3 px-6 cursor-pointer" onClick={() => sortBy('price')}>Price</th>
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

export default SortingDataTable;
