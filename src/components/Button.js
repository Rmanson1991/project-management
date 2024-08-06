export default function Button({children, ...props}){
    return (
        <button
            className="px-4 py-2 text-xs md:text-base rounded-md bg-gray-300 text-stone-900 font-semibold hover:bg-stone-400 hover:text-stone-100"
            {...props}>
            {children}
        </button>
    );
}