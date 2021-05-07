use cosmwasm_std::{
    to_binary, Api, Binary, Env, Extern, HandleResponse, InitResponse, Querier, StdError,
    StdResult, Storage, HumanAddr, MessageInfo,
};

use crate::msg::{CountResponse, HandleMsg, InitMsg, QueryMsg};
use crate::state::{config, config_read, State};

pub fn init<S: Storage, A: Api, Q: Querier>(
    deps: &mut Extern<S, A, Q>,
    env: Env,
    msg: InitMsg,
) -> StdResult<InitResponse> {
    let state = State {
        pot: msg.pot,
    };

    config(&mut deps.storage).save(&state)?;

    Ok(InitResponse::default())
}

// Actions which modify state. Write operations (broadcast)
pub fn handle<S: Storage, A: Api, Q: Querier>(
    deps: &mut Extern<S, A, Q>,
    env: Env,
    msg: HandleMsg,
) -> StdResult<HandleResponse> {
    match msg {
        HandleMsg::CreateBet { msg.info } => create_bet(deps, env, info),
    }
}

pub fn create_bet<S: Storage, A: Api, Q: Querier>(
    deps: &mut Extern<S, A, Q>,
    _env: Env,
    info: MessageInfo,
) -> StdResult<HandleResponse> {
    let sender_address_raw = deps.api.canonical_address(&info.sender)?;
    let key = &sender_address_raw.as_slice();
    // TODO 
    /*
    Extract the predicted_price parameter from the info structure
    Form an entry with the key-predicted_price pair
    */ 
    increment_pot();
    Ok(state)
    };

pub fn increment_pot<S: Storage, A: Api, Q: Querier>(
    deps: &mut Extern<S, A, Q>,
    env: Env,
    ) -> StdResult<HandleResponse> {
    config(&mut deps.storage).update(|mut state| {
        state.pot += 10;
        Ok(state)
    })?;

    // Ok(HandleResponse::default())
}

pub fn try_reset<S: Storage, A: Api, Q: Querier>(
    deps: &mut Extern<S, A, Q>,
    env: Env,
    count: i32,
) -> StdResult<HandleResponse> {
    let api = &deps.api;
    config(&mut deps.storage).update(|mut state| {
        if api.canonical_address(&env.message.sender)? != state.owner {
            return Err(StdError::unauthorized());
        }
        state.count = count;
        Ok(state)
    })?;
    Ok(HandleResponse::default())
}

// Functions for reading state. Read-only operations.
pub fn query<S: Storage, A: Api, Q: Querier>(
    deps: &Extern<S, A, Q>,
    msg: QueryMsg,
) -> StdResult<Binary> {
    match msg {
        QueryMsg::GetPot {} => to_binary(&query_count(deps)?),
    }
}

fn query_count<S: Storage, A: Api, Q: Querier>(deps: &Extern<S, A, Q>) -> StdResult<CountResponse> {
    let state = config_read(&deps.storage).load()?;
    Ok(CountResponse { count: state.pot })
}

// TODO ---> function to calculate the winner
