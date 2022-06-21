import React, { useEffect, useState } from "react";
import img from "../public/img/logo.jpg";
import form from "../public/img/form.png";

export const Homepage = () => {
  const [clientName, setClientName] = useState("");
  const [formValues, setFormValues] = useState([{ task: " " }]);
  const [formValuesin, setFormValuesIn] = useState([{ task: " " }]);
  const [note, setNote] = useState("");
  const copyToClipboard = (str) => {
    const str = document.getElementById("demo").innerText;
    console.log(str);
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false;
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  };
  const handleclient = (e) => {
    setClientName(e.target.value);
  };
  const handlenote = (e) => {
    setNote(e.target.value);
  };

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { task: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleChangeinprogress = (i, e) => {
    let newFormValues = [...formValuesin];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValuesIn(newFormValues);
  };

  let addFormFieldsinprogress = () => {
    setFormValuesIn([...formValuesin, { task: "" }]);
  };

  let removeFormFieldsinprogress = (i) => {
    let newFormValues = [...formValuesin];
    newFormValues.splice(i, 1);
    setFormValuesIn(newFormValues);
  };
  console.log(formValues);
  return (
    <div className="h-screen bg-gradient-to-r from-sky-500 to-indigo-500 px-32">
      <div className="flex justify-around">
        <div className="flex justify-around bg-slate-500 hover:bg-slate-600 hover:text-white rounded-xl items-center mt-3">
          <label className="my-5 w-24 ml-3">Form Data</label>
          <img src="../img/form.png" className="h-20 w-20 mr-3"></img>
        </div>
        <div className="flex justify-around bg-slate-500 hover:bg-slate-600 hover:text-white rounded-xl items-center mt-3">
          <label className="my-5 w-24 ml-3">Display Data</label>
          <img src="../img/display.png" className="h-20 w-20 mr-3"></img>
        </div>
      </div>
      <div className="flex shadow-lg shadow-red-500/50 sha">
        <div className="flex flex-col basis-1/2 ">
          <form className="form_wrapper px-20 py-20">
            <label className="block">Client Name</label>
            <input
              className="placeholder:italic placeholder:text-slate-400"
              type="text"
              name="client"
              placeholder="Enter your client name"
              onChange={handleclient}
            ></input>
            <label className="block">List of completed task</label>
            {formValues.map((element, index) => (
              <div className="flex">
                <input
                  className="placeholder:italic placeholder:text-slate-400 basis-3/5"
                  type="text"
                  name="task"
                  placeholder="Enter your task name"
                  value={element.task || ""}
                  onChange={(e) => handleChange(index, e)}
                ></input>

                <button
                  type="button"
                  className="rounded-3xl text-center text-white bg-red-400 mx-2 h-10 basis-1/5"
                  onClick={() => removeFormFields(index)}
                >
                  - delete task
                </button>
              </div>
            ))}
            <button
              type="button"
              className="rounded-3xl text-center text-white bg-red-400 mx-3 h-10 w-60 mx-20 basis-1/5"
              onClick={() => addFormFields()}
            >
              + Add task
            </button>
            <label className="block">list of inprogress task</label>
            {formValuesin.map((element, index) => (
              <div className="flex">
                <input
                  className="placeholder:italic placeholder:text-slate-400 basis-3/5"
                  type="text"
                  name="task"
                  placeholder="Enter your task name"
                  value={element.task || ""}
                  onChange={(e) => handleChangeinprogress(index, e)}
                ></input>

                <button
                  type="button"
                  className="rounded-3xl text-center text-white bg-red-400 mx-3 h-10 basis-1/5"
                  onClick={() => removeFormFieldsinprogress(index)}
                >
                  - delete task
                </button>
              </div>
            ))}
            <button
              type="button"
              className="rounded-3xl text-center text-white bg-red-400 mx-3 h-10 w-60 mx-20 basis-1/5"
              onClick={() => addFormFieldsinprogress()}
            >
              + Add task
            </button>
            <label className="block">notes</label>
            <input
              className="placeholder:italic placeholder:text-slate-400"
              type="text"
              name="note"
              placeholder="Enter your notes here"
              onChange={handlenote}
            ></input>
          </form>
        </div>
        <div id="demo" className="flex flex-col basis-1/2 py-20 px-20">
          <div>Hello {clientName}</div>
          <br />
          <div>List Of Completd task:</div>
          <ul>
            {formValues.map((element, index) => (
              <li>{element.task}</li>
            ))}
          </ul>
          <br />
          <span>{Date}</span>
          <div>List of inprogress task</div>
          <ul>
            {formValuesin.map((element, index) => (
              <li>{element.task}</li>
            ))}
          </ul>
          <br />
          <div></div>
          <span>{note}</span>
          <br />
          <p>Looking forward to hearing from you</p>
          <p>Thanks and Regards</p>
        </div>

        <button id="button1" onClick={() => copyToClipboard("")}>
          Click to copy
        </button>
      </div>
    </div>
  );
};
