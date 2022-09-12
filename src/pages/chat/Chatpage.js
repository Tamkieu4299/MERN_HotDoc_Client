import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import ChatBox from "../../components/chat/ChatBox";
import MyChats from "../../components/chat/MyChats";
import SideDrawer from "../../components/chat/miscellaneous/SideDrawer";
import { ChatState } from "./ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
