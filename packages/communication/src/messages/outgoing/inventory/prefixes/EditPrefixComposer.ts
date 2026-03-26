import { IMessageComposer } from '@nitrots/api';

export class EditPrefixComposer implements IMessageComposer<ConstructorParameters<typeof EditPrefixComposer>>
{
    private _data: ConstructorParameters<typeof EditPrefixComposer>;

    constructor(prefixId: number, text: string, color: string, icon: string, effect: string)
    {
        this._data = [ prefixId, text, color, icon, effect ];
    }

    public getMessageArray()
    {
        return this._data;
    }

    public dispose(): void
    {
        return;
    }
}
