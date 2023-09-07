import { FaceIcon, HeartFilledIcon} from "@radix-ui/react-icons";

const SearchBar = () => {
	return (
		<div className="flex flex-1 max-w-2xl items-center justify-center relative">
			<FaceIcon className="w-4 h-4 text-slate-800 absolute left-4" />
			<input
				className="bg-orange-50 w-full py-3 outline-none rounded-[50px]
        pr-8 pl-10 text-lg border-b-2 transition-all 
        focus:outline-none active:outline-none
       focus:border-b-orange-300 placeholder:text-sm"
				placeholder="今天想來點什麼口味？ ♡" 
			/> 
		</div>
	);
};

export default SearchBar;
