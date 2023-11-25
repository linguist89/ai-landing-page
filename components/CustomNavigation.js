
const SidebarNav = () => {

    return (
        <div className="flex">
            <div className={`bg-gray-800 p-4 text-white w-64 space-y-2`}>
                <ul>
                    <li className="hover:bg-gray-700 p-2 rounded">Dashboard</li>
                    <li className="hover:bg-gray-700 p-2 rounded">Users</li>
                    <li className="hover:bg-gray-700 p-2 rounded">Settings</li>
                </ul>
            </div>
            <div className="p-4">
                <button>
                    TEST
                </button>
            </div>
        </div>
    );
};

export default SidebarNav;
