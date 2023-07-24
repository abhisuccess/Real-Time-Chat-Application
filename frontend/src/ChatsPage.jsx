import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    


    return (
    <div style ={{height : '100vh'}}>
        <PrettyChatWindow
        projectId= '16dbd9b4-b3cc-4c72-a7b1-19e66a57fa2c'
        username= {props.user.username}
        secret= {props.user.secret}
        style={{height : '100%'}}
        />
        
    </div>
    )
}
export default ChatsPage