import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className=" justify-center items-center mt-10">

            <img className="h-64 w-64 lg:ms-[550px]" src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1429&q=80" alt="" />

            <button className="btn btn-warning lg:ms-[550px]"><Link to='/'>Back to home</Link></button>
        </div>
    );
}