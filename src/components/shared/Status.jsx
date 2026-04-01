


const Status = ({ text, icon: Icon, bg, color }) => {
    return (
        <div className={`${bg} ${color} px-4 py-2 rounded flex items-center justify-center`}>
            {text} <Icon size={20} className="ml-1" />
        </div>
    )
};

export default Status;