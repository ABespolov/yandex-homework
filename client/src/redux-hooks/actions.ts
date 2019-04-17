import {MAILERS, MESSAGE, MESSAGE_BODY, MESSAGES} from "../api/constants";
import {uniFetchApi} from "./../api/api";

export const getMessageBody = (id: string, dispatch: any) => {
    uniFetchApi(MESSAGE_BODY, {messageId: id})
        .then((data) => {
            const result = data.result;
            dispatch({type: "messageBody", messagesBody: result, id});
        });
};

export const getMessageInfo = (id: string, dispatch: any) => {
    uniFetchApi(MESSAGE, {messageId: id, withSiblings: true})
        .then((data) => {
            const result = data.result;
            dispatch({type: "messageInfo", messagesInfo: result, id});
        });
};

export const getMessagesList = (dispatch: any) => {
    uniFetchApi(MESSAGES, {folderId: "1", offset: 0, limit: 100})
        .then((data) => {
            const result = data.result;
            dispatch({type: "messagesList", messagesList: result});
        });
};

export const getMailers = (emailsList: [], dispatch: any) => {
    uniFetchApi(MAILERS, {emails: emailsList}).then((data) => {
        const monogramsObject = data.result.emailsInfo.reduce(
            (acc: any, item: any) => {
                acc[item[0].email] = item[0];
                return acc;
            },
            {},
        );
        dispatch({type: "mailersList", mailersList: monogramsObject});
    });
};
