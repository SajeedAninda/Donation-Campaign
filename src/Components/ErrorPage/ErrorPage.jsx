import React from 'react';
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
    let error = useRouteError();
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center  space-y-4">
                <h1 className="text-6xl font-bold text-[#0b0b0bb3]">404</h1>
                <p className="text-2xl font-bold text-[#0B0B0B]">Oops! Page not found</p>
                <p className="text-gray-600">
                    The page that you are looking for might not exist or removed. Please try later.
                </p>
                <p>
                    <i className='font-bold text-[#0b0b0bb3]'>Error Message: {error.statusText || error.message}</i>
                </p>
                <div>
                    <Link to={"/"}>
                        <button className="py-[13px] px-4 text-white font-bold bg-[#FF444A] rounded-lg">
                            Go Back to Homepage
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;