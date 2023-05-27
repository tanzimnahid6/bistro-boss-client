

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center md:w-3/12 mx-auto my-4 ">
            <h1 className="text-yellow-600 mb-2">...{subHeading}...</h1>
            <p className="text-3xl uppercase border-y-4 py-4">{heading}</p>
        </div>
    );
};

export default SectionTitle;