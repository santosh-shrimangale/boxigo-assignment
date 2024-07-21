import React, { useState } from "react";
import DetailItem from "./DetailItem";
import InventoryCategory from "./InventoryCategory";
import InventoryItem from "./InventoryItem";
const MoveDetails = ({ moveItem }) => {
  const {
    old_floor_no,
    new_floor_no,
    old_elevator_availability,
    new_elevator_availability,
    old_parking_distance,
    new_parking_distance,
    packing_service
  } = moveItem;
  return (
    <div className="w-full space-y-4">


      {/* Inventory Details Section */}
      <section className="bg-white p-4 shadow-md rounded-md">
        <header className="flex items-center gap-10 mb-2">
          <h3 className="text-lg font-semibold">Inventory Details</h3>
          <div className="bg-black text-white text-sm py-1 px-2 rounded hover:bg-gray-700">Edit Inventory</div>
        </header>

        {/* Inventory Category */}
        <div>
          <InventoryCategory title="Furniture" itemCount={9}>
            <InventoryItem
              label="Sectional Sofa"
              subLabel="2 Piece"
              quantity={2}
            />
            <InventoryItem label="Sofa Footrest" quantity={1} />
            <InventoryItem label="Ottoman" quantity={1} />
            <InventoryItem label="Bean Bags" subLabel="Medium" quantity={1} />
          </InventoryCategory>
          <InventoryCategory title="Chair" itemCount={4}>
            <InventoryItem label="Plastic" quantity={1} />
            <InventoryItem label="Executive" quantity={1} />
            <InventoryItem label="Stool" quantity={1} />
            <InventoryItem label="Foldable" quantity={1} />
          </InventoryCategory>
        </div>
      </section>

      {/* House Details Section */}
      <section className="bg-white p-4 shadow-md rounded-md">
        <header className="flex items-center gap-10 my-5">
          <h3 className="text-lg font-semibold">House Details</h3>
          <div className="bg-black text-white text-sm py-1 px-2 rounded hover:bg-gray-700" type="button">
            Edit House Details
          </div>
        </header>

        <div className="space-y-3">
          {/* Existing House Details */}
          <div>
            <h6 className="heading-title font-bold text-gray-700">
              Existing House Details
            </h6>
            <div className="flex justify-between my-5">
              <DetailItem label="Floor No." value={old_floor_no} />
              <DetailItem label="Elevator Available" value={old_elevator_availability} />
              <DetailItem label="Packing Service" value={packing_service} />
              <DetailItem
                label="Distance from Door to Truck"
                value={old_parking_distance}
                className="md:col-span-2"
              />
            </div>
          </div>

          {/* New House Details */}
          <div>
            <h6 className="heading-title font-bold text-gray-700">New House Details</h6>
            <div className="flex justify-between my-5">
              <DetailItem label="Floor No." value={new_floor_no} />
              <DetailItem label="Elevator Available" value={new_elevator_availability} />
              <DetailItem label="Packing Service" value={packing_service} />
              <DetailItem
                label="Distance from Door to Truck"
                value={new_parking_distance}
                className="md:col-span-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="bg-white p-4 shadow-md rounded-md">
        <header className="flex items-center gap-10 mb-2">
          <h3 className="text-lg font-bold">Additional Information</h3>
          <div className="bg-black text-white text-sm py-1 px-2 rounded hover:bg-gray-700" type="button">
            Edit Additional Info
          </div>
        </header>
        <p className="text-gray-600">No Additional Information provided.</p>
      </section>
    </div>
  );
};

export default MoveDetails;
