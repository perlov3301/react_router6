import { Form } from "react-router-dom";
import myImg from "./Disraeli_Victoria.jpg";

export default function Contact() {
// C:\Users\perlo\courses\react_router6\src\routes\contact.jsx
// ../../../Downloads/disraeli
    const contact = {
        first: "firstName",
        last: "lastName",
        avatar: myImg,
        twitter: "your_handle",
        notes: "some notes",
        favorite: true,
    } ; 
    
    return (
        <div id="contact" >
            <div>
                <img 
                   key={contact.avatar}
                   src={contact.avatar || null}
                />
            </div>
            <div>
                <h1>
                    {contact.first  || contact.last ? (
                        <>
                          {contact.first} {contact.last}
                        </>
                    ) : (
                        <i>No Name</i>
                    ) } {" "}
                    <Favorite contact={contact} />
                </h1>
                {contact.twitter && (
                    <p>
                        <a
                          target="_blank"
                          href={`https://twitter.com/${contact.twitter}`}
                        >
                            {contact.twitter}
                        </a>
                    </p>
                )}

                {contact.notes && <p>{contact.notes}</p>}
                <div>
                    <Form action="edit">
                        <button type="submit">Edit</button>
                    </Form>
                    <Form
                      method="post"
                      action="destroy"
                      onSubmit={(event) => {
                          if (
                               !confirm("confirm deletting") 
                             ) { event.preventDefault(); }
                        }
                      }
                    >
                        <button type="submit">Delete</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

function Favorite({ contact }) {
    //this `let` is for later
    let favorite = contact.favorite;
    return (
        <Form method="post" >
            <button 
               name="favorite"
               value={favorite ? "false" : "true"}
               aria-label={ 
                favorite ? "Remove from favorites" : "Add to favorites" 
               }
             >
                {favorite ? "★" : "☆"}
            </button>
        </Form>
    );
}