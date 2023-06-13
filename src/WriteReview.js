import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./WriteReview.css";
import StarRating from "./StartRating";
import ModalPop from "./ModalPop";
import { db } from "./firebase";
import results from "./results";
import firebase from "./firebase";
import { FaSnapchat } from "react-icons/fa";

const WriteReview = () => {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [companyName, setCompanyName] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [result, setResult] = useState([]);
  const [comment, setComment] = useState("");
  const [todos, setTodos] = useState([]);
  // const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://review-2a168-default-rtdb.firebaseio.com/company.json/")
      .then((response) => response.json())
      .then((resData) => {
        console.log(resData, "res");
        console.log(Object.keys(resData), "data");
        setResult(Object.keys(resData));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   for (const key in result) {
  //     let comp = result[key].name;
  //     setList(comp);
  //     // let company = typeof comp === "string" ? comp.toLowerCase() : "";

  //     // console.log(company, "comp");

  //     // setList(result[key].name);
  //     // console.log(result[key].name, "name");
  //   }
  // }, []);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const postHandler = (e) => {
    handleShow();
    e.preventDefault();

    const Data = {
      companyName: companyName,
      title: title,
      about: about,
    };
    results
      .post(`${companyName}.json`, Data)
      // .set(`${companyName}`)
      .then((response) => {
        console.log(response, "123");
      });
  };

  const submitData = async (event) => {
    handleShow();
    event.preventDefault();
    db.collection(`${companyName}`)
      .doc()
      .set({
        companyName: companyName,
        title: title,
        about: about,
      })
      .then(() => {
        alert("message has been submited");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // const SaveUser = () => {
  //   // handleShow();
  //   console.log(title, about, companyName);
  //   let data = { title, about, companyName };
  //   fetch("https://review-2a168-default-rtdb.firebaseio.com/data", {
  //     method: "Post",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   }).then((result) => {
  //     console.log(result, "ppppp");
  //   });
  // };

  // function submitForm() {
  //   document.contact - form.submit();
  //   document.contact - form.reset();
  // }

  // const onSubmit = (data, e) => {
  //   setTimeout(() => {
  //     e.target.reset();
  //   }, 900000000000000);
  // };
  // console.log(result.name, "result1");
  // console.log(list, "list");

  return (
    // <form
    //   name="contact-form"
    //   target="ninja-frame"
    //   onClick={onSubmit}
    //   action-="/submit"
    // >
    <div className="r_review">
      <div className="div_label">
        <label className="label_review">Choose Company</label>
        <select
          defaultValue="Select Company"
          style={{ marginLeft: "-7px", background: "#e5e3de" }}
          id="companyNames"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        >
          {}
          {/* {result.map((data, keys) => {
            <option keys={keys}>{data}</option>;
          })} */}
          {result.map((data, index) => {
            return <option keys={data.id}>{data}</option>;
          })}
          {/* <option>Companies</option>
          <option>Leamigo</option>
          <option>Lyfcycle</option>
          <option>The Jute Works</option>
          <option>D fourteen Jeans</option>
          <option>Turquoise the store</option>
          <option>Living waters art </option>
          <option>Bling little thing </option>
          <option>The happy place</option>
          <option>The Couture Cushions</option>
          <option>Rad Living</option> */}
        </select>
      </div>
      <div className="div_label" style={{ marginTop: "10px" }}>
        <label className="label_review" style={{ marginTop: "10px" }}>
          Rate Your Recent Experience
        </label>
        <div style={{ marginLeft: "-7px" }}>
          <StarRating />
        </div>
        <div>
          <label className="label_review"> Tell us about your experience</label>
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="input___3owk9"
          ></textarea>
        </div>
        <div style={{ marginTop: "20px" }}>
          <label className="label_review">Give your review a title</label>
        </div>
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="textInput___35QaD"
            placeholder="Write the title of your review here."
            type="text"
          />
        </div>
        <div class="row___2Gvo1">
          <button
            className="button___3ZeMh"
            name="submit-review"
            type="submit"
            data-submit-review-button="true"
            onClick={submitData}
          >
            Submit review
          </button>
          {show ? <ModalPop show={show} onHide={handleClose} /> : null}
        </div>
      </div>
    </div>
    // </form>
  );
};

export default WriteReview;
