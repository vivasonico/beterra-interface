use cosmwasm_std::{HumanAddr, Uint128, MessageInfo};
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct InitMsg {  // InstantiateMsg in 0.13
    pub pot: i32,  // 
    pub asset: string,    // TODO
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub enum HandleMsg { // ExecuteMsg in 0.13
    CreateBet {
        info: MessageInfo,
    }
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub enum QueryMsg {
    // GetCount returns the current pot as a json-encoded number
    GetPot { total_amount: Option<Uint128> },
}

// We define a custom struct for each query response
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct CountResponse {
    pub count: i32,
}
