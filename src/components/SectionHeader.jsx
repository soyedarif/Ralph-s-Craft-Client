
const SectionHeader = ({header,description}) => {
    return (
        <div className="text-center m-9">
            <h2 className="text-4xl font-semibold text-transparent tracking-tighter bg-clip-text bg-gradient-to-r from-[#DA4453] to-[#89216B]">{header}</h2>
            <p className="text-2xl tracking-tighter font-medium text-gray-600">{description}</p>
        </div>
    );
};

export default SectionHeader;