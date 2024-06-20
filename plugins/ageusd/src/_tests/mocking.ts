import { mockUTxO } from "@fleet-sdk/mock-chain";
import { SLong } from "@fleet-sdk/serializer";
import type { AgeUSDBankBox, OracleBox } from "../ageUsdBank";

export function mockOracleBox(rate: bigint): OracleBox {
  return mockUTxO({
    value: 5475000000n,
    creationHeight: 459527,
    ergoTree:
      "1014040004000e208c27dd9d8a35aac1e3167d58858c0a8b4059b277da790552e37eba22df9b903504000400040204020101040205a0c21e040204080500040c040204a0c21e0402050a05c8010402d806d601b2a5730000d602b5db6501fed9010263ed93e4c67202050ec5a7938cb2db63087202730100017302d603b17202d604e4c6b272027303000605d605d90105049590720573047204e4c6b272029972057305000605d606b07202860273067307d901063c400163d803d6088c720601d6098c720801d60a8c72060286029a72097308ededed8c72080293c2b2a5720900d0cde4c6720a040792c1b2a5720900730992da720501997209730ae4c6720a0605ea02d1ededededededed93cbc27201e4c6a7060e927203730b93db63087201db6308a793e4c6720104059db07202730cd9010741639a8c720701e4c68c72070206057e72030593e4c6720105049ae4c6a70504730d92c1720199c1a77e9c9a7203730e730f058c72060292da720501998c72060173109972049d9c720473117312b2ad7202d9010763cde4c672070407e4c6b2a5731300040400",
    assets: [
      {
        tokenId:
          "011d3364de07e5a26f0c4eef0852cddb387039a921b7154ef3cab22c6eda887f",
        amount: 1n
      }
    ],
    additionalRegisters: {
      R4: SLong(rate).toHex()
    }
  }) as OracleBox;
}

export function mockBankBox(
  args: {
    reserveNanoergs: bigint;
    circulatingStableCoin: bigint;
    circulatingReserveCoin: bigint;
  },
  maxSupply = 10000000000001n
): AgeUSDBankBox {
  return mockUTxO({
    value: args.reserveNanoergs,
    creationHeight: 459530,
    ergoTree:
      "102a0400040004000e20011d3364de07e5a26f0c4eef0852cddb387039a921b7154ef3cab22c6eda887f0400040204020400040004020500050005c8010500050005feffffffffffffffff0105000580897a05000580897a040405c80104c0933805c00c0580a8d6b907050005c8010580dac40905000500040404040500050005a0060101050005a0060100040004000e20239c170b7e82f94e6b05416f14b8a2a57e0bfff0e3c93f4abbcd160b6a5b271ad801d601db6501fed1ec9591b172017300d821d602b27201730100d603938cb2db63087202730200017303d604b2a5730400d605c17204d606db6308a7d607b27206730500d6088c720702d609db63087204d60ab27209730600d60b8c720a02d60c947208720bd60db27206730700d60e8c720d02d60fb27209730800d6108c720f02d61194720e7210d612e4c6a70505d613e4c672040505d614e4c6a70405d615e4c672040405d616b2a5730900d617e4c672160405d61895720c730a7217d61995720c7217730bd61ac1a7d61be4c672160505d61c9de4c672020405730cd61da2a1721a9c7214721c730dd61e9572119ca1721c95937214730e730f9d721d72147218d801d61e99721a721d9c9593721e7310731195937212731273139d721e72127219d61f9d9c721e7e7314057315d6209c7215721cd6219591a3731673177318d62295937220731972219d9c7205731a7220edededed7203ededededed927205731b93c27204c2a7edec720c7211efed720c7211ed939a720872129a720b7213939a720e72149a72107215edededed939a721472187215939a721272197213939a721a721b7205927215731c927213731deded938c720f018c720d01938c720a018c720701938cb27209731e00018cb27206731f000193721b9a721e958f721f7320f0721f721f957211959172187321927222732273239591721973249072227221927222732572037326938cb2db6308b2a4732700732800017329",
    assets: [
      {
        // "SigUSD",
        tokenId:
          "03faf2cb329f2e90d6d23b58d91bbb6c046aa143261cc21f52fbe2824bfcbf04",
        amount: maxSupply - args.circulatingStableCoin
      },
      {
        // "SigRSV",
        tokenId:
          "003bd19d0187117f130b62e1bcab0939929ff5c7709f843c5c4dd158949285d0",
        amount: maxSupply - args.circulatingReserveCoin
      },
      {
        // "SUSD Bank V2 NFT",
        tokenId:
          "7d672d1def471720ca5782fd6473e47e796d9ac0c138d9911346f118b2f6d9d9",
        amount: 1n
      }
    ],
    additionalRegisters: {
      R4: SLong(args.circulatingStableCoin).toHex(),
      R5: SLong(args.circulatingReserveCoin).toHex()
    }
  }) as AgeUSDBankBox;
}
