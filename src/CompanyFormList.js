import React, { useState } from "react";
import { Form, Button, Card, Alert, FloatingLabel } from "react-bootstrap";
import { db } from "./firebase";

function CompanyFormList() {
  const [companyData, setCompanyData] = useState({
    company: "",
    city: "",
    name: "",
    contact: "",
    website: "",
    notes: "",
    images: "",
  });
  let name, value;
  const postCompanyData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setCompanyData({ ...companyData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { company, city, name, contact, website, notes } = companyData;
    db.collection("company")
      .doc(`${company}`)
      .set({
        company: company,
        city: city,
        name: name,
        contact: contact,
        website: website,
        notes: notes,
      })
      .then(() => {
        alert("message has been submited");
      })
      .catch((error) => {
        alert(error.message);
      });
    // const { company, city, name, contact, website, notes } = companyData;

    // if (company && city && name && contact && website && notes) {
    //   const res = fetch(
    //     "https://review-2a168-default-rtdb.firebaseio.com/companyData.json",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         key: "Access-Control-Allow-Origin",
    //       },
    //       body: JSON.stringify({
    //         company,
    //         city,
    //         name,
    //         contact,
    //         website,
    //         notes,
    //       }),
    //     }
    //   );

    //   if (res) {
    //     setCompanyData({
    //       company: "",
    //       city: "",
    //       name: "",
    //       contact: "",
    //       website: "",
    //       notes: "",
    //     });
    //     alert("Data Stored");
    //   } else {
    //     alert("plz fill the data");
    //   }
    // } else {
    //   alert("plz fill the data");
    // }
  };

  return (
    <>
      <Card className="cardwrap">
        <Card.Body className="cardbodywrap">
          <h4 className="text-center mb-4">
            Fill the details to be claim your free profile at BOMWAY
          </h4>
          <Form method="POST">
            <Form.Group className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                name="company"
                value={companyData.company}
                onChange={postCompanyData}
              />
            </Form.Group>
            {/* <Form.Group className="mb-3">
              <Form.Label>Company Type</Form.Label>
              <Form.Control as="select">
                <option>Find an Option</option>
                <option value="1">Manufacturers</option>
                <option value="2">Wholesellers</option>
                <option value="3">Reseller</option>
              </Form.Control>
            </Form.Group> */}
            <Form.Group className="mb-3">
              <Form.Label>City, Country</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={companyData.city}
                onChange={postCompanyData}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={companyData.name}
                onChange={postCompanyData}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                name="contact"
                value={companyData.contact}
                onChange={postCompanyData}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                name="website"
                value={companyData.website}
                onChange={postCompanyData}
              />

              <Form.Group className="mb-3"></Form.Group>
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                name="notes"
                value={companyData.notes}
                onChange={postCompanyData}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={submitData}>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default CompanyFormList;
