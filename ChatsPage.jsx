import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
    <div style={{ height: '100vh' }}>
       <PrettyChatWindow
        projectId={'f25585d4-039c-4535-bcf5-17ba7d7a72ca'}
        username={props.user.username} 
        secret={props.user.secret} // pass1234
        style={{ height: '100%' }}
        />
        </div>
        
 );
};
export default ChatsPage


