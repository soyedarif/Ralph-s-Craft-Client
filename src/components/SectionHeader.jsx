
const SectionHeader = ({header,description}) => {
    return (
        <div className="text-center m-9">
            <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#DA4453] to-[#89216B]">{header}</h2>
            <p className="text-2xl font-medium text-gray-600">{description}</p>
        </div>
    );
};

export default SectionHeader;