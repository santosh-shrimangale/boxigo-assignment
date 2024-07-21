// DetailItem Component
const DetailItem = ({ label, value, className }) => (
    <div className={`space-y-1 ${className}`}>
      <h6 className="font-semibold text-gray-700">{label}</h6>
      <div className="text-gray-600">{value}</div>
    </div>
  );
  export default DetailItem