import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
      '75966fe7-b89b-4b9b-88ed-de16da3ee92c', 
      props.user.username, 
      props.user.secret
    );
    return (
      <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
      </div>
    )
  }
  export default ChatsPage