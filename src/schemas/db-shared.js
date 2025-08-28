const ProdChainObjectSchema = {
    timeUnit: "minute",
    crafterConfig: {
        "miner": "electric-mining-drill",
        "smelter": "steel-furnace",
        "assembler": "assembling-machine-1",
        "fluid-assembler": "assembling-machine-2",
        "chem": "chemical-plant",
        "centrifuge": "centrifuge",
        "oil-pump": "pumpjack",
        "refinery": "oil-refinery",
        "silo": "rocket-silo",
        "reactor": "nuclear-reactor",
        "water-pump": "offshore-pump",
        "manual": ""
    },
    beltConfig: {
        "belt-type": "transport-belt",
        "pipe-type": "pipe"
    },
    prodChain: {}
}

const DbSlotDocumentSchema = {
    username: '',
    index: 1,
    data: {
        ...ProdChainObjectSchema
    }
}

const FrontendSlotsSchema = {
    1: {},
    2: {},
    3: {}
}

module.exports = {DbSlotDocumentSchema, FrontendSlotsSchema}