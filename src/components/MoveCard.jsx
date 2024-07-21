import React, { useState } from "react";
import moment from "moment";
import MoveDetails from "./MoveDetails";

const MoveCard = ({ myMoves }) => {
  const [selectedMoveId, setSelectedMoveId] = useState(null);

  const toggleMoveDetails = (id) => {
    setSelectedMoveId(selectedMoveId === id ? null : id);
  };
  return (
    <div className="w-full mx-auto">
      <div className="dashboard-container mb-3">
        <h3 className="text-lg font-bold">My Moves</h3>
        <div className="alert-container"></div>
      </div>
      {myMoves &&
        myMoves.length > 0 &&
        myMoves.map((moveItem, index) => {
          const {
            moving_from,
            moving_to,
            estimate_id,
            property_size,
            distance,
            order_date,
            packing_service,
            old_floor_no,
            new_floor_no,
            old_elevator_availability,
            new_elevator_availability,
            old_parking_distance,
            new_parking_distance
          } = moveItem;

          const formattedDate = moment(order_date).format(
            "MMM Do YYYY [at] h:mm a"
          );
          return (
            <div key={index} className="bg-white p-4 shadow-md rounded-md mb-4">
              <div className="flex bg-gray-50 p-4 rounded-md shadow-sm">
                <div className="mb-2 flex flex-wrap">
                  <div className="w-full lg:w-5/12 mb-2 lg:mb-0">
                    <h6 className="font-bold">From</h6>
                    <p className="move-address">{moving_from}</p>
                  </div>
                  <div className="w-full md:w-2/12 flex justify-center items-center">
                    <img
                      src="https://boxigo.in//includes/img/customerDashboard/move_arrow.png"
                      className="w-6 h-6"
                      alt="Arrow"
                    />
                  </div>
                  <div className="w-full lg:w-5/12">
                    <h6 className="font-bold">To</h6>
                    <p className="move-address">{moving_to}</p>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-2/12">
                    <h6 className="font-bold">Request#</h6>
                    <button className="bg-blue-500 text-white py-1 px-3 rounded-md">
                      <b>{estimate_id}</b>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap mt-4">
                <div className="w-full lg:w-4/12 p-2">
                  <div className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-sm">
                    <span className="flex items-center">
                      <img
                        src="https://boxigo.in//includes/img/customerDashboard/property_size.png"
                        className="w-4 h-4 mr-2"
                        alt="Property Size"
                      />
                      <span>{property_size}</span>
                    </span>

                    <span className="flex items-center">
                      <img
                        src="https://boxigo.in//includes/img/customerDashboard/total_items.png"
                        className="w-4 h-4 mr-2"
                        alt="Total Items"
                      />
                      <span>0</span>
                    </span>
                    <span className="flex items-center">
                      <img
                        src="https://boxigo.in//includes/img/customerDashboard/distance.png"
                        className="w-4 h-4 mr-2"
                        alt="Distance"
                      />
                      <span>{distance}</span>
                    </span>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 p-2">
                  <div className="bg-gray-100 p-2 rounded-md shadow-sm">
                    <div className="gap-2 flex items-center">
                      <img
                        src="https://boxigo.in/includes/img/customerDashboard/move_date.png"
                        className="w-4 h-4 mr-2"
                        alt="Move Date"
                      />
                      <span>{formattedDate}</span>
                      <img
                        src="https://boxigo.in/includes/img/customerDashboard/pencil_edit.png"
                        className="w-4 h-4 ml-2"
                        alt="Edit"
                      />
                      <div className="gap-2 flex items-center mt-2">
                        <input type="checkbox" className="mr-2" defaultChecked />
                        <span>Is flexible</span>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="w-full lg:w-4/12 p-4">
                  <div className="flex">
                    <button
                      className="bg-gray-200 text-white-700 py-1 px-3 rounded-md w-full"
                      onClick={() => toggleMoveDetails(estimate_id)}
                    >
                      View Move Details
                    </button>
                    <button className="bg-blue-500 text-white py-1 px-3 rounded-md w-full ml-2">
                      Quotes Awaiting
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="disclaimer text-gray-700 flex items-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="exclamation-triangle"
                    className="triangle w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    
                  >
                    <path
                      fill="currentColor"
                      d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
                    ></path>
                  </svg>
                  <strong>Disclaimer: </strong> Please update your move date
                  before two days of shifting
                </div>
              </div>
              <hr className="mt-4" />

              {selectedMoveId === estimate_id && <MoveDetails moveItem={moveItem} />}
            </div>
          );
        })}
    </div>
  );
};

export default MoveCard;
