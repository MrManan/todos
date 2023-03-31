import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = () => {
      const data = JSON.parse(localStorage.getItem("mydata"));
      setData(data);
    };
    getData();
  }, []);

  return (
    <>
      <div className="container list-data">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-md-6 ">
            <h2 className="text-primary text-center mb-5">
              TODO LIST USING LOCALSTORAGE
            </h2>
            <div className="shadow p-4 ">
              <Link to="/Create">
                <button type="button" className="btn  btn-primary ">
                  Create
                </button>
              </Link>
              <table className="table text-center table-hover text-primary border  mt-3 ">
                <thead className="bg-primary text-white">
                  <tr>
                    <th>Index</th>
                    <th>Names</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{data.name}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
