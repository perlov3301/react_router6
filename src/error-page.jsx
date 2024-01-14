import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error=useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1 style={{textAlign:"center"}}>Sorry, something unexpected has occured.</h1>
            <p><span style={{textDecoration:"underline"}}>Cause:</span></p>
            <p>
               <i>"{error.statusText || error.message}" <span style={{fontWeight:"700"}}>error</span>  </i>
            </p>
        </div>
    );
}