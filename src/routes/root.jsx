import { Outlet } from "react-router-dom";
import { Link, useLoaderData } from "react-router-dom";
import { getContacts } from "../contacts";

export async function loader() {
    const contacts = await getContacts();
    return contacts;
}
export default function Root() {
    const { contacts } = useLoaderData();
    return (
        <>
           <div id="sidebar">
             <h1>reactrouter.com : Tutorial</h1>
             <div>
                <form id="search-form" role="search" >
                    <input id="q"
                       aria-label="Search contacts"
                       placeholder="Search"
                       type="search"
                       name="q"
                    /> 
                    <div id="search-spinner"
                       aria-hidden
                       hidden={true}
                    />
                    <div className="sr-only" aria-live="polite">
                    </div>
                </form>
                <form method="post" >
                    <button type="submit">New</button>
                </form>
             </div>
                <nav>
                    <ul> {/* <li><a href={`/contacts/1`} >firstName</a></li> */}
                    
                      <li key={contact.id}>
                        <Link to={`/contacts/1`} > firstName </Link>
                      </li>
                      <li>
                        <Link to={`/contacts/2`} > lastName </Link>
                      </li>
                    </ul>
                </nav>
            </div>
 {/* <div> 'detail' is outside of the main <div> but inside of <> */}
            <div id="detail"> <Outlet />
            </div>
        </>
    );
};