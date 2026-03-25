import { IMessageEvent } from '@nitrots/api';
import { MessageEvent } from '@nitrots/events';
import { UiSettingsDataMessageParser } from '../../parser';

export class UiSettingsDataEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, UiSettingsDataMessageParser);
    }

    public getParser(): UiSettingsDataMessageParser
    {
        return this.parser as UiSettingsDataMessageParser;
    }
}
