import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Homepage = () => {
  const [clientName, setClientName] = useState("");
  const [formValues, setFormValues] = useState([{ task: "" }]);
  const [formValuesin, setFormValuesIn] = useState([{ task: "" }]);
  const [note, setNote] = useState("");
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const copyToClipboard = () => {
    const str = document.getElementById("demo").innerText;
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
    // toast("Data copied successfully");
  };

  const notify = () => toast("Data copied successfully");
  const taskdone = () => toast.success("task added successfully");
  const taskremove = () => toast.error("task deleted successfully");

  const handleOnKeyup = (e, index) => {
    console.log(e);
    if (e.which === 13 || e.keyCode === "Enter") {
      addFormFieldsinprogress();
    }
  };
  const handleOnKeyupComplete = (e, index) => {
    console.log(e);
    if (e.which === 13 || e.keyCode === "Enter") {
      addFormFields();
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
    taskdone();
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
    taskremove();
  };

  let handleChangeinprogress = (i, e) => {
    let newFormValues = [...formValuesin];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValuesIn(newFormValues);
  };

  let addFormFieldsinprogress = () => {
    setFormValuesIn([...formValuesin, { task: "" }]);
    taskdone();
  };

  let removeFormFieldsinprogress = (i) => {
    let newFormValues = [...formValuesin];
    newFormValues.splice(i, 1);
    setFormValuesIn(newFormValues);
    taskremove();
  };
  return (
    <div className="h-screen bg-my_bg_image from-sky-500 to-indigo-500 px-32">
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
      <div className="flex md:justify-around lg:justify-center ">
        <div className="flex flex-col basis-1/2 bg-paper rounded-3xl my-20 mx-20 h-200">
          <form className="form_wrapper px-20 py-20">
            <label className="block">Client Name</label>
            <input
              className="placeholder:italic placeholder:text-slate-400"
              type="text"
              name="client"
              placeholder="Enter your client name"
              required
              onChange={handleclient}
            ></input>

            <label className="block">List of completed task</label>
            {formValues.map((element, index) => (
              <div key={index} className="flex">
                <input
                  className="placeholder:italic placeholder:text-slate-400 basis-3/5"
                  type="text"
                  tabIndex={index}
                  name="task"
                  required
                  placeholder="Enter your task name"
                  value={element.task || ""}
                  onChange={(e) => handleChange(index, e)}
                  onKeyUp={(e) => handleOnKeyupComplete(e)}
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
              <div key={index} className="flex">
                <input
                  className="placeholder:italic placeholder:text-slate-400 basis-3/5"
                  type="text"
                  tabIndex={index}
                  name="task"
                  placeholder="Enter your task name"
                  value={element.task || ""}
                  onChange={(e) => handleChangeinprogress(index, e)}
                  onKeyUp={(e) => handleOnKeyup(e)}
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
        <div className="flex flex-col bg-paper rounded-3xl my-20 mx-20 h-200">
          <img src="../img/pin.png" className="h-15 w-20 m-5"></img>
          <div id="demo" className="flex flex-col basis-1/2 py-10 px-20">
            <div>Hello {clientName}</div>
            <br />
            <label className="block">
              following are the list of updates for {date}:
            </label>
            <div>List Of Completd task:</div>
            <ul>
              {formValues.map((element, index) => (
                <li key={index} className="list-disc mx-10">
                  {element.task}
                </li>
              ))}
            </ul>
            <br />
            <span>{Date}</span>
            <div>List of inprogress task</div>
            <ul>
              {formValuesin.map((element, index) => (
                <li key={index} className="list-disc mx-10">
                  {element.task}
                </li>
              ))}
            </ul>
            <br />
            <div></div>
            <span>{note}</span>
            <br />
            <p>Looking forward to hearing from you</p>
            <p>Thanks and Regards</p>
          </div>

          <button
            id="button1"
            onClick={(copyToClipboard, notify)}
            className="mb-10"
          >
            <img src="../img/files.png" className="h-20 w-20 mx-60"></img>
          </button>
        </div>
      </div>
    </div>
  );
};
