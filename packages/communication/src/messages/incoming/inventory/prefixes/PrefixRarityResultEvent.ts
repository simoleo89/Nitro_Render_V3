import { IMessageEvent } from '@nitrots/api';
import { MessageEvent } from '@nitrots/events';
import { PrefixRarityResultParser } from '../../../parser';

export class PrefixRarityResultEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, PrefixRarityResultParser);
    }

    public getParser(): PrefixRarityResultParser
    {
        return this.parser as PrefixRarityResultParser;
    }
}
