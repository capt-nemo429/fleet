import { UnsignedTransaction } from "@fleet-sdk/common";

export const unsignedTransactionVectors: {
  name: string;
  hash: string;
  hex: string;
  json: UnsignedTransaction;
}[] = [
  {
    name: "with data inputs",
    hash: "81a5a1cf6aed3391a2c68cd55ae1b1c95f942a130ce2bb5633a889921e94abf4",
    hex: "04a276f80c28324e2cf14de46e2d012d3d4c0db78ce05d6b38707f618fb92b561200009260b0eaec3df776bbb2bc2fb2a1b2c70273de9c08f36fb299f8ddfd10a4a4e800007bc4018b0afffe274a8f7e51d4dc1c80150c60105fb07233ae73f99ecd48f4e40000b6bb03003029e25d398b0bb3f36433adfe7bf0bdc0ebb3284280ab2b547edb2a00000158fd1b60c3564254e3fba785d9d50e845d36d568d61d1505bc6f276d31ce1dcc0903faf2cb329f2e90d6d23b58d91bbb6c046aa143261cc21f52fbe2824bfcbf04003bd19d0187117f130b62e1bcab0939929ff5c7709f843c5c4dd158949285d07d672d1def471720ca5782fd6473e47e796d9ac0c138d9911346f118b2f6d9d9869a0f0d24550f497f07d770cd5885a802dd34369166b10c1db49632474e6c70abaf9df62c6810b0198333b122d130c29d76d64c6d7f4d57108afc5aaa95efb5472c3d4ecaa08fb7392ff041ee2e6af75f4a558810a74b28600549d5392810e80779ec04f2fae64e87418a1ad917639d4668f78484f45df962b0dec14a2591d20cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324bd71693c49a84fbbecd4908c94813b46514b18b67a99952dc1e6e4791556de41305f9d7c7c1e1b1ac02102a0400040004000e20011d3364de07e5a26f0c4eef0852cddb387039a921b7154ef3cab22c6eda887f0400040204020400040004020500050005c8010500050005feffffffffffffffff0105000580897a05000580897a040405c80104c0933805c00c0580a8d6b907050005c8010580dac40905000500040404040500050005a0060101050005a0060100040004000e20239c170b7e82f94e6b05416f14b8a2a57e0bfff0e3c93f4abbcd160b6a5b271ad801d601db6501fed1ec9591b172017300d821d602b27201730100d603938cb2db63087202730200017303d604b2a5730400d605c17204d606db6308a7d607b27206730500d6088c720702d609db63087204d60ab27209730600d60b8c720a02d60c947208720bd60db27206730700d60e8c720d02d60fb27209730800d6108c720f02d61194720e7210d612e4c6a70505d613e4c672040505d614e4c6a70405d615e4c672040405d616b2a5730900d617e4c672160405d61895720c730a7217d61995720c7217730bd61ac1a7d61be4c672160505d61c9de4c672020405730cd61da2a1721a9c7214721c730dd61e9572119ca1721c95937214730e730f9d721d72147218d801d61e99721a721d9c9593721e7310731195937212731273139d721e72127219d61f9d9c721e7e7314057315d6209c7215721cd6219591a3731673177318d62295937220731972219d9c7205731a7220edededed7203ededededed927205731b93c27204c2a7edec720c7211efed720c7211ed939a720872129a720b7213939a720e72149a72107215edededed939a721472187215939a721272197213939a721a721b7205927215731c927213731deded938c720f018c720d01938c720a018c720701938cb27209731e00018cb27206731f000193721b9a721e958f721f7320f0721f721f957211959172187321927222732273239591721973249072227221927222732572037326938cb2db6308b2a4732700732800017329d5bf390300a981f2d684a30201d8b1dcb1fda20202010205b0fdb03905d29cdc830fc0843d0008cd0348e16be5a28374456769eb474fa637f3733e6a5e55dc4f047528ab470b39c77bd5bf3901018840020590800105a8d49eef1d80dac4090008cd02d49458ef115476eda3d109d1aa9e6a9b7fb6624e595ec45da16f91d093f34516d5bf390000c096b1021005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304d5bf390000bd97ee270008cd0348e16be5a28374456769eb474fa637f3733e6a5e55dc4f047528ab470b39c77bd5bf39070380f985d40404a7aad2c42f0586979f0d06d00f01c9e8e501078a01089f3600",
    json: {
      inputs: [
        {
          boxId:
            "a276f80c28324e2cf14de46e2d012d3d4c0db78ce05d6b38707f618fb92b5612",
          extension: {}
        },
        {
          boxId:
            "9260b0eaec3df776bbb2bc2fb2a1b2c70273de9c08f36fb299f8ddfd10a4a4e8",
          extension: {}
        },
        {
          boxId:
            "7bc4018b0afffe274a8f7e51d4dc1c80150c60105fb07233ae73f99ecd48f4e4",
          extension: {}
        },
        {
          boxId:
            "b6bb03003029e25d398b0bb3f36433adfe7bf0bdc0ebb3284280ab2b547edb2a",
          extension: {}
        }
      ],
      dataInputs: [
        {
          boxId:
            "58fd1b60c3564254e3fba785d9d50e845d36d568d61d1505bc6f276d31ce1dcc"
        }
      ],
      outputs: [
        {
          value: 1321123756239865n,
          creationHeight: 942037,
          ergoTree:
            "102a0400040004000e20011d3364de07e5a26f0c4eef0852cddb387039a921b7154ef3cab22c6eda887f0400040204020400040004020500050005c8010500050005feffffffffffffffff0105000580897a05000580897a040405c80104c0933805c00c0580a8d6b907050005c8010580dac40905000500040404040500050005a0060101050005a0060100040004000e20239c170b7e82f94e6b05416f14b8a2a57e0bfff0e3c93f4abbcd160b6a5b271ad801d601db6501fed1ec9591b172017300d821d602b27201730100d603938cb2db63087202730200017303d604b2a5730400d605c17204d606db6308a7d607b27206730500d6088c720702d609db63087204d60ab27209730600d60b8c720a02d60c947208720bd60db27206730700d60e8c720d02d60fb27209730800d6108c720f02d61194720e7210d612e4c6a70505d613e4c672040505d614e4c6a70405d615e4c672040405d616b2a5730900d617e4c672160405d61895720c730a7217d61995720c7217730bd61ac1a7d61be4c672160505d61c9de4c672020405730cd61da2a1721a9c7214721c730dd61e9572119ca1721c95937214730e730f9d721d72147218d801d61e99721a721d9c9593721e7310731195937212731273139d721e72127219d61f9d9c721e7e7314057315d6209c7215721cd6219591a3731673177318d62295937220731972219d9c7205731a7220edededed7203ededededed927205731b93c27204c2a7edec720c7211efed720c7211ed939a720872129a720b7213939a720e72149a72107215edededed939a721472187215939a721272197213939a721a721b7205927215731c927213731deded938c720f018c720d01938c720a018c720701938cb27209731e00018cb27206731f000193721b9a721e958f721f7320f0721f721f957211959172187321927222732273239591721973249072227221927222732572037326938cb2db6308b2a4732700732800017329",
          additionalRegisters: {
            R4: "05b0fdb039",
            R5: "05d29cdc830f"
          },
          assets: [
            {
              tokenId:
                "03faf2cb329f2e90d6d23b58d91bbb6c046aa143261cc21f52fbe2824bfcbf04",
              amount: 9999939829929n
            },
            {
              tokenId:
                "003bd19d0187117f130b62e1bcab0939929ff5c7709f843c5c4dd158949285d0",
              amount: 9997982832856n
            },
            {
              tokenId:
                "7d672d1def471720ca5782fd6473e47e796d9ac0c138d9911346f118b2f6d9d9",
              amount: 1n
            }
          ]
        },
        {
          value: 1000000n,
          creationHeight: 942037,
          ergoTree:
            "0008cd0348e16be5a28374456769eb474fa637f3733e6a5e55dc4f047528ab470b39c77b",
          additionalRegisters: {
            R4: "05908001",
            R5: "05a8d49eef1d"
          },
          assets: [
            {
              tokenId:
                "003bd19d0187117f130b62e1bcab0939929ff5c7709f843c5c4dd158949285d0",
              amount: 8200n
            }
          ]
        },
        {
          value: 20000000n,
          creationHeight: 942037,
          ergoTree:
            "0008cd02d49458ef115476eda3d109d1aa9e6a9b7fb6624e595ec45da16f91d093f34516",
          additionalRegisters: {},
          assets: []
        },
        {
          value: 5000000n,
          creationHeight: 942037,
          ergoTree:
            "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
          additionalRegisters: {},
          assets: []
        },
        {
          value: 83594173n,
          creationHeight: 942037,
          ergoTree:
            "0008cd0348e16be5a28374456769eb474fa637f3733e6a5e55dc4f047528ab470b39c77b",
          additionalRegisters: {},
          assets: [
            {
              tokenId:
                "869a0f0d24550f497f07d770cd5885a802dd34369166b10c1db49632474e6c70",
              amount: 1250000000n
            },
            {
              tokenId:
                "abaf9df62c6810b0198333b122d130c29d76d64c6d7f4d57108afc5aaa95efb5",
              amount: 12760421671n
            },
            {
              tokenId:
                "472c3d4ecaa08fb7392ff041ee2e6af75f4a558810a74b28600549d5392810e8",
              amount: 27773830n
            },
            {
              tokenId:
                "0779ec04f2fae64e87418a1ad917639d4668f78484f45df962b0dec14a2591d2",
              amount: 2000n
            },
            {
              tokenId:
                "003bd19d0187117f130b62e1bcab0939929ff5c7709f843c5c4dd158949285d0",
              amount: 3765321n
            },
            {
              tokenId:
                "0cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324b",
              amount: 138n
            },
            {
              tokenId:
                "d71693c49a84fbbecd4908c94813b46514b18b67a99952dc1e6e4791556de413",
              amount: 6943n
            }
          ]
        }
      ]
    }
  },
  {
    name: "with context extension",
    hash: "0803cdd787362cc21634bb2e64490989a4bb1407c1edbd6726591ae83f66f4ac",
    hex: "027de60b1b86f2f517aa00fab7db85996279f897fa6e91c66b187a9c0d7276d4140001000402b5d8ff3e0ac23cd15beda4bf8a3487b64791dd82d8e8b24c390df6bb70a5c3780000001c472c3d4ecaa08fb7392ff041ee2e6af75f4a558810a74b28600549d5392810e8d71693c49a84fbbecd4908c94813b46514b18b67a99952dc1e6e4791556de41303faf2cb329f2e90d6d23b58d91bbb6c046aa143261cc21f52fbe2824bfcbf040cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324b18c938e1924fc3eadc266e75ec02d81fe73b56e4e9f4e268dffffcb30387c42d00bd762484086cf560d3127eb53f0769d76244d9737636b2699d55c56cd470bf59ee24951ce668f0ed32bdb2e2e5731b6c36128748a3b23c28407c5f8ccbf0f630974274078845f263b4f21787e33cc99e9ec19a17ad85a5bc6da2cca91c5a2e1fd6e032e8476c4aa54c18c1a308dce83940e8f4a28f576440513ed7326ad4891c51c3a53abfe87e6db9a03c649e8360f255ffc4bd34303d30fc7db23ae551dba3b3fa62124ef52209a46121e3f93ca98d7fc24198009e90fde8205ef9d3fc3302f31739e2e4937bb9afb552943753d1e3e9cdd1a5e5661949cb0cef93f907ead601123e8838b95cdaebe24e594276b2a89cd38e98add98405bb5327520ecf6c003bd19d0187117f130b62e1bcab0939929ff5c7709f843c5c4dd158949285d0bf337a2ce726259ad31e043c5b3d432e31b403fc6686691171e0e0a319b9ae7a74251ce2cb4eb2024a1a155e19ad1d1f58ff8b9e6eb034a3bb1fd58802757d23fbbaac7337d051c10fc3da0ccb864f4d32d40027551e1c3ea3ce361f39b91e40ef802b475c06189fdbf844153cdc1d449a5ba87cce13d11bb47b5a539f27f12bbeefc19f4224eec14d5cfb984b31bd691a4b20d1a7909e0e53fe4c9ea9b1b002bf59773def7e08375a553be4cbd862de85f66e6dd3dccb8f87f53158f9255bf55a34d53ca483924b9a6aa0c771f11888881b516a8d1a9cdc535d063fe26d065ee8b20745ee9d18817305f32eb21015831a48f02d40980de6e849f886dca7f80700b1e236b60b95c2c6f8007a9d89bc460fc9e78f98b09faec9449007b40bccf336aba4b4a97b65be491cf9f5ca57b5408b0da8d0194f30ec8330d1e8946161c1bf2afb01fde7e373e22f24032434a7b883913bd87a23b62ee8b43eba53c9f6c2ee105e8290b090a773b7c56756507d45a76743d73bce54e8a915e95d9eb973603405d8f709a19479839597f9a22a7553bdfc1a590a427572787d7c44a88b638650fdc80e168c153e472bd7e3dd18a4a0b9e90c550206fdbdb789ee8afdd3b1a9048094ebdc030008cd038d39af8c37583609ff51c6a577efe60684119da2fbd0d75f9c72372886a58a63baa8360000c08a8fd903100604000e20472c3d4ecaa08fb7392ff041ee2e6af75f4a558810a74b28600549d5392810e80400040005000500d803d601e30004d602e4c6a70408d603e4c6a7050595e67201d804d604b2a5e4720100d605b2db63087204730000d606db6308a7d60799c1a7c17204d1968302019683050193c27204c2a7938c720501730193e4c672040408720293e4c672040505720393e4c67204060ec5a796830201929c998c7205029591b1720673028cb272067303000273047203720792720773057202baa836010080b66b0308cd0377f4a3eb90abc59d3d31a0860bd9215444f467e743d9ef1de3262a1d35fa4ae5050a0e207de60b1b86f2f517aa00fab7db85996279f897fa6e91c66b187a9c0d7276d414c0a386011005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304baa8360000f2d3d4ad0b0008cd038d39af8c37583609ff51c6a577efe60684119da2fbd0d75f9c72372886a58a63baa8361c0080bb8a0401c315021703a9900104c1920405b18501060207e0b09089f20708a69d06099b040a010bced00c0c9ca4cb070d010e010f80a0b787e90510c00f11eff4aab4ba0b1280ecb6c5b4eca62513adfaa5efc79e849111142115c0fae82a16f8b2231703180119b581e596011a011b0100",
    json: {
      inputs: [
        {
          boxId:
            "7de60b1b86f2f517aa00fab7db85996279f897fa6e91c66b187a9c0d7276d414",
          extension: {
            "0": "0402",
            "1": undefined
          }
        },
        {
          boxId:
            "b5d8ff3e0ac23cd15beda4bf8a3487b64791dd82d8e8b24c390df6bb70a5c378",
          extension: {}
        }
      ],
      dataInputs: [],
      outputs: [
        {
          boxId:
            "0ef3684d3500b11d4ab8d8965bb6360ec186b12616e310e9497c03653d88e83d",
          value: 1000000000n,
          creationHeight: 889914,
          ergoTree:
            "0008cd038d39af8c37583609ff51c6a577efe60684119da2fbd0d75f9c72372886a58a63",
          additionalRegisters: {},
          assets: []
        },
        {
          boxId:
            "b4ab781069c0f0a24d9a3097b5d5955a76c1dc72f217a21a25698f1c51ff2e55",
          value: 992200000n,
          creationHeight: 889914,
          ergoTree:
            "100604000e20472c3d4ecaa08fb7392ff041ee2e6af75f4a558810a74b28600549d5392810e80400040005000500d803d601e30004d602e4c6a70408d603e4c6a7050595e67201d804d604b2a5e4720100d605b2db63087204730000d606db6308a7d60799c1a7c17204d1968302019683050193c27204c2a7938c720501730193e4c672040408720293e4c672040505720393e4c67204060ec5a796830201929c998c7205029591b1720673028cb272067303000273047203720792720773057202",
          additionalRegisters: {
            R4: "08cd0377f4a3eb90abc59d3d31a0860bd9215444f467e743d9ef1de3262a1d35fa4ae5",
            R5: "050a",
            R6: "0e207de60b1b86f2f517aa00fab7db85996279f897fa6e91c66b187a9c0d7276d414"
          },
          assets: [
            {
              tokenId:
                "472c3d4ecaa08fb7392ff041ee2e6af75f4a558810a74b28600549d5392810e8",
              amount: 1760000n
            }
          ]
        },
        {
          boxId:
            "ea5309407bcc3d3806aad21f5b605a9a1b604b26c77da823eb30815b80fcc202",
          value: 2200000n,
          creationHeight: 889914,
          ergoTree:
            "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
          additionalRegisters: {},
          assets: []
        },
        {
          boxId:
            "a52cea531b25b1f9ec4f6be8e5443611c3b857b62f67495250e196c88166e1fa",
          value: 3048548850n,
          creationHeight: 889914,
          ergoTree:
            "0008cd038d39af8c37583609ff51c6a577efe60684119da2fbd0d75f9c72372886a58a63",
          additionalRegisters: {},
          assets: [
            {
              tokenId:
                "472c3d4ecaa08fb7392ff041ee2e6af75f4a558810a74b28600549d5392810e8",
              amount: 8560000n
            },
            {
              tokenId:
                "d71693c49a84fbbecd4908c94813b46514b18b67a99952dc1e6e4791556de413",
              amount: 2755n
            },
            {
              tokenId:
                "03faf2cb329f2e90d6d23b58d91bbb6c046aa143261cc21f52fbe2824bfcbf04",
              amount: 23n
            },
            {
              tokenId:
                "0cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324b",
              amount: 18473n
            },
            {
              tokenId:
                "18c938e1924fc3eadc266e75ec02d81fe73b56e4e9f4e268dffffcb30387c42d",
              amount: 67905n
            },
            {
              tokenId:
                "00bd762484086cf560d3127eb53f0769d76244d9737636b2699d55c56cd470bf",
              amount: 17073n
            },
            {
              tokenId:
                "59ee24951ce668f0ed32bdb2e2e5731b6c36128748a3b23c28407c5f8ccbf0f6",
              amount: 2n
            },
            {
              tokenId:
                "30974274078845f263b4f21787e33cc99e9ec19a17ad85a5bc6da2cca91c5a2e",
              amount: 271138953312n
            },
            {
              tokenId:
                "1fd6e032e8476c4aa54c18c1a308dce83940e8f4a28f576440513ed7326ad489",
              amount: 102054n
            },
            {
              tokenId:
                "1c51c3a53abfe87e6db9a03c649e8360f255ffc4bd34303d30fc7db23ae551db",
              amount: 539n
            },
            {
              tokenId:
                "a3b3fa62124ef52209a46121e3f93ca98d7fc24198009e90fde8205ef9d3fc33",
              amount: 1n
            },
            {
              tokenId:
                "02f31739e2e4937bb9afb552943753d1e3e9cdd1a5e5661949cb0cef93f907ea",
              amount: 206926n
            },
            {
              tokenId:
                "d601123e8838b95cdaebe24e594276b2a89cd38e98add98405bb5327520ecf6c",
              amount: 15913500n
            },
            {
              tokenId:
                "003bd19d0187117f130b62e1bcab0939929ff5c7709f843c5c4dd158949285d0",
              amount: 1n
            },
            {
              tokenId:
                "bf337a2ce726259ad31e043c5b3d432e31b403fc6686691171e0e0a319b9ae7a",
              amount: 1n
            },
            {
              tokenId:
                "74251ce2cb4eb2024a1a155e19ad1d1f58ff8b9e6eb034a3bb1fd58802757d23",
              amount: 200000000000n
            },
            {
              tokenId:
                "fbbaac7337d051c10fc3da0ccb864f4d32d40027551e1c3ea3ce361f39b91e40",
              amount: 1984n
            },
            {
              tokenId:
                "ef802b475c06189fdbf844153cdc1d449a5ba87cce13d11bb47b5a539f27f12b",
              amount: 393636133487n
            },
            {
              tokenId:
                "beefc19f4224eec14d5cfb984b31bd691a4b20d1a7909e0e53fe4c9ea9b1b002",
              amount: 20999999000000000n
            },
            {
              tokenId:
                "bf59773def7e08375a553be4cbd862de85f66e6dd3dccb8f87f53158f9255bf5",
              amount: 1234567890123455789n
            },
            {
              tokenId:
                "5a34d53ca483924b9a6aa0c771f11888881b516a8d1a9cdc535d063fe26d065e",
              amount: 33n
            },
            {
              tokenId:
                "e8b20745ee9d18817305f32eb21015831a48f02d40980de6e849f886dca7f807",
              amount: 89800000n
            },
            {
              tokenId:
                "00b1e236b60b95c2c6f8007a9d89bc460fc9e78f98b09faec9449007b40bccf3",
              amount: 579960n
            },
            {
              tokenId:
                "36aba4b4a97b65be491cf9f5ca57b5408b0da8d0194f30ec8330d1e8946161c1",
              amount: 3n
            },
            {
              tokenId:
                "bf2afb01fde7e373e22f24032434a7b883913bd87a23b62ee8b43eba53c9f6c2",
              amount: 1n
            },
            {
              tokenId:
                "ee105e8290b090a773b7c56756507d45a76743d73bce54e8a915e95d9eb97360",
              amount: 316227765n
            },
            {
              tokenId:
                "3405d8f709a19479839597f9a22a7553bdfc1a590a427572787d7c44a88b6386",
              amount: 1n
            },
            {
              tokenId:
                "50fdc80e168c153e472bd7e3dd18a4a0b9e90c550206fdbdb789ee8afdd3b1a9",
              amount: 1n
            }
          ]
        }
      ]
    }
  },
  {
    name: "without tokens",
    hash: "2d2abf0ec969fa3f2aef32430de16288099a2b4e00f2b4f15e009fa2ccdd4fdb",
    hex: "0a4eac3e472d075056a714e99041512eaffc909b5ae57676313074e2278b12188c00005bd6b8472d780bae98e04f86deb9a3850b38e3aefc3d673518a78a17f79853f20000647855d912a2d8a25de0a4c63c17738298b282b2a0a21a1deb610d7ba0bcc4140000647d1eed7f147c86eadddd8f4adbb1e2e71e9fb424abc1512339812345a4613300006ac343b7046142246cf9281b9d2f23d21adf61724b06d3f90e8542d97c15382c000079df8579285b4d1de25cda5f4ffae6facad8062b33d822e0a43e130b051c3517000083f7dac6ec2f4f3ab893ca0febeeea88b224e7ed2da77da4270a72859c0b48f900008729717a40af80b3d370c1740cb2f178cfed30cb86b3deb825afbfee7f9fb0fb000089f2fd65c91fdb5a8981627a8f792ab816f64f0c65884f912c1ae31a60af4fb80000a5e012c1d09ee37101701d77414b7acb24d6f5b94ac452e56166dce506e5c7380000000002a9b095ab190008cd027304abbaebe8bb3a9e963dfa9fa4964d7d001e6a1bd225eadc84048ae49b627ca4ca39000080ade2041005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304a4ca390000",
    json: {
      inputs: [
        {
          boxId:
            "4eac3e472d075056a714e99041512eaffc909b5ae57676313074e2278b12188c",
          extension: {}
        },
        {
          boxId:
            "5bd6b8472d780bae98e04f86deb9a3850b38e3aefc3d673518a78a17f79853f2",
          extension: {}
        },
        {
          boxId:
            "647855d912a2d8a25de0a4c63c17738298b282b2a0a21a1deb610d7ba0bcc414",
          extension: {}
        },
        {
          boxId:
            "647d1eed7f147c86eadddd8f4adbb1e2e71e9fb424abc1512339812345a46133",
          extension: {}
        },
        {
          boxId:
            "6ac343b7046142246cf9281b9d2f23d21adf61724b06d3f90e8542d97c15382c",
          extension: {}
        },
        {
          boxId:
            "79df8579285b4d1de25cda5f4ffae6facad8062b33d822e0a43e130b051c3517",
          extension: {}
        },
        {
          boxId:
            "83f7dac6ec2f4f3ab893ca0febeeea88b224e7ed2da77da4270a72859c0b48f9",
          extension: {}
        },
        {
          boxId:
            "8729717a40af80b3d370c1740cb2f178cfed30cb86b3deb825afbfee7f9fb0fb",
          extension: {}
        },
        {
          boxId:
            "89f2fd65c91fdb5a8981627a8f792ab816f64f0c65884f912c1ae31a60af4fb8",
          extension: {}
        },
        {
          boxId:
            "a5e012c1d09ee37101701d77414b7acb24d6f5b94ac452e56166dce506e5c738",
          extension: {}
        }
      ],
      dataInputs: [],
      outputs: [
        {
          boxId:
            "11beed33735ab766b7c12833eb22110fefee2e9d3c35cc63b63f99c3750b1a1f",
          value: 6801414185n,
          creationHeight: 943396,
          ergoTree:
            "0008cd027304abbaebe8bb3a9e963dfa9fa4964d7d001e6a1bd225eadc84048ae49b627c",
          additionalRegisters: {},
          assets: []
        },
        {
          boxId:
            "5d1eb171d8e90b6afe04e3ce9dfec09abf0ca9d73f6e8613ff479a18b41e40fe",
          value: 10000000n,
          creationHeight: 943396,
          ergoTree:
            "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
          additionalRegisters: {},
          assets: []
        }
      ]
    }
  },
  {
    name: "With many tokens",
    hash: "d81fd5aef51efd112cfa16bf3b828def1c9eaa5239fbd6ecd66b622a37094037",
    hex: "0398ad09294af65c9867f6e7ab841d447477871e8d04d1def6d53efb4cc46a10b600005a85077756cb03f691333dccacc894b759acc89a21c93fe099727dcc58b31abc00000c1fb353d7ddcd58b3bd252a523331bbf8e3dc05b23e11f6b2041c07ee194a4b0000001bd71693c49a84fbbecd4908c94813b46514b18b67a99952dc1e6e4791556de41303faf2cb329f2e90d6d23b58d91bbb6c046aa143261cc21f52fbe2824bfcbf04ee77ee100560655bd5ef0639890c1968850b74065033c450ae414b699a2bb92ce8b20745ee9d18817305f32eb21015831a48f02d40980de6e849f886dca7f8070cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324b30974274078845f263b4f21787e33cc99e9ec19a17ad85a5bc6da2cca91c5a2eef802b475c06189fdbf844153cdc1d449a5ba87cce13d11bb47b5a539f27f12b18c938e1924fc3eadc266e75ec02d81fe73b56e4e9f4e268dffffcb30387c42dabaf9df62c6810b0198333b122d130c29d76d64c6d7f4d57108afc5aaa95efb500b1e236b60b95c2c6f8007a9d89bc460fc9e78f98b09faec9449007b40bccf300bd762484086cf560d3127eb53f0769d76244d9737636b2699d55c56cd470bfe91cbc48016eb390f8f872aa2962772863e2e840708517d1ab85e57451f91bed74251ce2cb4eb2024a1a155e19ad1d1f58ff8b9e6eb034a3bb1fd58802757d23bf2afb01fde7e373e22f24032434a7b883913bd87a23b62ee8b43eba53c9f6c2bf337a2ce726259ad31e043c5b3d432e31b403fc6686691171e0e0a319b9ae7a5a34d53ca483924b9a6aa0c771f11888881b516a8d1a9cdc535d063fe26d065ea3b3fa62124ef52209a46121e3f93ca98d7fc24198009e90fde8205ef9d3fc3302f31739e2e4937bb9afb552943753d1e3e9cdd1a5e5661949cb0cef93f907eabf59773def7e08375a553be4cbd862de85f66e6dd3dccb8f87f53158f9255bf559ee24951ce668f0ed32bdb2e2e5731b6c36128748a3b23c28407c5f8ccbf0f6ee105e8290b090a773b7c56756507d45a76743d73bce54e8a915e95d9eb97360fbbaac7337d051c10fc3da0ccb864f4d32d40027551e1c3ea3ce361f39b91e4050fdc80e168c153e472bd7e3dd18a4a0b9e90c550206fdbdb789ee8afdd3b1a9d601123e8838b95cdaebe24e594276b2a89cd38e98add98405bb5327520ecf6cbeefc19f4224eec14d5cfb984b31bd691a4b20d1a7909e0e53fe4c9ea9b1b0021c51c3a53abfe87e6db9a03c649e8360f255ffc4bd34303d30fc7db23ae551db36aba4b4a97b65be491cf9f5ca57b5408b0da8d0194f30ec8330d1e8946161c10380a8d6b9071012040005e80705c09a0c08cd03a11d3028b9bc57b6ac724485e99960b89c278db6bab5d2b961b01aee29405a0205a0060601000e20eccbd70bb2ed259a3f6888c4b68bbd963ff61e2d71cdfda3c7234231e1e4b76604020400043c04100400040401010402040601010101d80bd601b2a5730000d602e4c6a70408d603e4c6a70704d604e4c6a70505d605e30008d606e67205d6077301d6087302d6097303d60a957206d801d60a7e72040683024406860272099d9c7e720706720a7e7208068602e472059d9c7e730406720a7e72080683014406860272099d9c7e7207067e7204067e720806d60b730595937306cbc27201d804d60c999aa37203e4c672010704d60db2a5730700d60eb2720a730800d60f8c720e02d1ed96830b0193e4c67201040ec5a793e4c672010508720293e4c672010605e4c6a70605e6c67201080893db63087201db6308a793c17201c1a7927203730990720c730a92720c730b93c2720dd0720293c1720d7204ed9591720f720bd801d610b2a5730c009683020193c27210d08c720e01937ec1721006720f730d957206d802d610b2720a730e00d6118c72100295917211720bd801d612b2a5730f009683020193c27212d08c721001937ec17212067211731073117202ba9239000408cd02f31eb1d87a89b28cee6a4a458380c4651965bfe9096ef5c31e4452400a8461890580a8d6b90705c0c2e2b90704c016c0a386011005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304ba92390000ccddbdcd030008cd02f31eb1d87a89b28cee6a4a458380c4651965bfe9096ef5c31e4452400a846189ba92391b00900d0161020103c0fae82a04a9900105e0b09089f20706eff4aab4ba0b07c1920408b21b09f8b2230ab185010bf80a0c80a0b787e9050d010e010f21100111ced00c12adfaa5efc79e849111130214b581e5960115d8071601179ca4cb071880ecb6c5b4eca625199b041a0300",
    json: {
      inputs: [
        {
          boxId:
            "98ad09294af65c9867f6e7ab841d447477871e8d04d1def6d53efb4cc46a10b6",
          extension: {}
        },
        {
          boxId:
            "5a85077756cb03f691333dccacc894b759acc89a21c93fe099727dcc58b31abc",
          extension: {}
        },
        {
          boxId:
            "0c1fb353d7ddcd58b3bd252a523331bbf8e3dc05b23e11f6b2041c07ee194a4b",
          extension: {}
        }
      ],
      dataInputs: [],
      outputs: [
        {
          boxId:
            "8db7c48ca1198058313e8bbe8aaef8222c3895b3503ea7ccb1bf46d29f109895",
          value: 2000000000n,
          creationHeight: 936250,
          ergoTree:
            "1012040005e80705c09a0c08cd03a11d3028b9bc57b6ac724485e99960b89c278db6bab5d2b961b01aee29405a0205a0060601000e20eccbd70bb2ed259a3f6888c4b68bbd963ff61e2d71cdfda3c7234231e1e4b76604020400043c04100400040401010402040601010101d80bd601b2a5730000d602e4c6a70408d603e4c6a70704d604e4c6a70505d605e30008d606e67205d6077301d6087302d6097303d60a957206d801d60a7e72040683024406860272099d9c7e720706720a7e7208068602e472059d9c7e730406720a7e72080683014406860272099d9c7e7207067e7204067e720806d60b730595937306cbc27201d804d60c999aa37203e4c672010704d60db2a5730700d60eb2720a730800d60f8c720e02d1ed96830b0193e4c67201040ec5a793e4c672010508720293e4c672010605e4c6a70605e6c67201080893db63087201db6308a793c17201c1a7927203730990720c730a92720c730b93c2720dd0720293c1720d7204ed9591720f720bd801d610b2a5730c009683020193c27210d08c720e01937ec1721006720f730d957206d802d610b2720a730e00d6118c72100295917211720bd801d612b2a5730f009683020193c27212d08c721001937ec17212067211731073117202",
          additionalRegisters: {
            R4: "08cd02f31eb1d87a89b28cee6a4a458380c4651965bfe9096ef5c31e4452400a846189",
            R5: "0580a8d6b907",
            R6: "05c0c2e2b907",
            R7: "04c016"
          },
          assets: []
        },
        {
          boxId:
            "6392e2e0e7bae3cb42c5b70188a8f99560f8caa3dcb4d9c663557b2a1b3e4d94",
          value: 2200000n,
          creationHeight: 936250,
          ergoTree:
            "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
          additionalRegisters: {},
          assets: []
        },
        {
          boxId:
            "90f94439d57d47a762cecb9daca1c30acc39ddc497c151a3462f701df9bea27e",
          value: 967798476n,
          creationHeight: 936250,
          ergoTree:
            "0008cd02f31eb1d87a89b28cee6a4a458380c4651965bfe9096ef5c31e4452400a846189",
          additionalRegisters: {},
          assets: [
            {
              tokenId:
                "d71693c49a84fbbecd4908c94813b46514b18b67a99952dc1e6e4791556de413",
              amount: 1680n
            },
            {
              tokenId:
                "03faf2cb329f2e90d6d23b58d91bbb6c046aa143261cc21f52fbe2824bfcbf04",
              amount: 97n
            },
            {
              tokenId:
                "ee77ee100560655bd5ef0639890c1968850b74065033c450ae414b699a2bb92c",
              amount: 1n
            },
            {
              tokenId:
                "e8b20745ee9d18817305f32eb21015831a48f02d40980de6e849f886dca7f807",
              amount: 89800000n
            },
            {
              tokenId:
                "0cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324b",
              amount: 18473n
            },
            {
              tokenId:
                "30974274078845f263b4f21787e33cc99e9ec19a17ad85a5bc6da2cca91c5a2e",
              amount: 271138953312n
            },
            {
              tokenId:
                "ef802b475c06189fdbf844153cdc1d449a5ba87cce13d11bb47b5a539f27f12b",
              amount: 393636133487n
            },
            {
              tokenId:
                "18c938e1924fc3eadc266e75ec02d81fe73b56e4e9f4e268dffffcb30387c42d",
              amount: 67905n
            },
            {
              tokenId:
                "abaf9df62c6810b0198333b122d130c29d76d64c6d7f4d57108afc5aaa95efb5",
              amount: 3506n
            },
            {
              tokenId:
                "00b1e236b60b95c2c6f8007a9d89bc460fc9e78f98b09faec9449007b40bccf3",
              amount: 579960n
            },
            {
              tokenId:
                "00bd762484086cf560d3127eb53f0769d76244d9737636b2699d55c56cd470bf",
              amount: 17073n
            },
            {
              tokenId:
                "e91cbc48016eb390f8f872aa2962772863e2e840708517d1ab85e57451f91bed",
              amount: 1400n
            },
            {
              tokenId:
                "74251ce2cb4eb2024a1a155e19ad1d1f58ff8b9e6eb034a3bb1fd58802757d23",
              amount: 200000000000n
            },
            {
              tokenId:
                "bf2afb01fde7e373e22f24032434a7b883913bd87a23b62ee8b43eba53c9f6c2",
              amount: 1n
            },
            {
              tokenId:
                "bf337a2ce726259ad31e043c5b3d432e31b403fc6686691171e0e0a319b9ae7a",
              amount: 1n
            },
            {
              tokenId:
                "5a34d53ca483924b9a6aa0c771f11888881b516a8d1a9cdc535d063fe26d065e",
              amount: 33n
            },
            {
              tokenId:
                "a3b3fa62124ef52209a46121e3f93ca98d7fc24198009e90fde8205ef9d3fc33",
              amount: 1n
            },
            {
              tokenId:
                "02f31739e2e4937bb9afb552943753d1e3e9cdd1a5e5661949cb0cef93f907ea",
              amount: 206926n
            },
            {
              tokenId:
                "bf59773def7e08375a553be4cbd862de85f66e6dd3dccb8f87f53158f9255bf5",
              amount: 1234567890123455789n
            },
            {
              tokenId:
                "59ee24951ce668f0ed32bdb2e2e5731b6c36128748a3b23c28407c5f8ccbf0f6",
              amount: 2n
            },
            {
              tokenId:
                "ee105e8290b090a773b7c56756507d45a76743d73bce54e8a915e95d9eb97360",
              amount: 316227765n
            },
            {
              tokenId:
                "fbbaac7337d051c10fc3da0ccb864f4d32d40027551e1c3ea3ce361f39b91e40",
              amount: 984n
            },
            {
              tokenId:
                "50fdc80e168c153e472bd7e3dd18a4a0b9e90c550206fdbdb789ee8afdd3b1a9",
              amount: 1n
            },
            {
              tokenId:
                "d601123e8838b95cdaebe24e594276b2a89cd38e98add98405bb5327520ecf6c",
              amount: 15913500n
            },
            {
              tokenId:
                "beefc19f4224eec14d5cfb984b31bd691a4b20d1a7909e0e53fe4c9ea9b1b002",
              amount: 20999999000000000n
            },
            {
              tokenId:
                "1c51c3a53abfe87e6db9a03c649e8360f255ffc4bd34303d30fc7db23ae551db",
              amount: 539n
            },
            {
              tokenId:
                "36aba4b4a97b65be491cf9f5ca57b5408b0da8d0194f30ec8330d1e8946161c1",
              amount: 3n
            }
          ]
        }
      ]
    }
  },
  {
    name: "With one token",
    hash: "28b75adc97f947e7a404de58b8211905f9c3924fa1e481dbe397f51b712a7879",
    hex: "02ce2d7c76f8d28aacc7ca0fa4d320725564f8b57c8dc6e3bbde7c7c0c397bde6f000088e7f34d851659189697e1aa6be84aed8b0c9e4f8b8a627517fde8cc04b14811000000019a06d9e545a41fd51eeffc5e20d818073bf820c635e2a9d922269913e0de369d03c0843d0008cd038d39af8c37583609ff51c6a577efe60684119da2fbd0d75f9c72372886a58a63ecc43901008bd62500e091431005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304ecc439000080c3b1040008cd038d39af8c37583609ff51c6a577efe60684119da2fbd0d75f9c72372886a58a63ecc4390000",
    json: {
      inputs: [
        {
          boxId:
            "ce2d7c76f8d28aacc7ca0fa4d320725564f8b57c8dc6e3bbde7c7c0c397bde6f",
          extension: {}
        },
        {
          boxId:
            "88e7f34d851659189697e1aa6be84aed8b0c9e4f8b8a627517fde8cc04b14811",
          extension: {}
        }
      ],
      dataInputs: [],
      outputs: [
        {
          value: 1000000n,
          ergoTree:
            "0008cd038d39af8c37583609ff51c6a577efe60684119da2fbd0d75f9c72372886a58a63",
          assets: [
            {
              tokenId:
                "9a06d9e545a41fd51eeffc5e20d818073bf820c635e2a9d922269913e0de369d",
              amount: 617227n
            }
          ],
          additionalRegisters: {},
          creationHeight: 942700
        },
        {
          value: 1100000n,
          ergoTree:
            "1005040004000e36100204a00b08cd0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798ea02d192a39a8cc7a701730073011001020402d19683030193a38cc7b2a57300000193c2b2a57301007473027303830108cdeeac93b1a57304",
          assets: [],
          additionalRegisters: {},
          creationHeight: 942700
        },
        {
          value: 9200000n,
          ergoTree:
            "0008cd038d39af8c37583609ff51c6a577efe60684119da2fbd0d75f9c72372886a58a63",
          assets: [],
          additionalRegisters: {},
          creationHeight: 942700
        }
      ]
    }
  }
];
