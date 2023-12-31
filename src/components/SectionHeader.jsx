
const SectionHeader = ({header,description}) => {
    return (
        <div className="text-center mb-10 mt-10">
            <h2 className="text-4xl font-semibold text-transparent tracking-tighter bg-clip-text bg-gradient-to-r from-[#DA4453] to-[#89216B]">{header}</h2>
            <p className="text-2xl tracking-tighter font-medium dark:text-gray-300 text-gray-600">{description}</p>
        </div>
    );
};

export default SectionHeader;