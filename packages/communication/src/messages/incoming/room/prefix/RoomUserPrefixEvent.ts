import { IMessageEvent } from '@nitrots/api';
import { MessageEvent } from '@nitrots/events';
import { RoomUserPrefixParser } from '../../../parser';

export class RoomUserPrefixEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, RoomUserPrefixParser);
    }

    public getParser(): RoomUserPrefixParser
    {
        return this.parser as RoomUserPrefixParser;
    }
}
