const InventoryItem = ({ label, subLabel, quantity }) => (
    <div className="bg-gray-100 p-2 rounded-md">
      <h5 className="font-semibold">{label}</h5>
      {subLabel && <h6 className="text-sm text-gray-600">{subLabel}</h6>}
      <div className="flex justify-between items-center mt-2">
        <span className="bg-white border border-gray-300 rounded px-2">
          {quantity}
        </span>
      </div>
    </div>
  );
  export default InventoryItem