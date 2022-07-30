import sha1 from "sha1";
import { IAttribute, IMetaData } from "../interfaces/general";
import { generalMetaData, generalSettings } from "../constants/config";

export function addMetaData(
  dna: string,
  edition: number,
  attributes: IAttribute[],
  addr: string,
): IMetaData {
  const date = Date.now();
  return {
    name: `${generalMetaData.namePrefix} #${edition}`,
    description: generalMetaData.description,
    image: `${generalMetaData.baseUri}/${edition}.png`,
    dna: sha1(dna),
    edition,
    date,
    ...generalSettings.extraMetadata,
    attributes,
    seller_fee_basis_points: 50,
    compiler: "CK NFT Generator",
    properties: {
      creators: [{
        address: addr,
        share: 100,
      }]
    }
  };
}
