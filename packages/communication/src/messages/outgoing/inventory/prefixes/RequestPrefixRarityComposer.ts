import { IMessageComposer } from '@nitrots/api';

export class RequestPrefixRarityComposer implements IMessageComposer<ConstructorParameters<typeof RequestPrefixRarityComposer>>
{
    private _data: ConstructorParameters<typeof RequestPrefixRarityComposer>;

    constructor()
    {
        this._data = [];
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
