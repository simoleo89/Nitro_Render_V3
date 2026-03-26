import { IMessageDataWrapper, IMessageParser } from '@nitrots/api';

export interface IPrefixRarityData
{
    effectId: string;
    rarity: string;
    minRank: number;
    requiredBadge: string;
    priceCredits: number;
    pricePoints: number;
    pointsType: number;
}

export class PrefixRarityResultParser implements IMessageParser
{
    private _rarities: IPrefixRarityData[];

    public flush(): boolean
    {
        this._rarities = [];
        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._rarities = [];

        let count = wrapper.readInt();

        while(count > 0)
        {
            this._rarities.push({
                effectId: wrapper.readString(),
                rarity: wrapper.readString(),
                minRank: wrapper.readInt(),
                requiredBadge: wrapper.readString(),
                priceCredits: wrapper.readInt(),
                pricePoints: wrapper.readInt(),
                pointsType: wrapper.readInt()
            });

            count--;
        }

        return true;
    }

    public get rarities(): IPrefixRarityData[]
    {
        return this._rarities;
    }
}
