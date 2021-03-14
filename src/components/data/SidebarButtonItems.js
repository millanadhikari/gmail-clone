import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import LabelIcon from '@material-ui/icons/Label';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const sidebarButtonItems = [
    {
        icon: <InboxIcon fontSize='small'/>,
        text: 'Inbox'
    },
    {
        icon: <StarIcon fontSize='small'/>,
        text: 'Starred'
    },
    {
        icon: <WatchLaterIcon fontSize='small'/>,
        text: 'Snoozed'
    },
    {
        icon: <SendIcon fontSize='small'/>,
        text: 'Sent'
    },
    {
        icon: <InsertDriveFileIcon fontSize='small'/>,
        text: 'Drafts'
    },
    {
        icon: <LabelIcon fontSize='small'/>,
        text: 'Notes'
    },
    {
        icon: <ExpandMoreIcon fontSize='small'/>,
        text: 'More'
    }
]