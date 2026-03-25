import { IMessageDataWrapper, IMessageParser } from '@nitrots/api';

export class UiSettingsDataMessageParser implements IMessageParser
{
    private _settingsJson: string;

    public flush(): boolean
    {
        this._settingsJson = '{}';

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._settingsJson = wrapper.readString();

        return true;
    }

    public get settingsJson(): string
    {
        return this._settingsJson;
    }
}
