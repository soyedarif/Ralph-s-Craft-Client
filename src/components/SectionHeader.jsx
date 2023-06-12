
const SectionHeader = ({header,description}) => {
    return (
        <div className="text-center m-9">
            <h2 className="text-4xl font-semibold text-red-500">{header}</h2>
            <p className="text-2xl font-medium text-gray-600">{description}</p>
        </div>
    );
};

export default SectionHeader;