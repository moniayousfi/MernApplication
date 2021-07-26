import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "./Contact";
import { getContacts } from "../js/actions/contacts";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const ContactList = () => {
  // import func getContacts from action contacts
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, []);

  const contacts = useSelector((state) => state.contactReducer.contacts);
  //console.log(contacts)
  const loading = useSelector((state) => state.contactReducer.loading);
  return (
    <div style={{display:"flex",justifyContent:'space-around',flexWrap:'wrap'}}>
      {loading ? (
        <Segment>
          <Dimmer active inverted>
            <Loader size="large">Loading</Loader>
          </Dimmer>
        </Segment>
      ) : (
        contacts.map((el) => <Contact el={el} key={el._id} />)
      )}
    </div>
  );
};

export default ContactList;
