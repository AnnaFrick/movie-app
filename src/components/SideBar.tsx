// A side bar stretched along the left side of the layout for the app including links to Home and Discover
// Add icons to the links

import React from 'react';

const SideBar: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center">
                <a href="/">
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Home
                    </h2>
                </a>
                <a href="./discover">
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Discover
                    </h2>
                </a>
            </div>
    );
};

export default SideBar;