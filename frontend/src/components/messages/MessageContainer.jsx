import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import AIImage from '../../assets/AI.png';
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='md:min-w-[450px] flex flex-col w-full'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='bg-slate-500 px-4 py-2 mb-2 flex items-center'>
						<img src={selectedConversation.profilePic} alt={selectedConversation.fullName} className='w-10 h-10 rounded-full mr-2' />
						<span className='label-text'>To:</span>{" "}
						<span className='text-gray-900 font-bold ml-1'>{selectedConversation.fullName}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className='flex flex-col items-center'>
				<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
					<p>Welcome 👋 <span className='typing-container'>{authUser.fullName}</span> ❄</p>
					<p>Select a chat to start messaging</p>
					
				</div>
				<img src={AIImage} alt="AI" className="w-2/3 floating-img md:w-1/4" />
			</div>
		</div>
	);
};
