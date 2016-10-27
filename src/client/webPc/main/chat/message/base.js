import React from 'react';
import moment from 'moment';

import Avatar from '../../../../common/avatar';
import ui from '../../../../action/pc';
import mask from '../../../../util/mask';


function handleAvatarClick(message) {
    ui.openUserInfo(message.getIn(['from', '_id']));
    mask(ui.closeUserInfo);
}

/**
 * payload: 负载的消息
 * message: 消息数据, immutable类型
 * me: 自己id
 * handleAvatarClick: 头像点击事件
 */
const baseMessage = function (payload, message, me) {
    return (
        <div className={`native-message ${message.getIn(['from', '_id']) === me ? 'message-self' : ''}`}>
            <Avatar
                avatar={message.getIn(['from', 'avatar']) || ''}
                name={message.getIn(['from', 'username']) || ''}
                width={40}
                height={40}
                onClick={() => handleAvatarClick(message)}
            />
            <div>
                <div>
                    <span className="message-username">{ message.getIn(['from', 'username']) }</span>
                    <span>{ moment(message.get('createTime')).format('HH:mm') }</span>
                </div>
                { payload }
            </div>
        </div>
    );
};

export default baseMessage;
